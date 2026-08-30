# -*- coding: utf-8 -*-
"""Regenerate src/lib/data/umrahDetail/hotelInfo.js from the reference Word docs.

Usage (from the repo root, with the `references/` folder present):

    python scripts/generate-hotel-info.py

Reads   references/Holy Travellers Misc Material/Hotels/<City>/<N> Star/<Hotel>/*.docx
Writes  src/lib/data/umrahDetail/hotelInfo.js

Hotel names are keyed off the image folders under
public/hajj-ummrah/hajj-umrah-packages, matched to the reference folders by
image byte-identity, so the keys always line up with the package data.

Hotels with no Word document (currently Emaar Khalil) are covered by the
hand-maintained src/lib/data/umrahDetail/hotelInfoOverrides.js, which this
script never touches.
"""
import zipfile, re, html, os, hashlib, io, json, sys

REF = "references/Holy Travellers Misc Material/Hotels"
PUB = "public/hajj-ummrah/hajj-umrah-packages"

# --- map reference folder -> app hotel name, derived by image byte-identity ---
def md5(p):
    h = hashlib.md5()
    with open(p, 'rb') as f:
        for b in iter(lambda: f.read(1 << 20), b''): h.update(b)
    return h.hexdigest()

ref_hash = {}
for dp, _, fn in os.walk(REF):
    for f in fn:
        if os.path.splitext(f)[1].lower() in ('.jpg', '.jpeg', '.png', '.webp', '.avif'):
            ref_hash.setdefault(md5(os.path.join(dp, f)), []).append(
                os.path.relpath(dp, REF).replace(os.sep, '/'))

folder_for = {}
for dp, _, fn in os.walk(PUB):
    for f in fn:
        h = md5(os.path.join(dp, f))
        app = os.path.basename(dp)
        for r in ref_hash.get(h, []):
            folder_for.setdefault(app, set()).add(r)
NAME_FOR_REF = {}
for app, refs in folder_for.items():
    assert len(refs) == 1, (app, refs)
    NAME_FOR_REF[next(iter(refs))] = app

# --- docx -> lines ---
JUNK = {'\u7a97\u4f53\u9876\u7aef', '\u7a97\u4f53\u5e95\u7aef'}
def doc_lines(path):
    with zipfile.ZipFile(path) as z:
        xml = z.read('word/document.xml').decode('utf-8')
    xml = re.sub(r'</w:p>', '\n', xml)
    xml = re.sub(r'<[^>]+>', '', xml)
    out = []
    for l in html.unescape(xml).split('\n'):
        l = l.replace('\u00a0', ' ').replace('\ufeff', '')
        l = re.sub(r'^[\uf000-\uf0ff\u2022\u00b7\-\*\s]+', '', l).strip()
        l = re.sub(r'\s+', ' ', l)
        if l and l not in JUNK:
            out.append(l)
    return out

# The three document layouts use different category vocabularies. They must be
# kept separate: "Parking" and "Dining" head a section in the Booking.com-style
# layout, but are ordinary items under "General" in the "Facilities" layout.
CATEGORIES_FACILITIES = {
    'General', 'Dining', 'Leisure & Sports', 'Services',
    'Shops/Commercial services', 'Room Amenities', 'Pool and beach',
}
CATEGORIES_FEATURES = {
    'Internet connection', 'Parking', 'Services', 'Dining', 'Kitchen has',
    'For business', 'For disabled guests', 'Rooms have', 'Bathroom has',
    'Media', 'Design', 'General facilities', 'Pets',
}
CATEGORIES_BOOKING = {
    'Internet', 'Parking', 'Bathroom', 'Bedroom', 'View', 'Kitchen',
    'Room Amenities', 'Media & Technology', 'Food & Drink', 'Services',
    'Safety & security', 'General', 'Accessibility', 'Wellness',
    'Languages spoken',
}
CATEGORIES = CATEGORIES_FACILITIES | CATEGORIES_FEATURES | CATEGORIES_BOOKING

# The three layouts label equivalent groups differently; fold them onto one
# vocabulary so every hotel renders with the same section names.
CATEGORY_ALIASES = {
    'General facilities': 'General',
    'Internet connection': 'Internet',
    'Rooms have': 'Room Amenities',
    'Bathroom has': 'Bathroom',
    'Kitchen has': 'Kitchen',
    'For business': 'Business',
    'Shops/Commercial services': 'Business',
    'For disabled guests': 'Accessibility',
    'Media & Technology': 'Media',
    'Food & Drink': 'Dining',
    'Safety & security': 'Safety',
    'Leisure & Sports': 'Leisure',
    'Pool and beach': 'Leisure',
}
CATEGORY_ORDER = [
    'General', 'Internet', 'Parking', 'Dining', 'Kitchen', 'Room Amenities',
    'Bathroom', 'Bedroom', 'View', 'Media', 'Services', 'Business', 'Leisure',
    'Wellness', 'Safety', 'Accessibility', 'Design', 'Languages spoken', 'Pets',
]

START_MARKERS = {'Facilities', 'Features'}
STOP_MARKERS = {'Conditions'}

def parse(lines):
    # Locate where the facilities listing begins. Prefer the explicit
    # "Facilities"/"Features" heading: several category names ("Parking",
    # "Dining") also appear as highlight chips above the description, so
    # category matching alone would cut the description off.
    start = None
    for i, l in enumerate(lines):
        if l in START_MARKERS:
            start = i
            break
    categories = CATEGORIES_FACILITIES
    if start is not None and lines[start] == 'Features':
        categories = CATEGORIES_FEATURES
    if start is None:
        # No explicit heading (Batoul Ajyad): fall back to the first category
        # line that appears after the description prose.
        categories = CATEGORIES_BOOKING
        seen_prose = False
        for i, l in enumerate(lines):
            if len(l) > 90:
                seen_prose = True
            elif seen_prose and l in categories:
                start = i
                break
    head = lines[1:start] if start is not None else lines[1:]
    tail = lines[start:] if start is not None else []

    highlights, description = [], []
    for l in head:
        # a real sentence is long and punctuated; anything else is a chip
        if len(l) > 90 or (l.endswith('.') and len(l.split()) > 8):
            description.append(l)
        elif len(l) <= 40 and not description:
            highlights.append(l)

    facilities, current = [], None
    for l in tail:
        if l in STOP_MARKERS:
            break
        if l in START_MARKERS:
            continue
        if l in categories:
            current = {'category': CATEGORY_ALIASES.get(l, l), 'items': []}
            facilities.append(current)
            continue
        if current is None:
            continue
        # some documents join items with commas on one line
        parts = [p.strip() for p in l.split(',')] if (', ' in l and len(l) > 40) else [l]
        for p in parts:
            p = re.sub(r'\s*Additional charge$', '', p).strip()
            if p and p != current['category'] and p not in current['items']:
                current['items'].append(p)

    seen = set()
    description = [d for d in description
                   if not (d in seen or seen.add(d))]
    facilities = [f for f in facilities if f['items']]
    # merge duplicate category headings (Batoul Ajyad lists "Services" twice)
    merged = {}
    for f in facilities:
        merged.setdefault(f['category'], [])
        for i in f['items']:
            if i not in merged[f['category']]:
                merged[f['category']].append(i)
    order = {c: i for i, c in enumerate(CATEGORY_ORDER)}
    out = [{'category': k, 'items': v} for k, v in merged.items()]
    out.sort(key=lambda f: order.get(f['category'], len(CATEGORY_ORDER)))
    return highlights, description, out

hotels = {}
for dp, _, fn in os.walk(REF):
    for f in fn:
        if not f.endswith('.docx'):
            continue
        rel = os.path.relpath(dp, REF).replace(os.sep, '/')
        name = NAME_FOR_REF.get(rel)
        if not name:
            print('  (no app folder for %s)' % rel, file=sys.stderr)
            continue
        hi, de, fa = parse(doc_lines(os.path.join(dp, f)))
        hotels[name] = {
            'city': rel.split('/')[0],
            'stars': int(rel.split('/')[1][0]),
            'highlights': hi,
            'description': de,
            'facilities': fa,
            'source': f,
        }


OUT = "src/lib/data/umrahDetail/hotelInfo.js"

def j(v): return json.dumps(v, ensure_ascii=False)
out = io.StringIO()
out.write("""// Hotel descriptions, highlights and facilities for the Makkah/Madinah blocks
// on /hajj-umrah/[tier]/umrahDetail.
//
// GENERATED from the Word documents in
// "references/Holy Travellers Misc Material/Hotels/<City>/<N> Star/<Hotel>/*.docx".
// Keys match the hotel names used in the package data (src/lib/data/hajj-umrah)
// and the image folders under public/hajj-ummrah/hajj-umrah-packages.
// Re-generate rather than hand-editing if the reference documents change:
//   python scripts/generate-hotel-info.py
//
// Hotels with no reference document live in hotelInfoOverrides.js, which is
// hand-maintained and takes precedence over anything here.

import { HOTEL_INFO_OVERRIDES } from "./hotelInfoOverrides";

export const HOTEL_INFO = {
""")
for name in sorted(hotels):
    h = hotels[name]
    out.write("  %s: {\n" % j(name))
    out.write("    city: %s,\n" % j(h['city']))
    out.write("    stars: %d,\n" % h['stars'])
    out.write("    highlights: [%s],\n" % (
        "\n      " + ",\n      ".join(j(x) for x in h['highlights']) + ",\n    "
        if h['highlights'] else ""))
    out.write("    description: [\n")
    for d in h['description']:
        out.write("      %s,\n" % j(d))
    out.write("    ],\n")
    out.write("    facilities: [\n")
    for c in h['facilities']:
        out.write("      {\n        category: %s,\n        items: [\n" % j(c['category']))
        for i in c['items']:
            out.write("          %s,\n" % j(i))
        out.write("        ],\n      },\n")
    out.write("    ],\n  },\n")
out.write("};\n\nexport const getHotelInfo = (name) =>\n"
          "  HOTEL_INFO_OVERRIDES[name] ?? HOTEL_INFO[name] ?? null;\n")
io.open(OUT, 'w', encoding='utf-8', newline='\n').write(out.getvalue())
print("wrote %s (%d hotels)" % (OUT, len(hotels)))

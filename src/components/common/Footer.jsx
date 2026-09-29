"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Mail, MapPin, Phone } from "lucide-react";
import ContentLayoutWrapper from "./ContentLayoutWrapper";
import NewsletterForm from "@/components/common/NewsletterForm";
import { phoneHref } from "@/components/common/PhoneNumberViewer";
import { Eyebrow } from "@/components/ui/SectionHeading";
import { data } from "@/lib/contactInfo";

// Photo shown in the newsletter card, per section of the site.
const FOOTER_IMAGE_MAP = [
  { match: "/hotels", src: "/footer/hotelFooter.png" },
  { match: "/holidayPackages", src: "/footer/holidayPackagesFooter.png" },
  { match: "/contact", src: "/footer/contactFooter.png" },
];
const DEFAULT_FOOTER_IMAGE = "/footer/homeFooter.png";

const BRANDS = [
  { src: "/footer/iata.png", alt: "IATA" },
  { src: "/footer/atol.png", alt: "ATOL" },
  { src: "/footer/arab.png", alt: "Kingdom of Saudi Arabia" },
  { src: "/footer/abta.png", alt: "ABTA" },
];

const SOCIALS = [
  { icon: "/social-media/facebook.png", href: data.socials.facebook, label: "Facebook" },
  { icon: "/social-media/instagram.png", href: data.socials.instagram, label: "Instagram" },
  { icon: "/social-media/tik-tok.png", href: data.socials.tiktok, label: "TikTok" },
];

const CARDS = [
  { src: "/footer/visa.png", alt: "Visa" },
  { src: "/footer/mastercard.png", alt: "Mastercard" },
  { src: "/footer/american-express.png", alt: "American Express" },
  { src: "/footer/stripecard.png", alt: "Stripe" },
  { src: "/footer/paypal.png", alt: "PayPal" },
];

const CONTACT_INFO = [
  { icon: Phone, text: data.PhoneNumber, href: phoneHref },
  { icon: Mail, text: data.inquiryEmail, href: `mailto:${data.inquiryEmail}` },
  {
    icon: MapPin,
    text: "West 44, 44-60 Richardshaw Lane, Stanningley, Pudsey, England, LS28 7UR",
  },
];

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Terms and Conditions", href: "/terms" },
    ],
  },
  {
    title: "Packages",
    links: [
      { name: "Flights", href: "/flights" },
      { name: "Hotels", href: "/hotels" },
      { name: "Hajj/Umrah Packages", href: "/hajj-umrah" },
      { name: "Holiday Packages", href: "/holidayPackages" },
      { name: "Custom Packages", href: "/contact" },
    ],
  },
];

const Footer = () => {
  const pathname = usePathname();
  const footerImage =
    FOOTER_IMAGE_MAP.find((item) => pathname.startsWith(item.match))?.src ??
    DEFAULT_FOOTER_IMAGE;

  return (
    <footer className="flex flex-col gap-10 px-3 pb-3 pt-20 md:px-5">
      {/* Newsletter */}
      <ContentLayoutWrapper className="px-0 md:px-8">
        <div className="grid overflow-hidden rounded-frame border border-line bg-white shadow-soft md:grid-cols-[1fr_1.15fr]">
          <div className="relative min-h-56 md:min-h-full">
            <Image
              src={footerImage}
              alt=""
              fill
              sizes="(max-width: 768px) 100vw, 45vw"
              className="object-cover"
            />
          </div>
          <div className="flex flex-col justify-center gap-5 p-7 md:p-12">
            <Eyebrow>Newsletter</Eyebrow>
            <h2 className="font-display text-3xl font-bold uppercase leading-none tracking-tight text-ink md:text-4xl">
              Travel notes
              <br />
              <em className="font-serif font-normal normal-case tracking-normal text-gold-accent">
                worth keeping.
              </em>
            </h2>
            <p className="max-w-md text-ink/65">
              Get the latest travel news, Umrah dates and offers, sent only when
              there&apos;s something worth sharing.
            </p>
            <NewsletterForm />
          </div>
        </div>
      </ContentLayoutWrapper>

      {/* Main footer */}
      <div className="relative mx-auto w-full max-w-[1400px] overflow-hidden rounded-frame bg-ink text-white">
        <div className="mx-auto flex max-w-[1240px] flex-col gap-12 px-6 pt-14 md:px-10">
          <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.3fr_1fr_1fr_1.3fr]">
            {/* Brand */}
            <div className="flex flex-col gap-5">
              <Link href="/" aria-label="Travellia home" className="w-fit">
                <Image
                  src="/logo.png"
                  alt="Travellia"
                  width={200}
                  height={50}
                  className="h-11 w-auto"
                />
              </Link>
              <p className="max-w-xs text-white/60">
                Journeys worth remembering: flights, hotels, Umrah and holidays,
                planned around you.
              </p>
              <div className="flex gap-2">
                {SOCIALS.map((social) => (
                  <a
                    key={social.label}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="grid size-11 place-items-center rounded-full border border-white/15 bg-white/5 transition hover:border-gold hover:bg-white/10"
                  >
                    <Image src={social.icon} alt="" width={18} height={18} />
                  </a>
                ))}
              </div>
            </div>

            {/* Link columns */}
            {FOOTER_LINKS.map((section) => (
              <nav key={section.title} aria-label={section.title}>
                <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                  {section.title}
                </h3>
                <ul className="flex flex-col gap-3">
                  {section.links.map((link) => (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="text-white/75 transition-colors hover:text-white"
                      >
                        {link.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </nav>
            ))}

            {/* Contact */}
            <div>
              <h3 className="mb-4 text-xs font-semibold uppercase tracking-[0.2em] text-gold">
                Contact
              </h3>
              <ul className="flex flex-col gap-4">
                {CONTACT_INFO.map(({ icon: Icon, text, href }) => {
                  const content = (
                    <>
                      <span className="grid size-9 shrink-0 place-items-center rounded-full bg-white/10 text-gold">
                        <Icon className="size-4" />
                      </span>
                      <span className="pt-1.5 text-white/75">{text}</span>
                    </>
                  );
                  return (
                    <li key={text}>
                      {href ? (
                        <a href={href} className="flex items-start gap-3 hover:text-white">
                          {content}
                        </a>
                      ) : (
                        <div className="flex items-start gap-3">{content}</div>
                      )}
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>

          {/* Accreditation and payments */}
          <div className="flex flex-col items-center justify-between gap-6 border-t border-white/10 pt-8 md:flex-row">
            <div className="flex flex-wrap items-center justify-center gap-6 md:gap-8">
              {BRANDS.map((brand) => (
                <Image
                  key={brand.alt}
                  src={brand.src}
                  alt={brand.alt}
                  width={80}
                  height={48}
                  className="h-9 w-auto object-contain opacity-70 invert"
                />
              ))}
            </div>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {CARDS.map((card) => (
                <span
                  key={card.alt}
                  className="grid h-8 w-12 place-items-center rounded-md bg-white"
                >
                  <Image
                    src={card.src}
                    alt={card.alt}
                    width={36}
                    height={22}
                    className="h-5 w-auto object-contain"
                  />
                </span>
              ))}
            </div>
          </div>

          <p className="text-center text-sm text-white/45 md:text-left">
            Copyright &copy; {new Date().getFullYear()} Travellia Limited. All
            rights reserved.
          </p>
        </div>

        {/* Giant cropped wordmark */}
        <p
          aria-hidden="true"
          className="pointer-events-none mt-6 select-none whitespace-nowrap text-center font-display text-[20vw] font-extrabold uppercase leading-[0.72] tracking-tighter text-gold/90 xl:text-[14rem]"
        >
          Travellia
        </p>
      </div>
    </footer>
  );
};

export default Footer;

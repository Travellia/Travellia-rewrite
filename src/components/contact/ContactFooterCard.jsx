import { MapPin, Phone, Mail } from "lucide-react";
import React from "react";
import { phoneHref } from "@/components/common/PhoneNumberViewer";
import { data as contactInfo } from "@/lib/contactInfo";

const ICONS = [MapPin, Phone, Mail];
const HREFS = [null, phoneHref, `mailto:${contactInfo.email}`];

const ContactFooterCard = ({ data }) => {
  return (
    <section className="grid gap-4 md:grid-cols-3">
      {data.map((item, index) => {
        const Icon = ICONS[index] ?? Phone;
        const href = HREFS[index];
        const content = (
          <>
            <span className="grid size-12 shrink-0 place-items-center rounded-full bg-ink text-gold transition-transform duration-300 group-hover:rotate-12">
              <Icon className="size-5" strokeWidth={2} />
            </span>
            <span className="flex flex-col gap-1">
              <span className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-deep">
                {item[0]}
              </span>
              <span className="text-lg font-semibold leading-snug text-ink">
                {item[1]}
              </span>
              {(item[2] || item[3]) && (
                <span className="text-sm text-ink/60">
                  {[item[2], item[3]].filter(Boolean).join(" ")}
                </span>
              )}
            </span>
          </>
        );
        const className =
          "group flex h-full items-start gap-4 rounded-card border border-line bg-white p-6 shadow-soft transition-all duration-300 hover:shadow-lift";

        return href ? (
          <a key={item[0]} href={href} className={className}>
            {content}
          </a>
        ) : (
          <div key={item[0]} className={className}>
            {content}
          </div>
        );
      })}
    </section>
  );
};

export default ContactFooterCard;

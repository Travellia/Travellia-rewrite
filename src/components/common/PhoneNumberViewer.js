import { Phone } from "lucide-react";
import { data } from "@/lib/contactInfo";
import { cn } from "@/lib/utils";

// "0203 504 0786" → "+442035040786" for tel: links.
export const phoneHref = `tel:+44${data.PhoneNumber.replace(/\s+/g, "").replace(/^0/, "")}`;

export default function PhoneNumberViewer({ className }) {
  return (
    <a
      href={phoneHref}
      className={cn(
        "group hidden items-center gap-2 rounded-full border border-line bg-white py-1 pl-1 pr-4 text-sm font-semibold text-ink shadow-soft transition-colors hover:bg-sand lg:flex",
        className
      )}
    >
      <span className="grid size-9 place-items-center rounded-full bg-ink text-gold transition-transform group-hover:rotate-12">
        <Phone className="size-4" />
      </span>
      {data.PhoneNumber}
    </a>
  );
}

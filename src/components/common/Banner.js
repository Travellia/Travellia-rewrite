import { data } from "@/lib/contactInfo";
import Image from "next/image";
import { MdEmail } from "react-icons/md";
import { phoneHref } from "@/components/common/PhoneNumberViewer";

const SOCIALS = [
  { icon: "/social-media/facebook.png", href: data.socials.facebook, label: "Facebook" },
  { icon: "/social-media/instagram.png", href: data.socials.instagram, label: "Instagram" },
  { icon: "/social-media/tik-tok.png", href: data.socials.tiktok, label: "TikTok" },
];

export default function Banner() {
  return (
    <div className="w-full bg-ink text-white">
      <div className="mx-auto flex max-w-[1400px] items-center justify-between gap-4 px-5 py-2 text-xs md:px-8">
        <div className="flex items-center gap-4 md:gap-6">
          <a href={phoneHref} className="flex items-center gap-2 hover:text-gold">
            <span className="relative size-5 shrink-0">
              <Image
                src="/common/phone-white-logo.png"
                alt=""
                fill
                sizes="20px"
                className="object-contain"
              />
            </span>
            <span className="font-medium">{data?.PhoneNumber}</span>
          </a>
          <a
            href={`mailto:${data?.email}`}
            className="hidden items-center gap-2 hover:text-gold sm:flex"
          >
            <span className="flex size-5 shrink-0 items-center justify-center rounded-full bg-primary">
              <MdEmail className="size-3 text-ink" aria-hidden="true" />
            </span>
            <span className="font-medium">{data?.email}</span>
          </a>
        </div>

        <p className="hidden text-white/60 lg:block">
          Flights · Hotels · Umrah &amp; Hajj · Holidays
        </p>

        <div className="flex items-center gap-4">
          <span className="flex items-center gap-1.5">
            <Image
              src="/banner/united-kingdom.png"
              alt=""
              width={16}
              height={16}
              className="rounded-full"
            />
            <span className="font-medium">EN</span>
          </span>
          <span aria-hidden="true" className="h-3 w-px bg-white/25" />
          <div className="flex items-center gap-2.5">
            {SOCIALS.map((social) => (
              <a
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                key={social.label}
                aria-label={social.label}
                className="relative size-4 opacity-90 transition-opacity hover:opacity-100"
              >
                <Image
                  src={social.icon}
                  alt=""
                  fill
                  sizes="16px"
                  className="object-contain"
                />
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

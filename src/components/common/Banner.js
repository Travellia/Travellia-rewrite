import { data } from "@/lib/contactInfo";
import Image from "next/image";
import { MdEmail } from "react-icons/md";

const SOCIALS = [
  { icon: "/social-media/facebook.png", href: data.socials.facebook },
  { icon: "/social-media/instagram.png", href: data.socials.instagram },
  { icon: "/social-media/tik-tok.png", href: data.socials.tiktok },
];

export default function Banner() {
  return (
    <div className="w-full bg-foreground flex items-center justify-between px-4 py-2">
      <div className="flex flex-col md:flex-row gap-1 md:gap-6">
        <div className="flex items-center gap-2">
          <div className="relative w-6 h-6 flex-shrink-0">
            <Image
              src="/common/phone-white-logo.png"
              alt="phone"
              fill
              sizes="24px"
              className="object-contain"
              loading="lazy"
            />
          </div>
          <p className="text-white font-medium text-xs md:text-base">
            {data?.PhoneNumber}
          </p>
        </div>
        <a href={`mailto:${data?.email}`} className="flex items-center gap-2">
          <span className="w-6 h-6 flex-shrink-0 rounded-full bg-primary flex items-center justify-center">
            <MdEmail className="w-3.5 h-3.5 text-foreground" aria-hidden="true" />
          </span>
          <span className="text-white font-medium text-xs md:text-base">
            {data?.email}
          </span>
        </a>
      </div>
      <div className="flex gap-6">
        <div className="flex items-center gap-2">
          <Image
            src="/banner/united-kingdom.png"
            alt="phone icon"
            width={20}
            height={20}
            loading="lazy"
            className="rounded-full"
          />
          <p className="text-white text-xs font-medium">Eng</p>
        </div>
        <p className="text-white">|</p>
        <div className="flex items-center gap-2">
          {SOCIALS.map((social, index) => (
            <a
              href={social.href}
              target="_blank"
              rel="noopener noreferrer"
              key={index}
              className="relative w-5 h-5"
            >
              <Image
                src={social.icon}
                alt="social"
                fill
                sizes="20px"
                className="object-contain"
                loading="lazy"
              />
            </a>
          ))}
        </div>
      </div>
    </div>
  );
}

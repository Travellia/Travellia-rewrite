import React from "react";
import ContentLayoutWrapper from "./ContentLayoutWrapper";
import Image from "next/image";
import { Button } from "../ui/button";
import { data } from "@/lib/data/homepage-data";
import { FiPhone, FiMail, FiMapPin } from 'react-icons/fi';

const BRANDS = [
  "/footer/iata.png",
  "/footer/atol.png",
  "/footer/arab.png",
  "/footer/abta.png",
];

const SOCIALS = [
  "/footer/facebook.png",
  "/footer/instagram.png",
  "/footer/twitter.png",
  "/footer/linkedin.png",
];

const CARDS = [
  "/footer/visa.png",
  "/footer/mastercard.png",
  "/footer/american-express.png",
  "/footer/stripecard.png",
  "/footer/paypal.png",
];

const CONTACT_INFO = [
  {
    icon: FiPhone,
    text: data.PhoneNumber,
  },
  {
    icon: FiMail,
    text: data.inquiryEmail,
  },
  {
    icon: FiMapPin,
    text: "West 44, 44-60 Richardshaw Lane, Stanningley, Pudsey, England, LS28 7UR",
  },
];

const FOOTER_LINKS = [
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "Contact Us", href: "/contact" },
      { name: "Services", href: "/services" },
      { name: "Testimonial", href: "/testimonial" },
      { name: "Terms and Conditions", href: "/terms" },
    ],
  },
  {
    title: "Destinations",
    links: [
      { name: "Maldives", href: "/destinations/maldives" },
      { name: "Los Angeles", href: "/destinations/los-angeles" },
      { name: "Las Vegas", href: "/destinations/las-vegas" },
    ],
  },
  {
    title: "Packages",
    links: [
      { name: "Hajj/Umrah Packages", href: "/packages/hajj-umrah" },
      { name: "Holiday Packages", href: "/packages/holiday" },
      { name: "Custom Packages", href: "/packages/custom" },
    ],
  },
];

const Footer = () => {
  return (
    <footer className="pt-10">
      <ContentLayoutWrapper
        className={"flex flex-col items-center justify-between gap-16"}
      >
        {/* Brand Logos */}
        <div className="flex items-center justify-between w-full">
          {BRANDS.map((brand, index) => {
            return (
              <React.Fragment key={index}>
                <div className="w-44 h-44 relative">
                  <Image src={brand} alt="brand" fill />
                </div>
                {index < BRANDS.length - 1 && (
                  <div className="bg-gray-800 self-stretch w-0.5" />
                )}
              </React.Fragment>
            );
          })}
        </div>

        <div className="h-px w-full bg-gray-300" />

        {/* Travellia Logo */}
        <div className="relative w-[96%] mx-auto py-20">
          <Image src="/logo.png" alt="Travellia Logo" fill />
        </div>

        {/* Footer Links and Contact Info */}
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-10">
            {/* Contact Information */}
            <div>
              <h3 className="text-primary font-bold text-3xl mb-4">
                Contact Info
              </h3>
              <div className="space-y-4">
                {CONTACT_INFO.map((item, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="mt-1 flex-shrink-0 bg-primary p-1 rounded-full">
                      <item.icon className="w-4 h-4" color="#fff" />
                    </div>
                    <div className="text-gray-700 text-sm md:text-lg">
                      {item.text}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Dynamic Link Sections */}
            {FOOTER_LINKS.map((section, index) => (
              <div key={index}>
                <h3 className="text-primary font-bold text-3xl mb-4">
                  {section.title}
                </h3>
                <ul className="space-y-2 md:space-y-3">
                  {section.links.map((link, linkIndex) => (
                    <li key={linkIndex}>
                      <a
                        href={link.href}
                        className="text-gray-600 hover:text-primary transition-colors text-sm md:text-lg"
                      >
                        {link.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>

        {/* Subscribe Section */}
        <div className="w-8/10 flex flex-col items-center gap-4">
          <h1 className="text-primary text-center font-bold text-3xl">
            Subscribe
          </h1>
          <p className="text-2xl text-gray-500 text-center">
            Subscribe to get the lastest blog news from us.
          </p>
          <div className="bg-secondary rounded-full h-20 w-full flex items-center">
            <input
              type="text"
              placeholder="Email"
              className="h-full w-7/10 px-8 bg-transparent outline-none placeholder:text-lg placeholder:text-gray-600"
            />
            <Button className="rounded-full h-full w-3/10 text-2xl">
              Submit
            </Button>
          </div>
        </div>

        {/* Footer Bottom Section */}
        <div className="flex flex-col items-center gap-4 w-full">
          <div className="flex flex-col md:flex-row items-center justify-between w-full">
            <div className="flex items-center justify-between gap-5">
              {SOCIALS.map((social, index) => (
                <Image
                  src={social}
                  alt="social"
                  width={40}
                  height={40}
                  key={index}
                />
              ))}
            </div>
            <div className="flex items-center justify-between gap-5">
              {CARDS.map((card, index) => (
                <Image
                  src={card}
                  alt="card"
                  width={50}
                  height={50}
                  key={index}
                />
              ))}
            </div>
          </div>
          <div className="h-px bg-gray-300 w-full" />
          <p className="text-gray-500 self-end text-right">
            Copyright &copy; 2025. All rights reserved.
          </p>
        </div>
      </ContentLayoutWrapper>
      <div className="w-full h-[30vh] lg:h-[75vh] relative">
        <Image src="/footer/Foot4.png" alt="Footer plane" fill />
      </div>
    </footer>
  );
};

export default Footer;

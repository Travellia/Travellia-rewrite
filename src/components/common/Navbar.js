"use client";

import { useState } from 'react';
import Link from 'next/link';
import Image from "next/image";
import PhoneNumberViewer from '@/components/common/PhoneNumberViewer';
import { IoIosMenu, IoIosClose } from "react-icons/io";

const navLinks = [
  { name: 'Home', path: '/', icon: '/navbar-icons/home.png' },
  { name: 'Flights', path: '/flights', icon: '/navbar-icons/plane.png' },
  { name: 'Hotels', path: '/hotels', icon: '/navbar-icons/five-stars.png' },
  { name: 'Vacations', path: '/vacations', icon: '/navbar-icons/beach-umbrella.png' },
  { name: 'Contact', path: '/contact', icon: '/navbar-icons/customer-service.png' },
]

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <nav className='relative flex items-center justify-between pl-8 py-8 bg-gray-100 dark:bg-gray-800'>
      <Link href="/">
        <Image src="/logo.png" alt="Travellia Logo" width={200} height={50} />
      </Link>

      {/* Desktop Menu */}
      <ul className='hidden md:flex items-center gap-4 lg:gap-16'>
        {navLinks.map((link) => (
          <li key={link.name} className='flex flex-col items-center gap-1'>
            <Image src={link.icon} alt={`${link.name} icon`} className='w-[30px] h-[30px]' width={30} height={30} />
            <Link href={link.path} className='text-sm lg:text-lg font-medium text-black dark:text-white hover:underline hover:text-primary'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>

      <div className="flex items-center gap-4">
        <PhoneNumberViewer />

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-3xl text-black dark:text-white pr-8"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          {isMenuOpen ? <IoIosClose /> : <IoIosMenu />}
        </button>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMenuOpen && (
        <div className="absolute top-full left-0 w-full bg-gray-100 dark:bg-gray-800 z-50 flex flex-col items-center py-6 shadow-lg md:hidden border-t border-gray-200 dark:border-gray-700">
          <ul className='flex flex-col gap-6 w-full px-8'>
            {navLinks.map((link) => (
              <li key={link.name} className='flex items-center gap-4 w-full border-b border-gray-200 dark:border-gray-700 pb-2 last:border-0'>
                <Image src={link.icon} alt={`${link.name} icon`} className='w-[24px] h-[24px]' width={24} height={24} />
                <Link
                  href={link.path}
                  className='text-lg font-medium text-black dark:text-white hover:text-primary w-full'
                  onClick={() => setIsMenuOpen(false)}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      )}
    </nav>
  );
}
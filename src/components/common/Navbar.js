import Link from 'next/link';
import Image from "next/image";
import PhoneNumberViewer from '@/components/common/PhoneNumberViewer';

const navLinks = [
  { name: 'Home', path: '/', icon: '/navbar-icons/home.png' },
  { name: 'Flights', path: '/flights',icon: '/navbar-icons/plane.png' },
  { name: 'Hotels', path: '/hotels', icon: '/navbar-icons/five-stars.png' },
  { name: 'Vacations', path: '/vacations',  icon: '/navbar-icons/beach-umbrella.png' },
  { name: 'Contact', path: '/contact', icon: '/navbar-icons/customer-service.png' },
]

export default function Navbar() {
  return (
    <nav className='flex items-center justify-between pl-8 py-8 bg-gray-100 dark:bg-gray-800'>
        <Link href="/">
        <Image src="/logo.png" alt="Travellia Logo" width={200} height={50} />
        </Link>
      <ul className='flex sm:gap-4 lg:gap-16'>
        {navLinks.map((link) => (
          <li key={link.name} className='flex flex-col items-center gap-1'>
            <Image src={link.icon} alt={`${link.name} icon`} className='sm:w-[20px] md:w-[30px] sm:h-[20px] md:h-[30px]' width={20} height={20}/>
            <Link href={link.path} className='sm:text-xs md:text-sm lg:text-lg font-medium text-black dark:text-white hover:underline hover:text-primary'>
              {link.name}
            </Link>
          </li>
        ))}
      </ul>
      <PhoneNumberViewer/>
    </nav>
  );
}
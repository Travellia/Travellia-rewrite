import { data } from '@/lib/data/homepage-data'
import { IoIosCall } from "react-icons/io";
import { MdOutlineMailOutline } from "react-icons/md";
import { FaLinkedinIn } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa6";
import Image from 'next/image';


export default function Banner() {
  return (
    <div className="w-full bg-foreground flex items-center justify-between px-4 py-2">
      <div className='flex flex-col md:flex-row gap-1 md:gap-6'>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-primary rounded-full p-1">
            <IoIosCall className="text-white h-4 w-4" />
          </div>
          <p className='text-white font-medium text-xs md:text-base'>{data?.PhoneNumber}</p>
        </div>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-primary rounded-full p-1">
            <MdOutlineMailOutline className="text-white h-4 w-4" />
          </div>
          <p className='text-white font-medium text-xs md:text-base'>{data?.email}</p>
        </div>
      </div>
      <div className='flex gap-6'>
        <div className="flex items-center gap-2">
          <Image src="/banner/united-kingdom.png" alt="phone icon" width={20} height={20} className="rounded-full" />
          <p className='text-white text-xs font-medium'>Eng</p>
        </div>
        <p className='text-white'>|</p>
        <div className="flex items-center gap-2">
          <div className="flex items-center justify-center bg-primary rounded-full p-1">
            <FaInstagram className="text-white h-4 w-4" />
          </div>
          <div className="flex items-center justify-center bg-primary rounded-full p-1">
            <FaLinkedinIn className="text-white h-4 w-4" />
          </div>
        </div>
      </div>
    </div>
  );
}
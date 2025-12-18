import { data } from '@/lib/data/homepage-data'
import { FaWhatsapp } from "react-icons/fa";

export default function PhoneNumberViewer() {
    return (
        <div className='pl-2 pr-6 py-2 bg-primary rounded-l-full hidden md:block'>
            <a
                href={`https://wa.me/${data?.PhoneNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className='flex items-center justify-start gap-2 text-white text-2xl font-bold'
            >
                <div className='bg-green-600 p-2 rounded-full'>
                    <FaWhatsapp className='text-white h-6 w-6' />
                </div>
                {data?.PhoneNumber || 'No phone number available'}
            </a>
        </div>
    )
}
import Image from 'next/image'
import {
  SearchIcon,
  PlusCircleIcon,
  UserGroupIcon,
  PaperAirplaneIcon,
  MenuIcon,
} from '@heroicons/react/outline'

import { HomeIcon } from "@heroicons/react/solid";


function Header() {
  return (
    <div className="shadow-sm border-b bg-white sticky top-0 z-50">
      <div className='flex justify-between max-w-6xl mx-5 lg:mx-auto'>
        {/* Left */}
        <div className='relative hidden lg:inline-grid w-24 cursor-pointer'>
          <Image
            src='https://links.wheelit.com.au/s70'
            layout='fill'
            objectFit='contain'
          />
        </div>

        <div className='relative w-10 lg:hidden flex-shrink-0 cursor-pointer'>
          <Image
            src='https://links.wheelit.com.au/1rs'
            layout='fill'
            objectFit='contain'
          />
        </div>
        {/* Middle Search Input Field */}
        <div className="max-w-xs">
          <div className='relative mt-1 p-3 rounded-md'>
            <div className='absolute inset-y-0 pl-4 flex items-center pointer-events-none'>
              <SearchIcon className='h-5 w-5 text-gray-500' />
            </div>
            <input
              className='bg-gray-50 block w-full sm:text-sm pl-10 rounded-md border-gray-300 focus:border-black focus:ring-black'
              type="text"
              placeholder="search"
            />
          </div>
        </div>
        {/* Right */}
        <div className="flex items-center justify-end space-x-4">
          <HomeIcon className="navBtn" />
          <MenuIcon className="h-6 md:hidden cursor-pointer" />
          <div className="relative navBtn" >
            <PaperAirplaneIcon className="navBtn" />
            <div className="absolute -top-2 -right-1 text-xs w-5 h-5 bg-red-500 rounded-full flex items-center justify-center animate-pulse text-white">3</div>
          </div>
          <PlusCircleIcon className="navBtn" />
          <UserGroupIcon className="navBtn" />
          <img
            className="h-10 rounded-full cursor-pointer"
            src="https://links.wheelit.com.au/bzx"
            alt="profile pic"
          />
        </div>
      </div>
    </div>
  )
}

export default Header



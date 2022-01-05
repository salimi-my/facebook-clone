import Image from 'next/image';
import {
  BellIcon,
  ChatIcon,
  HomeIcon,
  UserGroupIcon,
  ViewGridIcon
} from '@heroicons/react/solid';
import {
  FlagIcon,
  PlayIcon,
  SearchIcon,
  ShoppingCartIcon,
  PlusSmIcon
} from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession, signOut } from 'next-auth/react';
import Dropdown from '../Dropdown';

function Header() {
  const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center p-0 lg:px-4 shadow-md'>
      <div className='flex items-center p-2 md:p-0 md:pl-2 w-1/2 md:w-1/4'>
        <Image src='/facebook-logo.png' width={40} height={40} layout='fixed' />
        <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
          <SearchIcon className='h-5 text-gray-600' />
          <input
            className='hidden xl:inline-flex ml-2 items-center bg-transparent outline-none flex-shrink'
            type='text'
            placeholder='Search Facebook'
          />
        </div>
      </div>

      <div className='hidden md:flex justify-center w-2/4'>
        <HeaderIcon active Icon={HomeIcon} />
        <HeaderIcon Icon={FlagIcon} />
        <HeaderIcon Icon={PlayIcon} />
        <HeaderIcon Icon={ShoppingCartIcon} />
        <HeaderIcon Icon={UserGroupIcon} />
      </div>

      <div className='flex items-center space-x-2 justify-end w-1/2 md:w-1/4'>
        <div className='hidden xl:flex items-center py-1 px-1 space-x-2 rounded-full hover:bg-gray-100 cursor-pointer'>
          <Image
            className='rounded-full cursor-pointer'
            src={session.user.image}
            width='28'
            height='28'
            layout='fixed'
          />
          <p className='whitespace-nowrap font-semibold pr-2'>
            {session.user.firstName}
          </p>
        </div>
        <PlusSmIcon className='icon xl:hidden' />
        <ViewGridIcon className='hidden xl:inline-flex icon' />
        <ChatIcon className='icon' />
        <BellIcon className='icon' />
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;

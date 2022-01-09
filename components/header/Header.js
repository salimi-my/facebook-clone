import Image from 'next/image';
import { SearchIcon } from '@heroicons/react/outline';
import HeaderIcon from './HeaderIcon';
import { useSession } from 'next-auth/react';
import Dropdown from './Dropdown';

function Header() {
  const { data: session } = useSession();
  return (
    <div className='sticky top-0 z-30 bg-white flex items-center p-0 lg:px-4 shadow-md'>
      <div className='flex items-center p-2 md:p-0 md:pl-2 w-1/2 md:w-1/4'>
        <Image
          src='/facebook-logo.png'
          width={40}
          height={40}
          layout='fixed'
          alt=''
        />
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
        <div className='flex space-x-6 md:space-x-2'>
          <HeaderIcon
            active
            path={
              <path d='m25.825 12.29-.004-.004-10.794-9.349a1.514 1.514 0 0 0-1.038-.416 1.473 1.473 0 0 0-.988.391L2.175 12.29a1.24 1.24 0 0 0-.307 1.469c.211.456.699.72 1.201.72H5v9.25c0 .966.784 1.75 1.75 1.75H11a1 1 0 0 0 1-1v-6.17a.33.33 0 0 1 .33-.33h3.34a.33.33 0 0 1 .33.33v6.17a1 1 0 0 0 1 1h4.25a1.75 1.75 0 0 0 1.75-1.75v-9.25h1.931c.502 0 .99-.264 1.201-.72a1.24 1.24 0 0 0-.307-1.469' />
            }
          />
          <HeaderIcon
            path={
              <path d='M8.75 25.25a.75.75 0 0 1 0-1.5h10.5a.75.75 0 0 1 0 1.5H8.75Zm8.413-12.404-5.108 3.077A.696.696 0 0 1 11 15.327V9.172a.696.696 0 0 1 1.055-.596l5.108 3.078a.696.696 0 0 1 0 1.192Zm4.587 7.404A2.25 2.25 0 0 0 24 18V6.5a2.25 2.25 0 0 0-2.25-2.25H6.25A2.25 2.25 0 0 0 4 6.5V18a2.25 2.25 0 0 0 2.25 2.25h15.5Zm0 1.5H6.25A3.75 3.75 0 0 1 2.5 18V6.5a3.75 3.75 0 0 1 3.75-3.75h15.5A3.75 3.75 0 0 1 25.5 6.5V18a3.75 3.75 0 0 1-3.75 3.75Z' />
            }
          />
          <HeaderIcon
            path={
              <path d='M17.5 23.75h4.25a.75.75 0 0 0 .75-.75v-9h.031a2.4 2.4 0 0 1-.47-.306l-.401-.335a.252.252 0 0 0-.32.001l-.164.137a3.257 3.257 0 0 1-2.081.753h-.226a3.248 3.248 0 0 1-2.069-.744l-.184-.152a.25.25 0 0 0-.318 0l-.185.153a3.257 3.257 0 0 1-2.069.743h-.137a3.248 3.248 0 0 1-2.046-.725l-.216-.175a.25.25 0 0 0-.317.002l-.173.145a3.252 3.252 0 0 1-2.081.753h-.178a3.25 3.25 0 0 1-2.064-.739l-.194-.16a.25.25 0 0 0-.318 0l-.471.388a2.248 2.248 0 0 1-.397.261H5.5v9c0 .414.336.75.75.75h4.25V17.5c0-.69.56-1.25 1.25-1.25h4.5c.69 0 1.25.56 1.25 1.25v6.25Zm-13.827-15h20.654a4.176 4.176 0 0 0-.089-.267l-1.151-3.128a1.749 1.749 0 0 0-1.626-1.105H6.54c-.718 0-1.363.438-1.621 1.088L3.762 8.483a4.176 4.176 0 0 0-.089.267Zm20.827 1.5h-21V12c0 .414.336.75.75.75h.171a.75.75 0 0 0 .476-.17l.471-.387a1.749 1.749 0 0 1 2.222 0l.194.159c.313.257.706.398 1.112.398h.178c.409 0 .806-.143 1.12-.405l.174-.145a1.749 1.749 0 0 1 2.221-.015l.216.174a1.75 1.75 0 0 0 1.102.391h.137c.406 0 .8-.142 1.114-.4l.185-.153a1.75 1.75 0 0 1 2.228 0l.184.153c.313.258.707.4 1.114.4h.226c.409 0 .806-.144 1.121-.406l.164-.136a1.747 1.747 0 0 1 2.24-.001l.402.335a.9.9 0 0 0 1.478-.692v-1.6Zm-.5 3.967V23a2.25 2.25 0 0 1-2.25 2.25H6.25A2.25 2.25 0 0 1 4 23v-8.764A2.25 2.25 0 0 1 2 12V9.951c0-.679.12-1.351.354-1.987l1.164-3.162A3.25 3.25 0 0 1 6.54 2.75h14.921c1.332 0 2.529.813 3.027 2.069l1.158 3.145C25.88 8.6 26 9.272 26 9.951v1.899a2.402 2.402 0 0 1-2 2.367Zm-8 9.533v-6h-4v6h4Z' />
            }
          />
          <HeaderIcon
            path={
              <path d='M25.5 14c0-6.351-5.149-11.5-11.5-11.5S2.5 7.649 2.5 14 7.649 25.5 14 25.5 25.5 20.351 25.5 14Zm1.5 0c0 7.18-5.82 13-13 13S1 21.18 1 14 6.82 1 14 1s13 5.82 13 13ZM7.479 14h.152c.302 0 .471.338.303.591a5.63 5.63 0 0 0-.951 3.133v.497c0 .121.007.24.021.357a.373.373 0 0 1-.367.422h-.514c-.895 0-1.623-.75-1.623-1.673C4.5 15.492 5.727 14 7.479 14Zm13.042 0c1.753 0 2.979 1.492 2.979 3.327 0 .923-.728 1.673-1.622 1.673h-.514a.372.372 0 0 1-.367-.422 3.23 3.23 0 0 0 .02-.357v-.497a5.63 5.63 0 0 0-.95-3.133c-.168-.253 0-.591.302-.591h.152ZM8.25 13c-1.103 0-2-1.009-2-2.25 0-1.366.785-2.25 2-2.25 1.215 0 2 .884 2 2.25 0 1.241-.897 2.25-2 2.25Zm11.5 0c-1.103 0-2-1.009-2-2.25 0-1.366.785-2.25 2-2.25 1.215 0 2 .884 2 2.25 0 1.241-.897 2.25-2 2.25Zm-4.578.5c2.386 0 4.328 1.895 4.328 4.224v.497c0 .981-.817 1.779-1.823 1.779h-7.354C9.317 20 8.5 19.202 8.5 18.221v-.497c0-2.329 1.941-4.224 4.328-4.224h2.344ZM16.75 9c0 1.655-1.233 3-2.75 3-1.516 0-2.75-1.345-2.75-3 0-1.85 1.054-3 2.75-3 1.697 0 2.75 1.15 2.75 3Z' />
            }
          />
        </div>
      </div>

      <div className='flex items-center space-x-2 justify-end w-1/2 md:w-1/4'>
        <div className='hidden xl:flex items-center py-1 px-1 space-x-2 rounded-full hover:bg-gray-100 cursor-pointer'>
          <Image
            className='rounded-full cursor-pointer'
            src={session.user.image}
            width='28'
            height='28'
            layout='fixed'
            alt=''
          />
          <p className='whitespace-nowrap font-semibold pr-2'>
            {session.user.first_name}
          </p>
        </div>
        <div className='flex justify-center items-center p-[0.6rem] h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300 xl:hidden'>
          <Image src='/plus.svg' width={20} height={20} alt='' />
        </div>
        <div className='hidden xl:flex justify-center items-center p-[0.6rem] h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300'>
          <Image src='/grids.svg' width={20} height={20} alt='' />
        </div>
        <div className='flex justify-center items-center p-[0.6rem] h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300'>
          <Image
            className='icon-svg'
            src='/messenger.svg'
            width={20}
            height={20}
            alt=''
          />
        </div>
        <div className='flex justify-center items-center p-[0.6rem] h-10 w-10 bg-gray-200 rounded-full text-gray-700 cursor-pointer hover:bg-gray-300'>
          <Image
            className='icon-svg'
            src='/notification.svg'
            width={20}
            height={20}
            alt=''
          />
        </div>
        <Dropdown />
      </div>
    </div>
  );
}

export default Header;

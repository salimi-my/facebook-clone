import { Fragment } from 'react';
import { Menu, Transition } from '@headlessui/react';
import {
  ChatAltIcon,
  CogIcon,
  MoonIcon,
  QuestionMarkCircleIcon
} from '@heroicons/react/solid';
import { useSession, signOut } from 'next-auth/react';
import Image from 'next/image';
import { ChevronRightIcon, LogoutIcon } from '@heroicons/react/outline';

function classNames(...classes) {
  return classes.filter(Boolean).join(' ');
}

export default function Dropdown() {
  const { data: session } = useSession();
  return (
    <Menu as='div' className='relative inline-block text-left'>
      <div>
        <Menu.Button className='inline-flex justify-center w-full rounded-full p-[0.6rem] bg-gray-200 text-sm font-medium text-gray-700 hover:bg-gray-300'>
          <Image
            className='h-5 filter'
            src='/down.svg'
            width={20}
            height={20}
            alt=''
          />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter='transition ease-out duration-100'
        enterFrom='transform opacity-0 scale-95'
        enterTo='transform opacity-100 scale-100'
        leave='transition ease-in duration-75'
        leaveFrom='transform opacity-100 scale-100'
        leaveTo='transform opacity-0 scale-95'
      >
        <Menu.Items className='origin-top-right absolute right-0 mt-2 w-96 rounded-lg shadow-xl bg-white ring-1 ring-black ring-opacity-5 divide-y divide-gray-100 focus:outline-none'>
          <div className='p-2'>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                >
                  <Image
                    className='rounded-full cursor-pointer'
                    src={session.user.image}
                    width='60'
                    height='60'
                    layout='fixed'
                    alt=''
                  />
                  <div className='pl-4 flex-col'>
                    <h2 className='text-lg font-semibold leading-6'>
                      {session.user.name}
                    </h2>
                    <p className='text-gray-500 text-md mt-0'>
                      See your profile
                    </p>
                  </div>
                </a>
              )}
            </Menu.Item>
            <hr className='border-t border-gray-300 m-3' />
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                >
                  <div className='flex items-center'>
                    <ChatAltIcon className='inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-900' />
                    <div className='pl-4 flex-col'>
                      <h2 className='text-base font-semibold leading-6'>
                        Give feedback
                      </h2>
                      <p className='text-gray-500 text-md mt-0'>
                        Help us improve the new Facebook.
                      </p>
                    </div>
                  </div>
                </a>
              )}
            </Menu.Item>
            <hr className='border-t border-gray-300 m-3' />
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                >
                  <div className='flex items-center'>
                    <CogIcon className='inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-900' />
                    <div className='pl-4 flex'>
                      <h2 className='text-base font-semibold leading-6'>
                        Settings & privacy
                      </h2>
                    </div>
                    <ChevronRightIcon className='absolute right-5 h-7 text-gray-400' />
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                >
                  <div className='flex items-center'>
                    <QuestionMarkCircleIcon className='inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-900' />
                    <div className='pl-4 flex'>
                      <h2 className='text-base font-semibold leading-6'>
                        Help & Support
                      </h2>
                    </div>
                    <ChevronRightIcon className='absolute right-5 h-7 text-gray-400' />
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='#'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                >
                  <div className='flex items-center'>
                    <MoonIcon className='inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-900' />
                    <div className='pl-4 flex'>
                      <h2 className='text-base font-semibold leading-6'>
                        Display & Accessibility
                      </h2>
                    </div>
                    <ChevronRightIcon className='absolute right-5 h-7 text-gray-400' />
                  </div>
                </a>
              )}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => (
                <a
                  href='/logout'
                  className={classNames(
                    active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                    'px-4 py-2 text-sm rounded-lg flex items-center'
                  )}
                  onClick={(e) => {
                    e.preventDefault();
                    signOut({
                      callbackUrl: '/login'
                    });
                  }}
                >
                  <div className='flex items-center'>
                    <LogoutIcon className='inline-flex p-2 h-10 w-10 bg-gray-200 rounded-full text-gray-900' />
                    <div className='pl-4 flex'>
                      <h2 className='text-base font-semibold leading-6'>
                        Log Out
                      </h2>
                    </div>
                  </div>
                </a>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

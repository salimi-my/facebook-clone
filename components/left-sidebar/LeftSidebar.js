import { ChevronDownIcon } from '@heroicons/react/solid';
import { useSession } from 'next-auth/react';
import Shortcut from './Shortcut';
import SidebarRow from './SidebarRow';

const shortcuts = [
  { src: 'https://links.salimi.my/reactgroup', name: 'React Developer' },
  { src: 'https://links.salimi.my/nextgroup', name: 'Nextjs Developer' },
  { src: 'https://links.salimi.my/jsgroup', name: 'JavaScript Programmer' },
  { src: 'https://links.salimi.my/tailwindgroup', name: 'Tailwind CSS' },
  { src: 'https://links.salimi.my/webdevgroup', name: 'Web Developer' }
];

function LeftSidebar() {
  const { data: session } = useSession();
  return (
    <div className='hidden xl:inline p-2 mt-5 max-w-[600px] xl:min-w-[300px] fixed top-11 left-0'>
      <SidebarRow src={session.user.image} title={session.user.name} />
      <SidebarRow src={'/friends.png'} title='Friends' />
      <SidebarRow src={'/jobs.png'} title='Jobs' />
      <SidebarRow src={'/groups.png'} title='Groups' />
      <SidebarRow src={'/marketplace.png'} title='Marketplace' />
      <SidebarRow src={'/watch.png'} title='Watch' />
      <SidebarRow Icon={ChevronDownIcon} title='See more' />
      <hr className='border-t border-gray-300 my-3 ml-3' />
      <div className='flex justify-between items-center text-gray-500 mb-5 ml-3'>
        <h2 className='text-lg font-semibold'>Your Shortcuts</h2>
      </div>
      {shortcuts.map((shortcut) => (
        <Shortcut key={shortcut.src} src={shortcut.src} name={shortcut.name} />
      ))}
      <SidebarRow Icon={ChevronDownIcon} title='See more' />
    </div>
  );
}

export default LeftSidebar;

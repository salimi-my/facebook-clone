import { SearchIcon } from '@heroicons/react/outline';
import { DotsHorizontalIcon, VideoCameraIcon } from '@heroicons/react/solid';
import Contact from './Contact';

const contacts = [
  { src: 'https://links.papareact.com/f0p', name: 'Jeff Bezos' },
  { src: 'https://links.papareact.com/kxk', name: 'Elon Musk' },
  { src: 'https://links.papareact.com/zvy', name: 'Bill Gates' },
  { src: 'https://links.papareact.com/snf', name: 'Mark Zuckerberg' },
  { src: 'https://links.papareact.com/d0c', name: 'Harry Potter' },
  { src: 'https://links.papareact.com/6gg', name: 'The Queen' },
  { src: 'https://links.papareact.com/r57', name: 'James Bond' }
];

function RightSidebar() {
  return (
    <div className='hidden lg:flex flex-col lg:w-72 xl:w-96 p-2 mt-5 fixed top-12 right-0 pr-5'>
      <hr className='border-t border-gray-300 pb-3' />
      <div className='flex justify-between items-center text-gray-500 mb-5'>
        <h2 className='text-lg font-semibold'>Contacts</h2>
        <div className='flex space-x-5'>
          <VideoCameraIcon className='h-5' />
          <SearchIcon className='h-5' />
          <DotsHorizontalIcon className='h-5' />
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default RightSidebar;

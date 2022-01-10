import Image from 'next/image';
import { PlusIcon } from '@heroicons/react/solid';

function StoryCard({ user, name, story, profile }) {
  let otherStory = (
    <div className='relative h-36 w-28 rounded-md md:h-56 md:w-36 cursor-pointer overflow-x p-3 tranform ease-in shadow-md md:rounded-xl'>
      <p className='absolute z-20 text-white bottom-1 inset-x-1 text-left text-xs font-medium md:bottom-2 md:inset-x-3 md:text-left md:text-sm md:font-semibold'>
        {name}
      </p>
      <img
        className='absolute ring-2 ring-blue-500 rounded-full z-20 left-2 top-2 h-6 w-6 md:ring-4 md:left-4 md:top-4 md:h-8 md:w-8 object-cover'
        src={profile}
        alt=''
      />
      <Image
        className='object-cover filter brightness-90 rounded-md md:rounded-xl ease-in transition hover:brightness-75'
        src={story}
        layout='fill'
        objectFit='cover'
        alt=''
        priority
      />
    </div>
  );

  let createStory = (
    <div className='relative w-28 md:w-36 shadow-md ease-in transition hover:brightness-75 rounded-b-md md:rounded-b-xl overflow-x'>
      <div className='relative h-24 min-w-full rounded-t-md md:h-44 cursor-pointer overflow-x p-3 tranform ease-in md:rounded-t-xl'>
        <Image
          className='object-cover rounded-t-md md:rounded-t-xl filter brightness-90'
          src={story}
          layout='fill'
          objectFit='cover'
          alt=''
        />
      </div>
      <div className='absolute bottom-8 inset-x-0 flex justify-center'>
        <PlusIcon className='inline-flex ring-2 md:ring-4 ring-white p-1 h-8 w-8 bg-blue-500 rounded-full text-white cursor-pointer' />
      </div>
      <p className='absolute z-20 text-black bottom-1 text-center text-xs font-medium md:bottom-2 inset-x-0 md:text-sm md:font-semibold'>
        Create Story
      </p>
      <div className='bg-white h-12 min-w-full rounded-b-md md:h-12 overflow-x p-3 tranform ease-in md:rounded-b-xl' />
    </div>
  );

  return <>{user ? createStory : otherStory}</>;
}

export default StoryCard;

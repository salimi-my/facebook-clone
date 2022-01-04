import Image from 'next/image';

function StoryCard({ name, src, profile }) {
  return (
    <div
      className='relative h-36 w-28 rounded-md md:h-56 md:w-32 cursor-pointer overflow-x 
      p-3 tranform ease-in shadow-md md:rounded-xl'
    >
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
        src={src}
        layout='fill'
        objectFit='cover'
      />
    </div>
  );
}

export default StoryCard;

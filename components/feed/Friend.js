import Image from 'next/image';
import Tippy from '@tippyjs/react';

function Friend({ src, name }) {
  return (
    <Tippy
      duration={[300, 0]}
      placement='bottom'
      content={
        <div
          className='flex-col items-center justify-center text-center p-2 rounded-lg bg-black text-gray-300 opacity-75 shadow-md'
          tabIndex='-1'
        >
          <p className='text-base font-medium'>{name}</p>
          <p className='text-xs'>Say hi</p>
        </div>
      }
    >
      <div className='flex items-center relative cursor-pointer p-0 rounded-xl'>
        <Image
          className='rounded-full hover:brightness-90'
          objectFit='cover'
          src={src}
          width={40}
          height={40}
          layout='fixed'
          alt=''
        />
        <div className='absolute bottom-[0.1rem] right-[0.15rem] bg-green-600 h-2 w-2 rounded-full ring-[2.5px] ring-white'></div>
      </div>
    </Tippy>
  );
}

export default Friend;

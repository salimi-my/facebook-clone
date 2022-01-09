import Image from 'next/image';

function Shortcut({ src, name }) {
  return (
    <div className='flex items-center space-x-3 hover:bg-gray-200 cursor-pointer ml-2 p-2 rounded-xl'>
      <Image
        className='rounded-lg'
        objectFit='cover'
        src={src}
        width={36}
        height={36}
        layout='fixed'
        alt=''
      />
      <p>{name}</p>
    </div>
  );
}

export default Shortcut;

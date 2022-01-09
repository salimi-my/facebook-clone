import Image from 'next/image';

function Contact({ src, name }) {
  return (
    <div className='flex items-center space-x-3 mb-1 relative hover:bg-gray-200 cursor-pointer p-2 rounded-xl ml-1'>
      <Image
        className='rounded-full'
        objectFit='cover'
        src={src}
        width={40}
        height={40}
        layout='fixed'
        alt=''
      />
      <p>{name}</p>
      <div className='absolute bottom-2 left-6 bg-green-600 h-2 w-2 rounded-full ring-[2.5px] ring-gray-200'></div>
    </div>
  );
}

export default Contact;

import Image from 'next/image';

function SidebarRow({ src, Icon, title }) {
  return (
    <div className='flex items-center space-x-2 p-3 py-2 hover:bg-gray-200 rounded-xl cursor-pointer'>
      {src && (
        <Image
          className='rounded-full'
          src={src}
          width={36}
          height={36}
          layout='fixed'
          alt=''
        />
      )}
      {Icon && <Icon className='icon bg-[#dcdee2]' />}
      <p className='hidden lg:inline-flex font-medium'>{title}</p>
    </div>
  );
}

export default SidebarRow;

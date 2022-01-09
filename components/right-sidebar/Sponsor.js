import Image from 'next/image';

function Sponsor(props) {
  const urlWithoutProtocol = new URL(props.link).host;

  return (
    <a
      rel='noreferrer'
      href={props.link}
      target='_blank'
      className='flex justify-start items-center space-x-3 hover:bg-gray-200 cursor-pointer p-2 rounded-xl ml-1'
    >
      <Image
        className='rounded-lg'
        objectFit='cover'
        src={props.src}
        width={126}
        height={126}
        layout='fixed'
        alt=''
      />
      <div className='flex-col'>
        <h2 className='text-sm font-semibold'>{props.title}</h2>
        <p className='text-sm text-gray-500'>{urlWithoutProtocol}</p>
      </div>
    </a>
  );
}

export default Sponsor;

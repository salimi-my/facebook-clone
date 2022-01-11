import Image from 'next/image';
import Moment from 'react-moment';

function Comment({ image, name, comment, timestamp }) {
  return (
    <div className='flex items-start space-x-2'>
      <Image
        className='rounded-full'
        src={image}
        width={32}
        height={32}
        alt=''
      />
      <div className='inline-flex flex-col'>
        <div className='inline-flex flex-col bg-gray-100 p-3 rounded-2xl'>
          <p className='text-sm font-medium leading-4'>{name}</p>
          <p className='text-md leading-4'>{comment}</p>
        </div>
        <div className='inline-flex items-center space-x-[0.15rem] pl-3 py-[0.15rem]'>
          <p className='text-xs font-bold text-gray-500 hover:underline cursor-pointer'>
            Like
          </p>
          <span className='leading-3'>&#183;</span>
          <p className='text-xs font-bold text-gray-500 hover:underline cursor-pointer'>
            Reply
          </p>
          <span className='leading-3'>&#183;</span>
          <p className='text-xs font-bold text-gray-500 hover:underline cursor-pointer'>
            Share
          </p>
          <span className='leading-3'>&#183;</span>
          <p className='text-xs text-gray-500'>
            <Moment fromNow ago>
              {timestamp?.toDate()}
            </Moment>
          </p>
        </div>
      </div>
    </div>
  );
}

export default Comment;

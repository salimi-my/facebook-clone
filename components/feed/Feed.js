import CreateRoom from './CreateRoom';
import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed({ posts }) {
  return (
    <div className='flex justify-center md:justify-center lg:justify-start xl:justify-center pb-44 pt-6 mx-0 min-h-[calc(100vh-55px)]'>
      <div className='w-11/12 md:ml-0 lg:max-w-2xl lg:ml-8 xl:max-w-2xl xl:ml-0'>
        <Stories />
        <InputBox />
        <CreateRoom />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;

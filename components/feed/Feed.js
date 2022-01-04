import InputBox from './InputBox';
import Posts from './Posts';
import Stories from './Stories';

function Feed({ posts }) {
  return (
    // <div className='flex-grow h-screen pb-44 pt-6 mr-4 xl:mr-10 overflow-y-auto scrollbar-hide'>
    <div className='flex justify-center md:justify-center lg:justify-start xl:justify-center pb-44 pt-6 mx-auto'>
      <div className='w-10/12 md:ml-0 lg:max-w-2xl lg:ml-8 xl:max-w-2xl xl:ml-0'>
        <Stories />
        <InputBox />
        <Posts posts={posts} />
      </div>
    </div>
  );
}

export default Feed;

import Tippy from '@tippyjs/react/headless';
import { useRecoilState } from 'recoil';
import { photoModalState } from '../../atoms/modalAtom';

function PostIcon({ url, position, title }) {
  const [photoPost, setPhotoPost] = useRecoilState(photoModalState);
  return (
    <Tippy
      render={(attrs) => (
        <div
          className='flex items-center p-2 rounded-lg bg-black text-xs text-gray-300 opacity-75 font-medium'
          tabIndex='-1'
          {...attrs}
        >
          {title}
        </div>
      )}
    >
      <div
        onClick={() => {
          if (title === 'Photo/Video') setPhotoPost(true);
        }}
        className={`flex items-center rounded-full cursor-pointer
         p-[0.3rem] ${
           title === 'Photo/Video' && photoPost
             ? 'bg-green-100'
             : 'hover:bg-gray-200'
         }`}
      >
        <i
          style={{
            height: '24px',
            width: '24px',
            backgroundImage: `url(${url})`,
            backgroundPosition: position,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block'
          }}
        ></i>
      </div>
    </Tippy>
  );
}

export default PostIcon;

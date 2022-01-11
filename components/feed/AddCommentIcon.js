import Tippy from '@tippyjs/react/headless';

function AddCommentIcon({ url, position, title }) {
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
        className='flex items-center rounded-full cursor-pointer p-2 hover:bg-gray-200'
      >
        <i
          style={{
            height: '16px',
            width: '16px',
            backgroundImage: `url(${url})`,
            backgroundPosition: position,
            backgroundSize: 'auto',
            backgroundRepeat: 'no-repeat',
            display: 'inline-block',
            opacity: '0.5'
          }}
        ></i>
      </div>
    </Tippy>
  );
}

export default AddCommentIcon;

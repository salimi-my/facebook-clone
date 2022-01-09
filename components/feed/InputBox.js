import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useSetRecoilState } from 'recoil';
import { inputModalState, photoModalState } from '../../atoms/modalAtom';

function InputBox() {
  const { data: session } = useSession();
  const setOpen = useSetRecoilState(inputModalState);
  const setPhotoPost = useSetRecoilState(photoModalState);

  return (
    <div className='bg-white p-0 rounded-lg shadow-md text-gray-500 font-medium mt-6'>
      <div className='flex space-x-2 p-4 py-3 items-center'>
        <Image
          className='rounded-full'
          src={session.user.image}
          width={40}
          height={40}
          layout='fixed'
          alt=''
        />
        <form className='flex flex-1'>
          <input
            onClick={() => {
              setOpen(true);
              setPhotoPost(false);
            }}
            className='rounded-full h-10 bg-gray-100 flex-grow px-3 focus:outline-none text-lg placeholder-gray-500 hover:bg-gray-200 cursor-pointer'
            type='type'
            placeholder={`What's on your mind, ${session.user.first_name}?`}
            readOnly
          />
        </form>
      </div>
      <hr className='border-t border-gray-200 my-0 mx-4' />
      <div className='flex justify-evenly p-4 py-2'>
        <div className='inputIcon py-3'>
          <svg viewBox='0 0 24 24' className='h-6 fill-red-500 pr-1'>
            <g fillRule='evenodd'>
              <path d='M23.029 5.014c-.363-.088-.746.014-1.048.234l-2.57 1.88a.999.999 0 0 0-.411.807v8.13a1 1 0 0 0 .41.808l2.602 1.901a1.248 1.248 0 0 0 1.469.007c.34-.239.519-.65.519-1.065V6.235a1.25 1.25 0 0 0-.971-1.22m-20.15 6.563C2.979 11.432 5.354 8 8.749 8c3.396 0 5.771 3.432 5.87 3.578a.749.749 0 0 1 0 .844C14.52 12.568 12.145 16 8.749 16c-3.395 0-5.77-3.432-5.87-3.578a.749.749 0 0 1 0-.844zM13.75 21.5a3.754 3.754 0 0 0 3.75-3.75V6.25a3.754 3.754 0 0 0-3.75-3.75h-10A3.754 3.754 0 0 0 0 6.25v11.5a3.754 3.754 0 0 0 3.75 3.75h10z' />
              <path d='M8.75 14.5c1.379 0 2.5-1.121 2.5-2.5s-1.121-2.5-2.5-2.5a2.503 2.503 0 0 0-2.5 2.5c0 1.379 1.121 2.5 2.5 2.5' />
            </g>
          </svg>
          <p className='text-xs sm:text-sm xl:text-base'>Live Video</p>
        </div>
        <div
          onClick={() => {
            setPhotoPost(true);
            setOpen(true);
          }}
          className='inputIcon py-3'
        >
          <svg viewBox='0 0 24 24' className='h-6 fill-[#45BD62] pr-1'>
            <g fillRule='evenodd'>
              <path d='m4.968 22.925-.648.057a2.692 2.692 0 0 1-1.978-.625 2.69 2.69 0 0 1-.96-1.84L.01 4.82A2.702 2.702 0 0 1 .8 2.664c.47-.472 1.111-.731 1.774-.79l2.58-.225a.498.498 0 0 1 .507.675 4.189 4.189 0 0 0-.251 1.11L4.017 19.35a4.206 4.206 0 0 0 .977 3.091s.459.364-.026.485m8.524-16.327a1.75 1.75 0 1 1-3.485.305 1.75 1.75 0 0 1 3.485-.305m5.85 3.011a.797.797 0 0 0-1.129-.093l-3.733 3.195a.545.545 0 0 0-.062.765l.837.993a.75.75 0 1 1-1.147.966l-2.502-2.981a.797.797 0 0 0-1.096-.12L7 15l-.5 4.25c-.06.674.326 2.19 1 2.25l11.916 1.166c.325.026 1-.039 1.25-.25.252-.21.89-.842.917-1.166l.833-8.084-3.073-3.557z' />
              <path
                fillRule='nonzero'
                d='M19.61 23.463 8.006 22.448a2.77 2.77 0 0 1-2.512-2.995L6.88 3.59a2.77 2.77 0 0 1 2.996-2.51l11.603 1.015a2.77 2.77 0 0 1 2.513 2.994l-1.388 15.862a2.77 2.77 0 0 1-2.994 2.513zm.13-1.494.082.004a1.27 1.27 0 0 0 1.287-1.154l1.388-15.862a1.27 1.27 0 0 0-1.148-1.37L9.745 2.573a1.27 1.27 0 0 0-1.37 1.15l-1.387 15.86a1.27 1.27 0 0 0 1.149 1.37l11.603 1.016z'
              />
            </g>
          </svg>
          <p className='text-xs sm:text-sm xl:text-base'>Photo/Video</p>
        </div>
        <div className='hidden md:flex inputIcon py-3'>
          <svg viewBox='0 0 24 24' className='h-6 fill-[#F7B928] pr-1'>
            <g fillRule='evenodd'>
              <path d='M16.785 13.5c.49 0 .841.476.712.957-.623 2.324-2.837 4.043-5.473 4.043-2.636 0-4.85-1.719-5.473-4.043-.13-.48.222-.957.712-.957h9.522z' />
              <path
                fillRule='nonzero'
                d='M23.524 12c0 6.351-5.149 11.5-11.5 11.5S.524 18.351.524 12 5.673.5 12.024.5s11.5 5.149 11.5 11.5zm-2 0a9.5 9.5 0 1 0-19 0 9.5 9.5 0 0 0 19 0z'
              />
              <path d='M9.024 9c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m8.5 0c0 .829-.56 1.5-1.25 1.5s-1.25-.671-1.25-1.5.56-1.5 1.25-1.5 1.25.671 1.25 1.5m-.739 4.5H7.263c-.49 0-.841.476-.712.957.623 2.324 2.837 4.043 5.473 4.043 2.636 0 4.85-1.719 5.473-4.043.13-.48-.222-.957-.712-.957m-2.165 2c-.667.624-1.592 1-2.596 1a3.799 3.799 0 0 1-2.596-1h5.192' />
            </g>
          </svg>
          <p className='text-xs sm:text-sm xl:text-base'>Feeling/Activity</p>
        </div>
      </div>
    </div>
  );
}

export default InputBox;

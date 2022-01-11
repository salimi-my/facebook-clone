import { Fragment, useRef, useState } from 'react';
import { Dialog, Transition } from '@headlessui/react';
import { XIcon } from '@heroicons/react/outline';
import { useRecoilState } from 'recoil';
import { inputModalState, photoModalState } from '../../atoms/modalAtom';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import TextareaAutosize from 'react-textarea-autosize';
import PostIcon from './PostIcon';
import { db, storage } from '../../firebase';
import {
  addDoc,
  collection,
  doc,
  serverTimestamp,
  updateDoc
} from 'firebase/firestore';
import { ref, getDownloadURL, uploadString } from 'firebase/storage';

export default function InputModal() {
  const { data: session } = useSession();
  const [open, setOpen] = useRecoilState(inputModalState);
  const [smalText, setSmallText] = useState(false);
  const [enableButton, setEnableButton] = useState(false);
  const [photoPost, setPhotoPost] = useRecoilState(photoModalState);
  const [imageToPost, setImageToPost] = useState(null);
  const [posting, setPosting] = useState(false);
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);

  const inputChangeHandler = (e) => {
    if (e.target.value.length > 0) {
      setEnableButton(true);
    } else {
      setEnableButton(false);
    }
    if (e.target.value.length > 85) {
      setSmallText(true);
    } else {
      setSmallText(false);
    }
  };

  const sendPost = async (e) => {
    e.preventDefault();

    if (!inputRef.current.value) return;

    setPosting(true);

    const docRef = await addDoc(collection(db, 'posts'), {
      message: inputRef.current.value,
      name: session.user.name,
      email: session.user.email,
      image: session.user.image,
      timestamp: serverTimestamp()
    });

    if (imageToPost) {
      const imageRef = ref(storage, `post/${docRef.id}`);

      await uploadString(imageRef, imageToPost, 'data_url').then(
        async (snapshot) => {
          const downloadURL = await getDownloadURL(imageRef);

          await updateDoc(doc(db, 'posts', docRef.id), {
            postImage: downloadURL
          });
        }
      );

      removeImage();
    }

    setPosting(false);
    setOpen(false);
    setEnableButton(false);
    inputRef.current.value = '';
  };

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if (e.target.files[0]) {
      reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
      setImageToPost(readerEvent.target.result);
    };
  };

  const removeImage = () => {
    setImageToPost(null);
  };

  return (
    <Transition.Root show={open} as={Fragment}>
      <Dialog
        as='div'
        className='fixed z-50 inset-0 overflow-y-auto'
        onClose={setOpen}
      >
        <div className='flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:block sm:p-0'>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0'
            enterTo='opacity-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100'
            leaveTo='opacity-0'
          >
            <Dialog.Overlay className='fixed inset-0 bg-gray-200 bg-opacity-75 transition-opacity' />
          </Transition.Child>

          {/* This element is to trick the browser into centering the modal contents. */}
          <span
            className='hidden sm:inline-block sm:align-middle sm:h-screen'
            aria-hidden='true'
          >
            &#8203;
          </span>
          <Transition.Child
            as={Fragment}
            enter='ease-out duration-300'
            enterFrom='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
            enterTo='opacity-100 translate-y-0 sm:scale-100'
            leave='ease-in duration-200'
            leaveFrom='opacity-100 translate-y-0 sm:scale-100'
            leaveTo='opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95'
          >
            <div className='inline-block align-bottom bg-white rounded-lg text-left overflow-hidden shadow-2xl transform transition-all sm:my-8 sm:align-middle sm:max-w-lg sm:w-full'>
              {posting && (
                <div className='flex flex-col w-full h-full fixed top-0 left-0 bg-gray-200 opacity-75 z-50 items-center justify-center'>
                  <p className='text-xl font-semibold'>Posting</p>
                  <Image
                    className=''
                    src={'/three-dots.svg'}
                    width='40'
                    height='15'
                    layout='fixed'
                    alt=''
                  />
                </div>
              )}
              <div className='bg-white px-4 py-4 sm:px-6 sm:flex justify-center items-center border-b relative'>
                <Dialog.Title
                  as='h3'
                  className='text-xl leading-6 font-bold text-gray-900'
                >
                  Create post
                </Dialog.Title>
                <XIcon
                  onClick={() => setOpen(false)}
                  className='icon absolute right-4 top-2'
                />
              </div>
              <div className='flex bg-white py-3 px-4 items-center space-x-2'>
                <Image
                  className='rounded-full cursor-pointer'
                  src={session.user.image}
                  width='40'
                  height='40'
                  layout='fixed'
                  alt=''
                />
                <div className='flex-col items-start space-y-[0.15rem]'>
                  <p className='text-[0.9rem] font-semibold'>
                    {session.user.name}
                  </p>
                  <div className='flex items-start'>
                    <div className='flex items-center bg-gray-200 space-x-1 px-2 py-[0.1rem] rounded-md'>
                      <Image
                        className='rounded-full'
                        src='/public.svg'
                        width={12}
                        height={12}
                        layout='fixed'
                        alt=''
                      />
                      <p className='text-xs font-medium pr-[0.1rem]'>Public</p>
                      <Image
                        className='rounded-full'
                        src='/down.svg'
                        width={14}
                        height={14}
                        layout='fixed'
                        alt=''
                      />
                    </div>
                  </div>
                </div>
              </div>
              <div
                className={`flex relative bg-white py-2 px-4 items-end space-x-2 ${
                  !photoPost && 'min-h-[112px]'
                }`}
              >
                <TextareaAutosize
                  onChange={inputChangeHandler}
                  className={`bg-white flex-grow focus:outline-none placeholder-gray-600 resize-none ${
                    !smalText && !photoPost ? 'text-2xl' : 'text-base'
                  }`}
                  type='text'
                  ref={inputRef}
                  placeholder={`What's on your mind, ${session.user.first_name}?`}
                  minRows={!photoPost ? 3 : 1}
                  rows={!photoPost ? 3 : 1}
                />
                {photoPost && (
                  <div className='flex bg-white p-0'>
                    <i
                      className='cursor-pointer'
                      style={{
                        height: '24px',
                        width: '24px',
                        backgroundImage: 'url("/icons-1.png")',
                        backgroundPosition: '0px -182px',
                        backgroundSize: 'auto',
                        backgroundRepeat: 'no-repeat',
                        display: 'inline-block'
                      }}
                    ></i>
                  </div>
                )}
              </div>
              {photoPost && (
                <div className='flex relative bg-white py-2 px-2 items-center justify-between border border-gray-200 rounded-lg mx-4 mt-7 mb-4'>
                  <XIcon
                    onClick={() => {
                      removeImage();
                      setPhotoPost(false);
                    }}
                    className='inline-flex z-20 p-1 h-8 w-8 bg-white rounded-full text-gray-500 cursor-pointer hover:bg-gray-200 absolute right-4 top-4'
                  />
                  {photoPost && !imageToPost && (
                    <button
                      onClick={() => filePickerRef.current.click()}
                      className='flex-1 h-56 rounded-md font-semibold bg-gray-100 hover:bg-gray-200'
                    >
                      <div className='flex flex-col items-center'>
                        <div className='flex items-center rounded-full bg-gray-300 p-2'>
                          <i
                            style={{
                              backgroundImage: 'url("/icons-1.png")',
                              backgroundPosition: '-25px -250px',
                              backgroundSize: 'auto',
                              width: '20px',
                              height: '20px',
                              backgroundRepeat: 'no-repeat',
                              display: 'inline-block'
                            }}
                          ></i>
                        </div>
                        <p className='text-lg'>Add Photos/Videos</p>
                        <p className='text-xs font-thin'>or drag and drop</p>
                      </div>
                    </button>
                  )}
                  {photoPost && imageToPost && (
                    <img
                      className='min-w-full rounded-lg'
                      src={imageToPost}
                      alt='selected image'
                    />
                  )}
                  <input
                    ref={filePickerRef}
                    onChange={addImageToPost}
                    type='file'
                    hidden
                  />
                </div>
              )}
              {!photoPost && (
                <div className='flex bg-white py-2 px-3 pr-4 items-center justify-between'>
                  <Image
                    className='cursor-pointer'
                    src='/Aa.png'
                    width={38}
                    height={38}
                    layout='fixed'
                    alt=''
                  />
                  <i
                    className='cursor-pointer'
                    style={{
                      height: '24px',
                      width: '24px',
                      backgroundImage: 'url("/icons-1.png")',
                      backgroundPosition: '0px -182px',
                      backgroundSize: 'auto',
                      backgroundRepeat: 'no-repeat',
                      display: 'inline-block'
                    }}
                  ></i>
                </div>
              )}
              <div className='flex bg-white py-4 px-4 items-center justify-between border border-gray-200 rounded-lg mx-4 mt-2 mb-4'>
                <p className='font-semibold cursor-pointer'>Add to your post</p>
                <div className='flex justify-evenly items-center space-x-1'>
                  <PostIcon
                    url={'/icons-1.png'}
                    position={'0px -282px'}
                    title={'Photo/Video'}
                  />
                  <PostIcon
                    url={'/icons-1.png'}
                    position={'0px -257px'}
                    title={'Tag people'}
                  />
                  <PostIcon
                    url={'/icons-1.png'}
                    position={'0px -232px'}
                    title={'Feeling/activity'}
                  />
                  <PostIcon
                    url={'/icons-2.png'}
                    position={'0px -225px'}
                    title={'Check in'}
                  />
                  <PostIcon
                    url={'/icons-3.png'}
                    position={'0px -100px'}
                    title={'Host a Q&A'}
                  />
                  <PostIcon
                    url={'/icons-1.png'}
                    position={'0px -157px'}
                    title={'More'}
                  />
                </div>
              </div>
              <div className='flex bg-white py-4 px-4 items-center justify-between'>
                <button
                  onClick={sendPost}
                  className={`flex-1 p-2 rounded-md font-semibold ${
                    enableButton
                      ? 'bg-[#1B74E4] hover:bg-[#196dd3] text-white'
                      : 'bg-[#E4E6EB] text-[#BCC0C4] cursor-not-allowed'
                  }`}
                  disabled={!enableButton}
                >
                  Post
                </button>
              </div>
            </div>
          </Transition.Child>
        </div>
      </Dialog>
    </Transition.Root>
  );
}

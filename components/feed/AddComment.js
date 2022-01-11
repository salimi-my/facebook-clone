import { addDoc, collection, serverTimestamp } from 'firebase/firestore';
import { useSession } from 'next-auth/react';
import Image from 'next/image';
import { useRef, useState } from 'react';
import TextareaAutosize from 'react-textarea-autosize';
import { db } from '../../firebase';
import useWindowSize from '../../hooks/use-window-size';
import AddCommentIcon from './AddCommentIcon';

function AddComment({ id }) {
  const windowSize = useWindowSize();
  const commentRef = useRef(null);
  const { data: session } = useSession();
  const [commentIconBottom, setCommentIconBottom] = useState(false);

  const commentChangeHandler = (e) => {
    let charCount;
    if (windowSize > 767) {
      charCount = 55;
    } else if (windowSize > 424 && windowSize < 768) {
      charCount = 20;
    } else if (windowSize > 374 && windowSize < 425) {
      charCount = 15;
    }
    if (e.target.value.length > charCount) {
      setCommentIconBottom(true);
    } else {
      setCommentIconBottom(false);
    }
  };

  const sendComment = async () => {
    if (!commentRef.current.value.trim()) return;

    const commentToSend = commentRef.current.value;
    commentRef.current.value = '';

    await addDoc(collection(db, 'posts', id, 'comments'), {
      comment: commentToSend,
      name: session.user.name,
      image: session.user.image,
      timestamp: serverTimestamp()
    });
  };

  const onEnterPress = (e) => {
    if (e.keyCode == 13 && e.shiftKey == false) {
      e.preventDefault();
      sendComment();
    }
  };

  return (
    <div className='flex mb-2 space-x-2 flex-auto items-start'>
      <div className='relative'>
        <Image
          className='rounded-full'
          objectFit='cover'
          src={session.user.image}
          width={32}
          height={32}
          layout='fixed'
          alt=''
        />
        <div className='absolute bottom-[0.4rem] right-0 bg-green-600 h-2 w-2 rounded-full ring-[2.5px] ring-white'></div>
      </div>
      <form
        id='addCommentForm'
        className='flex flex-col items-center bg-gray-100 rounded-3xl px-3 w-full py-2 relative'
      >
        <TextareaAutosize
          onChange={commentChangeHandler}
          ref={commentRef}
          className='outline-none bg-transparent placeholder-gray-500 text-md w-full resize-none'
          type='text'
          placeholder='Write a comment...'
          onKeyDown={onEnterPress}
        />
        {commentIconBottom && <div className='flex py-5'></div>}
        {windowSize > 374 && (
          <div className='flex justify-end items-center absolute right-1 bottom-1 space-x-[-0.25rem]'>
            <AddCommentIcon
              url={'/icons-5.png'}
              position={'0px -362px'}
              title={'Insert an emoji'}
            />
            <AddCommentIcon
              url={'/icons-5.png'}
              position={'0px -311px'}
              title={'Attach a photo or video'}
            />
            <AddCommentIcon
              url={'/icons-5.png'}
              position={'0px -379px'}
              title={'Comment with a GIF'}
            />
            <AddCommentIcon
              url={'/icons-5.png'}
              position={'0px -396px'}
              title={'Comment with a Sticker'}
            />
          </div>
        )}
      </form>
    </div>
  );
}

export default AddComment;

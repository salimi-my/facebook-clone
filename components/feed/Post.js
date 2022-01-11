import Image from 'next/image';
import { useEffect, useState } from 'react';
import AddComment from './AddComment';
import Comment from './Comment';
import Moment from 'react-moment';
import {
  collection,
  deleteDoc,
  doc,
  onSnapshot,
  orderBy,
  query,
  setDoc
} from 'firebase/firestore';
import { db } from '../../firebase';
import { useSession } from 'next-auth/react';

function Post({ id, name, message, postImage, image, timestamp }) {
  const { data: session } = useSession();
  const [showComment, setShowComment] = useState(false);
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState([]);
  const [hasLiked, setHasLiked] = useState(false);

  useEffect(
    () =>
      onSnapshot(
        query(
          collection(db, 'posts', id, 'comments'),
          orderBy('timestamp', 'desc')
        ),
        (snapshot) => {
          setComments(
            snapshot.docs.map((doc) => ({ ...doc.data(), id: doc.id }))
          );
        }
      ),
    [id]
  );

  useEffect(
    () =>
      onSnapshot(collection(db, 'posts', id, 'likes'), (snapshot) =>
        setLikes(snapshot.docs)
      ),
    [id]
  );

  useEffect(
    () =>
      setHasLiked(
        likes.findIndex((like) => like.id === session.user.email) !== -1
      ),
    [likes, session]
  );

  const likePost = async () => {
    if (hasLiked) {
      await deleteDoc(doc(db, 'posts', id, 'likes', session.user.email));
    } else {
      await setDoc(doc(db, 'posts', id, 'likes', session.user.email), {
        email: session.user.email
      });
    }
  };

  return (
    <div className='flex flex-col'>
      <div className='p-5 bg-white mt-5 rounded-t-lg shadow-sm'>
        <div className='flex items-center space-x-2'>
          <Image
            className='rounded-full'
            src={image}
            width={40}
            height={40}
            alt=''
          />
          <div className='flex flex-col items-start space-y-0'>
            <p className='font-semibold text-left'>{name}</p>
            <div className='flex items-center justify-start space-x-1'>
              {timestamp ? (
                <p className='flex items-center text-xs text-gray-400'>
                  <Moment fromNow ago>
                    {timestamp?.toDate()}
                  </Moment>
                </p>
              ) : (
                <p className='flex items-center text-xs text-gray-400'>
                  Loading
                </p>
              )}
              <span className='leading-[0.5rem]'>&#183;</span>
              <div>
                <svg viewBox='0 0 16 16' className='h-3 fill-gray-500'>
                  <g fillRule='evenodd'>
                    <path d='M15.5 8c0 3.23-2.04 5.983-4.903 7.036l.07-.036c1.167-1 1.814-2.967 2-3.834.214-1 .303-1.3-.5-1.96-.31-.253-.677-.196-1.04-.476-.246-.19-.356-.59-.606-.73-.594-.337-1.107.11-1.954.223a2.666 2.666 0 0 1-1.15-.123c-.007 0-.007 0-.013-.004l-.083-.03c-.164-.082-.077-.206.006-.36h-.006c.086-.17.086-.376-.05-.529-.19-.214-.54-.214-.804-.224-.106-.003-.21 0-.313.004l-.003-.004c-.04 0-.084.004-.124.004H5.99c-.323.007-.666-.034-.893-.314-.263-.353-.29-.733.097-1.09.28-.26.863-.8 1.807-.22.603.37 1.166.667 1.666.5.33-.11.48-.303.094-.87a1.128 1.128 0 0 1-.214-.73c.067-.776.687-.84 1.164-1.2.466-.356.68-.943.546-1.457-.106-.413-.51-.873-1.28-1.01A7.49 7.49 0 0 1 15.501 8' />
                    <path d='M10.107 15.196A7.498 7.498 0 0 1 .5 8a7.48 7.48 0 0 1 3.407-6.283 5.474 5.474 0 0 0-1.653 2.334c-.753 2.217-.217 4.075 2.29 4.075.833 0 1.4.561 1.333 2.375-.013.403.52 1.78 2.45 1.89.7.04 1.184 1.053 1.33 1.74.06.29.127.65.257.97a.174.174 0 0 0 .193.096' />
                    <path
                      fillRule='nonzero'
                      d='M16 8A8 8 0 1 1 0 8a8 8 0 0 1 16 0zm-1 0A7 7 0 1 0 1 8a7 7 0 0 0 14 0z'
                    />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
        <p className='pt-4'>{message}</p>
      </div>
      {postImage && (
        <div className='relative h-56 md:h-96 bg-white border border-gray-300'>
          <Image src={postImage} objectFit='cover' layout='fill' alt='' />
        </div>
      )}
      {(likes.length > 0 || comments.length > 0) && (
        <div className='flex items-center justify-between bg-white py-[0.6rem] px-5'>
          {likes.length > 0 ? (
            <div className='flex items-center space-x-2'>
              <Image src='/like.svg' width={18} height={18} alt='' />
              <p className='text-base text-gray-500'>{likes.length}</p>
            </div>
          ) : (
            <div></div>
          )}
          {comments.length > 0 ? (
            <div
              onClick={() => setShowComment(true)}
              className='flex items-center space-x-1 cursor-pointer hover:underline text-gray-500'
            >
              <p className='text-base'>{comments.length} Comments</p>
            </div>
          ) : (
            <div></div>
          )}
        </div>
      )}
      {(likes.length > 0 || comments.length > 0) && (
        <div className='bg-white'>
          <hr className='border-t border-gray-300 mt-0 mx-5' />
        </div>
      )}
      <div
        className={`flex justify-between items-center bg-white text-gray-500 p-1 px-5 ${
          !showComment && 'rounded-b-lg shadow-md'
        }`}
      >
        <div onClick={likePost} className='inputIcon rounded-md'>
          {hasLiked ? (
            <i
              style={{
                backgroundImage: 'url("/icons-5.png")',
                backgroundPosition: '0px -203px',
                backgroundSize: 'auto',
                width: '18px',
                height: '18px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                opacity: 1,
                filter:
                  'invert(41%) sepia(100%) saturate(452%) hue-rotate(178deg) brightness(91%) contrast(98%)'
              }}
            ></i>
          ) : (
            <i
              style={{
                backgroundImage: 'url("/icons-5.png")',
                backgroundPosition: '0px -222px',
                backgroundSize: 'auto',
                width: '18px',
                height: '18px',
                backgroundRepeat: 'no-repeat',
                display: 'inline-block',
                opacity: 0.6
              }}
            ></i>
          )}
          <p
            className={`text-xs sm:text-base font-semibold ${
              hasLiked && 'text-[#3578E5]'
            }`}
          >
            Like
          </p>
        </div>
        <div
          onClick={() => setShowComment(true)}
          className='inputIcon rounded-md'
        >
          <i
            style={{
              backgroundImage: 'url("/icons-4.png")',
              backgroundPosition: '0px -205px',
              backgroundSize: 'auto',
              width: '18px',
              height: '18px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              opacity: 0.6
            }}
          ></i>
          <p className='text-xs sm:text-base font-semibold'>Comment</p>
        </div>
        <div className='inputIcon rounded-md'>
          <i
            style={{
              backgroundImage: 'url("/icons-4.png")',
              backgroundPosition: '0px -262px',
              backgroundSize: 'auto',
              width: '18px',
              height: '18px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block',
              opacity: 0.6
            }}
          ></i>
          <p className='text-xs sm:text-base font-semibold'>Share</p>
        </div>
      </div>
      {showComment && (
        <div className='bg-white'>
          <hr className='border-t border-gray-300 mt-0 mx-5' />
        </div>
      )}
      {showComment && (
        <div className='flex flex-col bg-white p-1 px-5 rounded-b-lg shadow-md'>
          <div className='flex justify-end items-center py-1'>
            <p className='text-sm text-gray-500 font-medium'>All comments</p>
            <svg viewBox='0 0 20 20' className='h-[1.1rem] fill-gray-500'>
              <path d='M10 14a1 1 0 0 1-.755-.349L5.329 9.182a1.367 1.367 0 0 1-.205-1.46A1.184 1.184 0 0 1 6.2 7h7.6a1.18 1.18 0 0 1 1.074.721 1.357 1.357 0 0 1-.2 1.457l-3.918 4.473A1 1 0 0 1 10 14z' />
            </svg>
          </div>
          {comments.length > 0 &&
            comments.map((comment) => (
              <Comment
                key={comment.id}
                image={comment.image}
                name={comment.name}
                comment={comment.comment}
                timestamp={comment.timestamp}
              />
            ))}
          <AddComment id={id} />
        </div>
      )}
    </div>
  );
}

export default Post;

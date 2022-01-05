import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/feed/Feed';
import Header from '../components/header/Header';
import LeftSidebar from '../components/left-sidebar/LeftSidebar';
import RightSidebar from '../components/right-sidebar/RightSidebar';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Fragment } from 'react';

export default function Home({ session, posts }) {
  return (
    <Fragment>
      <Head>
        <title>Facebook Clone</title>
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <LeftSidebar />
      <main className='bg-gray-100 overflow-y-auto feed'>
        <Feed posts={posts} />
      </main>
      <RightSidebar />
    </Fragment>
  );
}

export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  const posts = await getDocs(
    query(collection(db, 'posts'), orderBy('timestamp', 'desc'))
  );

  const docs = posts.docs.map((post) => ({
    id: post.id,
    ...post.data(),
    timestamp: null
  }));

  if (session) {
    return {
      props: {
        session,
        posts: docs
      }
    };
  } else if (!session) {
    return {
      redirect: {
        permanent: false,
        destination: '/login'
      }
    };
  }
}

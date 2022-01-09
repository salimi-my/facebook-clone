import { getSession } from 'next-auth/react';
import Head from 'next/head';
import Feed from '../components/feed/Feed';
import Header from '../components/header/Header';
import LeftSidebar from '../components/left-sidebar/LeftSidebar';
import RightSidebar from '../components/right-sidebar/RightSidebar';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { db } from '../firebase';
import { Fragment } from 'react';
import { useRouter } from 'next/router';
import InputModal from '../components/modal/InputModal';

export default function Home({ posts }) {
  const router = useRouter();
  if (router.asPath === '/#_=_') {
    window.history.pushState('', document.title, window.location.pathname);
  }

  return (
    <Fragment>
      <Head>
        <title>Fakebook</title>
        <meta name='title' content='Fakebook' />
        <meta
          name='description'
          content='This is NOT REAL FACEBOOK! This site created for educational purposes only.'
        />

        <meta property='og:type' content='website' />
        <meta property='og:url' content='https://fakebook.salimi.my/' />
        <meta property='og:title' content='Fakebook' />
        <meta
          property='og:description'
          content='This is NOT REAL FACEBOOK! This site created for educational purposes only.'
        />
        <meta property='og:image' content='/fakebook.jpg' />

        <meta property='twitter:card' content='summary_large_image' />
        <meta property='twitter:url' content='https://fakebook.salimi.my/' />
        <meta property='twitter:title' content='Fakebook' />
        <meta
          property='twitter:description'
          content='This is NOT REAL FACEBOOK! This site created for educational purposes only.'
        />
        <meta property='twitter:image' content='/fakebook.jpg' />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <Header />
      <LeftSidebar />
      <main className='bg-gray-100 overflow-y-auto'>
        <Feed posts={posts} />
      </main>
      <RightSidebar />
      <InputModal />
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

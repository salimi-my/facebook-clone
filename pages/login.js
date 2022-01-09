import { getProviders, signIn } from 'next-auth/react';
import Head from 'next/head';
import { useState } from 'react';
import DisclaimerModal from '../components/modal/DisclaimerModal';

function Login({ providers }) {
  const [loggingIn, setLoggingIn] = useState(false);

  return (
    <>
      <Head>
        <title>Not Facecook | Login</title>
        <meta name='title' content='Not Facecook | Login' />
        <meta
          name='description'
          content='This is NOT REAL FACEBOOK! This site created for educational purposes only.'
        />
        <meta name='robots' content='noindex, nofollow' />
        <link rel='shortcut icon' href='/favicon.ico' />
      </Head>
      <div>
        <div>
          <section className='text-gray-600 body-font bg-gray-100'>
            <div className='container xl:px-32 px-5 py-36 mx-auto flex flex-wrap items-center'>
              <div className='lg:w-3/5 md:w-1/2 md:pr-16 lg:pr-0 pr-0 -mt-10'>
                <h1 className='title-font font-bold lg:text-6xl text-6xl text-blue-600 text-center md:text-left '>
                  not facebook
                </h1>
                <p className='leading-relaxed mt-4 lg:text-3xl text-xl lg:max-w-xl font-normal text-black text-center md:text-left'>
                  This is not real Facebook and it cannot connect with real
                  people.
                </p>
              </div>
              <div className='lg:w-2/6 md:w-1/2 bg-white shadow-lg rounded-lg p-5 flex flex-col md:ml-auto w-full mt-10 md:mt-0'>
                <div className='relative mb-4'>
                  <input
                    type='email'
                    name='email'
                    placeholder='Email address or phone number'
                    className='w-full bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 
                    focus:ring-indigo-200 text-lg outline-none  text-gray-700 py-1 px-3 leading-8 transition-colors 
                    duration-200 ease-in-out disabled:cursor-not-allowed'
                    disabled
                  />
                </div>
                <div className='relative mb-4'>
                  <input
                    type='password'
                    name='password'
                    placeholder='Password'
                    className='w-full  bg-white rounded-md border border-gray-300 focus:border-indigo-500 focus:ring-2 
                    focus:ring-indigo-200  outline-none text-lg text-gray-700 py-1 px-3 leading-8 transition-colors 
                    duration-200 ease-in-out disabled:cursor-not-allowed'
                    disabled
                  />
                </div>
                {Object.values(providers).map((provider) => (
                  <div key={provider.name}>
                    <button
                      className='w-full text-white border-0 py-2 px-8 focus:outline-none font-medium rounded-md text-xl 
                      bg-blue-600 hover:bg-blue-700'
                      onClick={() => {
                        signIn(provider.id, { callbackUrl: '/' });
                        setLoggingIn(true);
                      }}
                    >
                      {loggingIn && (
                        <div className='flex items-center justify-center'>
                          <svg
                            class='animate-spin -ml-1 mr-3 h-5 w-5 text-white'
                            xmlns='http://www.w3.org/2000/svg'
                            fill='none'
                            viewBox='0 0 24 24'
                          >
                            <circle
                              class='opacity-25'
                              cx='12'
                              cy='12'
                              r='10'
                              stroke='currentColor'
                              stroke-width='4'
                            ></circle>
                            <path
                              class='opacity-75'
                              fill='currentColor'
                              d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                            ></path>
                          </svg>
                          <p className='font-semibold text-lg'>Connecting...</p>
                        </div>
                      )}
                      {!loggingIn && <div>Login with {provider.name}</div>}
                    </button>
                  </div>
                ))}
                <a
                  href='#'
                  className='text-md font-normal text-blue-500 py-3 text-center hover:underline cursor-pointer'
                >
                  Forgotten password?
                </a>
                <hr className='my-5 mt-2' />
                <div className='flex justify-center py-2'>
                  <button
                    className='flex items-center justify-center text-white border-0 py-[0.55rem] px-4 focus:outline-none font-medium rounded-md text-lg 
                  bg-[#42b72a] hover:bg-[#359b21] cursor-not-allowed'
                  >
                    Create New Account
                  </button>
                </div>
              </div>
              <div className='lg:w-2/6 md:w-1/2 bg-transparent rounded-lg p-12 pt-6 flex flex-col md:ml-auto w-full mt-3 md:mt-0'>
                <p className='text-sm text-gray-700 mt-0 text-center'>
                  <a href='#' className='hover:underline'>
                    <b>Create a Page</b>
                  </a>
                  &nbsp;for a celebrity, band or business
                </p>
              </div>
            </div>
          </section>
        </div>

        <div className='container mx-auto w-9/12'>
          <p className='text-sm text-gray-500 mt-7'>
            This is just a clone of Facebook created using Next.js, Tailwind CSS
            and Firebase.
          </p>
          <hr className='my-2 border-t border-gray-300' />
          <p className='text-sm text-gray-500'>
            Disclaimer: This site is not the real Facebook. Under no
            circumstance shall I have any liability to you for any loss or
            damage of any kind incurred as a result of the use of the site or
            reliance on any information provided on the site. Your use of the
            site and your reliance on any information on the site is solely at
            your own risk.
          </p>
          <div className='mt-2 flex flex-col items-center'>
            <div className='sm:w-full text-start py-6'>
              <p className='text-xs text-gray-500 mb-2'>
                Facebook Clone © 2022 Created by Mohamad Salimi
              </p>
            </div>
          </div>
        </div>
      </div>
      <DisclaimerModal />
    </>
  );
}

export default Login;

export async function getServerSideProps() {
  const providers = await getProviders();

  return {
    props: {
      providers
    }
  };
}

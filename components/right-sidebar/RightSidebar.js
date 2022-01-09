import Contact from './Contact';
import Sponsor from './Sponsor';

const contacts = [
  { src: 'https://links.salimi.my/jeffbezosprofile', name: 'Jeff Bezos' },
  { src: 'https://links.salimi.my/elonmuskprofile', name: 'Elon Musk' },
  { src: 'https://links.salimi.my/billgatesprofile', name: 'Bill Gates' },
  {
    src: 'https://links.salimi.my/markzuckerbergprofile',
    name: 'Mark Zuckerberg'
  },
  { src: 'https://links.salimi.my/timcookprofile', name: 'Tim Cook' },
  { src: 'https://links.salimi.my/sundarpichaiprofile', name: 'Sundar Pichai' },
  {
    src: 'https://links.salimi.my/rayroslanskyprofile',
    name: 'Ryan Roslansky'
  },
  { src: 'https://links.salimi.my/paragagrawalprofile', name: 'Parag Agrawal' }
];

const sponsors = [
  {
    src: 'https://links.salimi.my/react',
    title: 'React: A JavaScript library',
    link: 'https://reactjs.org/'
  },
  {
    src: 'https://links.salimi.my/nextjs',
    title: 'Next.js: The React Framework',
    link: 'https://nextjs.org/'
  }
];

function RightSidebar() {
  return (
    <div className='hidden lg:flex flex-col lg:w-72 xl:w-[23rem] p-2 mt-5 fixed top-12 right-0 pr-5'>
      <div className='flex justify-between items-center text-gray-500 mb-2 ml-3'>
        <h2 className='text-lg font-semibold'>Sponsored</h2>
      </div>

      {sponsors.map((sponsor) => (
        <Sponsor
          key={sponsor.src}
          src={sponsor.src}
          title={sponsor.title}
          link={sponsor.link}
        />
      ))}

      <hr className='border-t border-gray-300 my-3 ml-3' />

      <div className='flex justify-between items-center text-gray-500 mb-2 ml-3'>
        <h2 className='text-lg font-semibold'>Contacts</h2>
        <div className='flex space-x-1'>
          <div className='flex items-center justify-center p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <svg
              viewBox='0 0 16 16'
              className='h-4 mx-auto text-center fill-gray-500'
            >
              <path
                d='M9.25 8.5H7v2.25a.75.75 0 0 1-1.5 0V8.5H3.25a.75.75 0 0 1 0-1.5H5.5V4.75a.75.75 0 0 1 1.5 0V7h2.25a.75.75 0 0 1 0 1.5m6.38-4.435a.62.62 0 0 0-.64.047L12.5 5.746V4.352A1.854 1.854 0 0 0 10.648 2.5l-8.796.002A1.854 1.854 0 0 0 .001 4.354v6.793c0 1.021.83 1.852 1.852 1.852L3 12.997h7.648a1.854 1.854 0 0 0 1.852-1.851V9.754l2.457 1.61a.641.641 0 0 0 .673.071.663.663 0 0 0 .37-.601V4.667c0-.26-.142-.49-.37-.602'
                fillRule='evenodd'
              />
            </svg>
          </div>
          <div className='flex items-center justify-center p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <svg
              viewBox='0 0 16 16'
              className='h-4 mx-auto text-center fill-gray-500'
            >
              <g fillRule='nonzero'>
                <path d='M10.743 2.257a6 6 0 1 1-8.485 8.486 6 6 0 0 1 8.485-8.486zm-1.06 1.06a4.5 4.5 0 1 0-6.365 6.364 4.5 4.5 0 0 0 6.364-6.363z' />
                <path d='M10.39 8.75a2.94 2.94 0 0 0-.199.432c-.155.417-.23.849-.172 1.284.055.415.232.794.54 1.103a.75.75 0 0 0 1.112-1.004l-.051-.057a.39.39 0 0 1-.114-.24c-.021-.155.014-.356.09-.563.031-.081.06-.145.08-.182l.012-.022a.75.75 0 1 0-1.299-.752z' />
                <path d='M9.557 11.659c.038-.018.09-.04.15-.064.207-.077.408-.112.562-.092.08.01.143.034.198.077l.041.036a.75.75 0 0 0 1.06-1.06 1.881 1.881 0 0 0-1.103-.54c-.435-.058-.867.018-1.284.175-.189.07-.336.143-.433.2a.75.75 0 0 0 .624 1.356l.066-.027.12-.061z' />
                <path d='m13.463 15.142-.04-.044-3.574-4.192c-.599-.703.355-1.656 1.058-1.057l4.191 3.574.044.04c.058.059.122.137.182.24.249.425.249.96-.154 1.41l-.057.057c-.45.403-.986.403-1.411.154a1.182 1.182 0 0 1-.24-.182zm.617-.616.444-.444a.31.31 0 0 0-.063-.052c-.093-.055-.263-.055-.35.024l.208.232.207-.206.006.007-.22.257-.026-.024.033-.034.025.027-.257.22-.007-.007zm-.027-.415c-.078.088-.078.257-.023.35a.31.31 0 0 0 .051.063l.205-.204-.233-.209z' />
              </g>
            </svg>
          </div>
          <div className='flex items-center justify-center p-2 hover:bg-gray-200 rounded-full cursor-pointer'>
            <svg
              viewBox='0 0 20 20'
              className='h-4 mx-auto text-center fill-gray-500'
            >
              <path
                d='M12 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0m6 0a2 2 0 1 1-4 0 2 2 0 0 1 4 0M6 10a2 2 0 1 1-4 0 2 2 0 0 1 4 0'
                fillRule='evenodd'
              />
            </svg>
          </div>
        </div>
      </div>

      {contacts.map((contact) => (
        <Contact key={contact.src} src={contact.src} name={contact.name} />
      ))}
    </div>
  );
}

export default RightSidebar;

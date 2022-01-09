import { ChevronRightIcon } from '@heroicons/react/outline';
import Friend from './Friend';

const friends = [
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

function CreateRoom() {
  return (
    <div className='flex relative mt-4 space-x-[0.9rem] bg-white p-4 py-3 rounded-lg shadow-md items-center overflow-x-hidden'>
      <div className='flex shrink-0 rounded-full p-[0.4rem] px-3 border-2 border-blue-100 space-x-2 hover:bg-gray-100 cursor-pointer'>
        <div className='flex p-0'>
          <i
            className='cursor-pointer'
            style={{
              backgroundImage:
                'url("https://static.xx.fbcdn.net/rsrc.php/v3/ym/r/5zaboDASSye.png")',
              backgroundPosition: '0px -219px',
              backgroundSize: 'auto',
              width: '24px',
              height: '24px',
              backgroundRepeat: 'no-repeat',
              display: 'inline-block'
            }}
          ></i>
        </div>
        <p className='font-semibold text-blue-500'>Create room</p>
      </div>
      {friends.map((friend) => (
        <Friend key={friend.src} src={friend.src} name={friend.name} />
      ))}
      <div className='flex items-center absolute right-2 p-[0.8rem] rounded-full border shadow-md cursor-pointer bg-white hover:bg-gray-100'>
        <ChevronRightIcon className='h-5' />
      </div>
    </div>
  );
}

export default CreateRoom;

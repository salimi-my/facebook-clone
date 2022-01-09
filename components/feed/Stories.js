import StoryCard from './StoryCard';
import useWindowSize from '../../hooks/use-window-size';
import { useSession } from 'next-auth/react';
import { ArrowRightIcon } from '@heroicons/react/outline';

const stories = [
  {
    id: 's1',
    name: 'Elon Musk',
    profile: 'https://links.salimi.my/elonmuskprofile',
    story: 'https://links.salimi.my/elonmuskstory'
  },
  {
    id: 's2',
    name: 'Jack Ma',
    profile: 'https://links.salimi.my/jackmaprofile',
    story: 'https://links.salimi.my/jackmastory'
  },
  {
    id: 's4',
    name: 'Bill Gates',
    profile: 'https://links.salimi.my/billgatesprofile',
    story: 'https://links.salimi.my/billgatesstory'
  },
  {
    id: 's3',
    name: 'Mark Zuckerberg',
    profile: 'https://links.salimi.my/markzuckerbergprofile',
    story: 'https://links.salimi.my/markzuckerbergstory'
  }
];

function Stories() {
  const [width] = useWindowSize();
  const { data: session } = useSession();
  return (
    <div className='flex relative justify-center space-x-3 mx-auto items-center'>
      <StoryCard
        user={true}
        key={session.user.email}
        name={session.user.name}
        profile={session.user.image}
        story={session.user.image}
      />
      {width > 767 &&
        stories
          .slice(0, 4)
          .map((story) => (
            <StoryCard
              user={false}
              key={story.id}
              name={story.name}
              profile={story.profile}
              story={story.story}
            />
          ))}
      {width < 768 &&
        stories
          .slice(0, 3)
          .map((story) => (
            <StoryCard
              key={story.id}
              name={story.name}
              profile={story.profile}
              story={story.story}
            />
          ))}
      <div className='absolute -right-5 bg-white rounded-full p-[0.6rem] border shadow-md text-gray-700 hover:bg-gray-200 cursor-pointer'>
        <ArrowRightIcon className='h-5' />
      </div>
    </div>
  );
}

export default Stories;

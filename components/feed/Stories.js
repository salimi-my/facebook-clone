import StoryCard from './StoryCard';
import useWindowSize from '../../hooks/use-window-size';

const stories = [
  {
    name: 'Sonny Sangha',
    src: 'https://links.papareact.com/zof',
    profile: 'https://links.papareact.com/l4v'
  },
  {
    name: 'Elon Musk',
    src: 'https://links.papareact.com/4zn',
    profile: 'https://links.papareact.com/kxk'
  },
  {
    name: 'Jeff Bezoz',
    src: 'https://links.papareact.com/k2j',
    profile: 'https://links.papareact.com/f0p'
  },
  {
    name: 'Mark Zuckerberg',
    src: 'https://links.papareact.com/xql',
    profile: 'https://links.papareact.com/snf'
  },
  {
    name: 'Bill Gates',
    src: 'https://links.papareact.com/4u4',
    profile: 'https://links.papareact.com/zvy'
  }
];

function Stories() {
  const [width] = useWindowSize();
  return (
    <div className='flex justify-center space-x-3 mx-auto'>
      {width > 767 &&
        stories.map((story) => (
          <StoryCard
            key={story.src}
            name={story.name}
            src={story.src}
            profile={story.profile}
          />
        ))}
      {width < 768 &&
        stories
          .slice(0, 4)
          .map((story) => (
            <StoryCard
              key={story.src}
              name={story.name}
              src={story.src}
              profile={story.profile}
            />
          ))}
    </div>
  );
}

export default Stories;

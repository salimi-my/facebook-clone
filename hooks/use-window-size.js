import { useEffect, useState } from 'react';

function useWindowSize() {
  if (typeof window !== 'undefined') {
    const [size, setSize] = useState([window.innerWidth, window.innerHeight]);
    useEffect(() => {
      const handleResize = () => {
        setSize([window.innerWidth, window.innerHeight]);
      };
      window.addEventListener('resize', handleResize);
      return () => {
        window.removeEventListener('resize', handleResize);
      };
    }, []);
    return size;
  } else {
    return [1440, 990];
  }
}

export default useWindowSize;

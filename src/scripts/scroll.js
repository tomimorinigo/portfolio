import { useEffect, useState } from 'react';

export const useScroll = () => {
  const [scrolling, setScrolling] = useState(false);
  const [scrollTop, setScrollTop] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentPosition = window.scrollY || document.documentElement.scrollTop;
      setScrolling(currentPosition > scrollTop);
      setScrollTop(currentPosition);
    };

    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [scrollTop]);

  return { scrolling, scrollTop };
};

const scrollToRef = (ref) => {
  const element = ref.current;

  if (element) {
    const rect = element.getBoundingClientRect();
    const offset = window.scrollY || document.documentElement.scrollTop;
    const centerOffset = window.innerHeight / 2 - rect.height / 2;

    window.scrollTo({
      top: rect.top + offset - centerOffset,
      behavior: 'smooth',
    });
  }
};

export const handleClickScroll = (ref) => (e) => {
  e.preventDefault();
  scrollToRef(ref);
};

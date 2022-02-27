import React, { useContext, useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import { ScrollContext } from './Layout';

const Navbar = () => {
  const imgRef = useRef();

  useIsomorphicLayoutEffect(() => {
    const anim = gsap
      .timeline({
        scrollTrigger: { scroller: '#mainscroll', scrub: 1 },
      })
      .to(imgRef.current, { height: '6rem' });

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 bg-stone-200 backdrop-blur-md bg-opacity-20  w-full flex justify-center'>
      <div className='container'>
        <div className='w-44 h-44 relative' ref={imgRef}>
          {/* eslint-disable-next-line */}
          <img
            className='h-full'
            src='/micelio_logo.png'
            alt='el logo del micelio abolicionista'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

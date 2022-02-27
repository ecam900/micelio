import React, { createContext, useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import useIsomorphicLayoutEffect from '../hooks/useIsomorphicLayoutEffect';
import Navbar from './Navbar';

export const ScrollContext = createContext();

const Layout = ({ children }) => {
  const rootEl = useRef();
  const [progress, setProgress] = useState();

  useIsomorphicLayoutEffect(() => {
    ScrollTrigger.create({
      scroller: rootEl.current,
      onUpdate: (self) => {
        setProgress(self.progress);
      },
    });
  }, []);

  return (
    <div
      ref={rootEl}
      id='mainscroll'
      className='fixed inset-0 h-screen w-screen flex justify-center overflow-y-scroll overflow-x-hidden'
    >
      <ScrollContext.Provider value={progress}>
        <Navbar />
      </ScrollContext.Provider>
      {children}
    </div>
  );
};

export default Layout;

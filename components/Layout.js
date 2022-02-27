import React, { createContext, useRef } from 'react';
import Footer from './Footer';
import Navbar from './Navbar';

export const ScrollContext = createContext();

const Layout = ({ children }) => {
  const rootEl = useRef();

  return (
    <div
      ref={rootEl}
      id='mainscroll'
      className='relative inset-0 h-screen w-screen flex flex-col items-center overflow-y-scroll overflow-x-hidden bg-[#8f8225] bg-opacity-20'
    >
      <Navbar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;

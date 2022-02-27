import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';

const Navbar = () => {
  const imgRef = useRef();

  useEffect(() => {
    ScrollTrigger.matchMedia({
      // large
      '(min-width: 960px)': function () {
        const anim = gsap
          .timeline({
            scrollTrigger: {
              scroller: '#mainscroll',
              start: 'top top',
              trigger: '#scroll_top_sentry',
              end: '+=500',
              scrub: 1,
            },
          })
          .add(gsap.to(imgRef.current, { height: '8rem' }));
        return () => {
          anim.kill();
        };
      },
      // medium
      '(min-width: 600px) and (max-width: 959px)': function () {
        // The ScrollTriggers created inside these functions are segregated and get
        // reverted/killed when the media query doesn't match anymore.
        const anim = gsap
          .timeline({
            scrollTrigger: {
              scroller: '#mainscroll',
              trigger: '#scroll_top_sentry',
              start: 'top top',
              end: '+=500',
              scrub: 1,
            },
          })
          .add(gsap.to(imgRef.current, { height: '6rem' }));

        return () => {
          anim.kill();
        };
      },

      // small
      '(max-width: 599px)': function () {
        const anim = gsap
          .timeline({
            scrollTrigger: {
              scroller: '#mainscroll',
              trigger: '#scroll_top_sentry',
              start: 'top top',
              end: '+=500',
              scrub: 1,
            },
          })
          .add(gsap.to(imgRef.current, { height: '4rem' }));
        return () => {
          anim.kill();
        };
      },
    });

    return () => {
      ScrollTrigger.getAll().forEach((t) => t.kill());
    };
  }, []);

  return (
    <div className='fixed top-0 left-0 w-full flex justify-center'>
      <div className='container flex justify-end'>
        <div className='w-44 h-44 relative  flex justify-end' ref={imgRef}>
          {/* eslint-disable-next-line */}
          <img
            className='h-full rounded-bl-lg rounded-tl-lg lg:rounded-lg shadow-md'
            src='/micelio_logo.png'
            alt='el logo del micelio abolicionista'
          />
        </div>
      </div>
    </div>
  );
};

export default Navbar;

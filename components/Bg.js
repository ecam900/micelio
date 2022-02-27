import React, { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

const Bg = () => {
  const el = useRef();

  useEffect(() => {
    const anim = gsap
      .timeline({ scrollTrigger: { scroller: '#mainscroll', scrub: 2 } })
      .fromTo(
        el.current,
        { y: 0, x: '50%', scale: 3 },
        { x: 0, y: '50%', scale: 5, rotate: 40 }
      );

    return () => {
      anim.kill();
    };
  }, []);

  return (
    <div
      ref={el}
      className='fixed inset-0 h-screen w-screen scale-[300%] -z-20 opacity-10'
    >
      <svg width='100%' height='100%' viewBox='0 0 1511 1415' fill='none'>
        <path
          d='M16 786.114C458.638 137.885 735.383 1089 1279.35 142.701M289.269 1399C1168.3 749.822 -62.5367 -74.0313 1495 23.9899M82.9493 631.45C921.103 -13.3192 1318.61 1539.76 1126.46 118.959'
          stroke='#945475'
          strokeWidth='60'
          strokeLinecap='round'
        />
      </svg>
    </div>
  );
};

export default Bg;

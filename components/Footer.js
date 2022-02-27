import React from 'react';
import { BsInstagram, BsMailbox } from 'react-icons/bs';

const Footer = () => {
  return (
    <div className='bg-primary w-full min-h-[33vh] mt-32 flex justify-center pb-8'>
      <LinkIcon
        icon={<BsInstagram className='text-inherit h-8 w-8' />}
        text={'instagram'}
        link='https://www.instagram.com/micelioabolicionista'
      />

      <LinkIcon
        icon={<BsMailbox className='text-inherit h-8 w-8' />}
        text={'email'}
        link='mailto:micelioabolicionista@gmail.com'
        emailLink
      />
    </div>
  );
};

const LinkIcon = ({ icon, text, link, emailLink = false }) => {
  const handleClick = () => {
    const type = emailLink ? '_self' : '_blank';
    window.open(link, type);
  };

  return (
    <div
      className='mt-auto flex flex-col items-center text-slate-200 hover:text-orange-400 transition-all hover:cursor-pointer my-2 mx-3'
      onClick={handleClick}
    >
      {icon}
      <p className=' text-sm pt-1 text-inherit'>{text}</p>
    </div>
  );
};

export default Footer;

import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BsPersonBadge, BsLink45Deg } from 'react-icons/bs';
import { HiOutlineArrowsExpand } from 'react-icons/hi';
import { GiMagnifyingGlass } from 'react-icons/gi';
import { BsArrowsCollapse } from 'react-icons/bs';

const Post = ({ data = placeholderData }) => {
  return (
    <div className='flex flex-col shadow-md my-8 bg-stone-50 backdrop-blur-md bg-opacity-50 rounded-lg p-8 md:text-lg'>
      <p className='text-slate-800 font-bold pb-2 text-2xl md:text-3xl'>{data.titulo}</p>

      <div className='flex flex-col lg:flex-row'>
        <Authors names={data.autores} />
        <Links links={data.links} />
        <Synopsis text={data.sinopsis} />
      </div>
      <Tags tags={data.tags} />
    </div>
  );
};

const Links = ({ links }) => {
  const handleClickLink = (link) => {
    window.open(link);
  };
  return (
    <div className='p-2'>
      <div className='flex items-center text-[#3b8d8f] md:text-lg'>
        <BsLink45Deg className='m-2' />

        <p className='text font-bold'>Enlaces</p>
      </div>

      <div className='m-2'>
        {links &&
          links.map((link, i) => (
            <div
              key={`link_${i}`}
              className='flex items-center text-slate-500 m-2 underline underline-offset-4 decoration-dotted decoration-[#945475] hover:text-[#3B8D8F] hover:cursor-pointer'
              onClick={() => handleClickLink(link.link)}
            >
              <p key={i} className='text-slate-800 hover:text-inherit transition-all'>
                {link.nombre}
              </p>
            </div>
          ))}
      </div>
    </div>
  );
};

const Authors = ({ names }) => {
  return (
    <div className='max-w-xs m-2 md:text-lg'>
      <div className='flex items-center text-[#3b8d8f] lg:text-lg'>
        <BsPersonBadge className='m-2' />
        <p className='font-bold'>Autores</p>
      </div>

      <div className='m-2'>
        {names &&
          names.map((name, i) => (
            <p key={i} className='text-slate-800'>
              {name}
            </p>
          ))}
      </div>
    </div>
  );
};

const Synopsis = ({ text }) => {
  const el = useRef();
  const [open, setOpen] = useState(false);

  return (
    <div className='m-2 md:text-lg w-full'>
      <div className='flex items-center text-[#3b8d8f] lg:text-lg'>
        <GiMagnifyingGlass className='m-2' />
        <p className='font-bold'>Sinopsis</p>
      </div>

      <div
        className='p-2 m-2  rounded text-[#945475] text flex items-center hover:cursor-pointer'
        onClick={() => setOpen(!open)}
      >
        {open ? (
          <>
            <BsArrowsCollapse className='mr-2' />
            <p>Cerrar</p>
          </>
        ) : (
          <>
            <HiOutlineArrowsExpand className='mr-2' />
            <p>Abrir Sinopsis</p>
          </>
        )}
      </div>

      {open && (
        <div ref={el} className='m-2'>
          {text}
        </div>
      )}
    </div>
  );
};

const Tags = ({ tags }) => {
  return (
    <div className='m-2 flex flex-wrap'>
      {tags &&
        tags.map((tag, i) => (
          <div
            key={`tag_${i}`}
            className='bg-stone-200 opacity-100 rounded-full px-3 py-2 mx-1 my-2'
          >
            <p className='text-sm text-stone-800 whitespace-nowrap'>{tag}</p>
          </div>
        ))}
    </div>
  );
};

export default Post;

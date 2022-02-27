import React, { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { BsPersonBadge, BsLink45Deg } from 'react-icons/bs';
import { GiMagnifyingGlass } from 'react-icons/gi';

const Post = ({ data = placeholderData }) => {
  return (
    <div className='flex flex-col shadow-md rounded-lg p-8 md:text-lg'>
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
      <div className='flex items-center text-teal-800 md:text-lg'>
        <BsLink45Deg className='m-2' />

        <p className='text font-bold'>Enlaces</p>
      </div>

      <div className='m-2'>
        {links &&
          links.map((link, i) => (
            <div
              key={`link_${i}`}
              className='flex items-center text-slate-500 m-2 underline underline-offset-4 decoration-dotted decoration-[#dcca4e] hover:text-[#3B8D8F] hover:cursor-pointer'
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
      <div className='flex items-center text-teal-800 lg:text-lg'>
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
      <div className='flex items-center text-teal-800 lg:text-lg'>
        <GiMagnifyingGlass className='m-2' />
        <p className='font-bold'>Sinopsis</p>
      </div>

      <button
        className='p-2 m-2 bg-teal-700 rounded text-white font-bold'
        onClick={() => setOpen(!open)}
      >
        <p>Abrir Sinopsis</p>
      </button>

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
    <div className='m-2 flex'>
      {tags &&
        tags.map((tag, i) => (
          <div key={`tag_${i}`} className='bg-[#dcca4e] rounded-full px-3 py-2 mx-1 my-2'>
            <p className='text-sm text-black'>{tag}</p>
          </div>
        ))}
    </div>
  );
};

export default Post;

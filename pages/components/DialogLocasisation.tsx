import React from 'react';
import Image from 'next/image';
import { Dialog } from '@headlessui/react';
import { useState } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

function DialogLoc() {
  const [showModal, setShowModal] = useState(false);

  const handleImageClick = () => {
    setShowModal(true);
  };

  const closeModal = () => {
    setShowModal(false);
  };

  return (
    <div className='flex'>
       <div className="Image mt-10 items-center md:ml-20 ml-[420px] cursor-pointer" onClick={handleImageClick}>
        <Image src="/icon/icon.png" alt="" width={100} height={100} />
      </div> <h1 className=" Text text-6xl mt-44 -ml-52 md:-ml-1 md:mt-16 sm:mt-44 sm:-ml-24 font-semibold tracking-wide lg:text-5xl md:text-3xl  sm:text-xl xs:text-xl">
            <span className="block bg-gradient-to-r  from-violet-300 to-pink-500 bg-clip-text text-transparent">
              Our Localisation
            </span>
          </h1>
      <Dialog open={showModal} onClose={closeModal}>
        <Dialog.Panel>
          <Dialog.Description>
            <div className="fixed top-20 left-0 flex items-center justify-center w-full h-full bg-violet-800 bg-opacity-90" onClick={closeModal}>
              <div className="box-contact-us sm:mt-44  sm:ml-24   bg-orange rounded-md text-white font-medium text-center animate-float">
              <div className="relative z-30 space-x-3 w-[720px] h-[720px] sm:w-[230px] sm:h-[250px] sm:mt-16 space-y-3 md:space-y-1 sm:space-y-0">
  <span className="absolute inset-0  w-full h-full transition duration-300 transform -translate-x-1 -translate-y-1 bg-violet-300 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0"></span>
  <span className="absolute inset-0 w-full h-full transition duration-300 transform translate-x-1 translate-y-1 bg-pink-600 ease opacity-80 group-hover:translate-x-0 group-hover:translate-y-0 mix-blend-screen"></span>
  <div className="relative sm:w-[200px] sm:mt-40 sm:ml-44 sm:h-[200px]">
    <iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2639.6331161748135!2d7.7313225!3d48.578575300000004!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4796c9caefa1655b%3A0xd154e43d456e172c!2s30%20Bd%20de%20Lyon%2C%2067000%20Strasbourg!5e0!3m2!1sen!2sfr!4v1688135604965!5m2!1sen!2sfr"
      width="100%"
      height="100%"
      loading="lazy"
      allowFullScreen
      title="Google Maps"
      className="border-2 border-violet-500 h-[720px] sm:h-full rounded-md"
    ></iframe>
  </div>
</div></div></div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </div>
  );
}

export default DialogLoc;

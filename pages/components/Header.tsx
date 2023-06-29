import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import { Dialog } from '@headlessui/react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

function Header() {
  const [isOpen, setIsOpen] = useState(false);
 const [isOpenMenu, setOpenMenu] = useState(false);
  const handleClick = () => {
    setIsOpen(!isOpen);
  };



  return (
    <header className="w-full dark:text-colors-light lg:px-16 md:px-12 sm:p-8 px-32 z-10 py-8 font-medium bg-[#0E1129] flex items-center justify-between relative">

   <button className=" sm:flex flex-col items-center justify-center mt-20 hidden " onClick={handleClick}>
			<span className="bg-slate-300 block h-0.5 w-12 rounded-sm "></span>
			<span aria-hidden="true" className="bg-slate-300 block h-0.5 w-12 rounded-sm my-2.5"></span>
			<span aria-hidden="true" className="bg-slate-300 block h-0.5 w-12 rounded-sm "></span>
		  </button>



      <div className="flex-1 items-center justify-center sm:hidden space-x-8 md:flex">
        <Link href="/website" legacyBehavior>
          <a className="headerLink font-agdasima">Home</a>
        </Link>
        <Link href="/game" legacyBehavior>
          <a className="headerLink font-agdasima">Game</a>
        </Link>
        <Link href="/events" legacyBehavior>
          <a className="headerLink font-agdasima">Events</a>
        </Link>
        <Link href="/contactus" legacyBehavior>
          <a className="headerLink font-agdasima">Contact Us</a>
        </Link>
        <Link href="/sell" legacyBehavior>
          <a className="headerLink font-agdasima">Sell</a>
        </Link>
        <Link href="/gallery" legacyBehavior>
          <a className="headerLink font-agdasima">Gallery</a>
        </Link>
      </div>

      <Dialog open={isOpen} onClose={handleClick}>
        <Dialog.Overlay className="fixed sm:w-[700px] sm:h-[380px] sm:ml-12 sm:mt-[440px] inset-0 bg-violet-800 opacity-60 text-white" />

        <Dialog.Panel className="fixed sm:w-[700px]  text-3xl  font-bold sm:h-[380px] sm:ml-12 sm:mt-[440px] inset-0  text-white">
          <Dialog.Description className="">
            <div className="p-8 px-32 z-10  -ml-8 mt-36 flex items-center  justify-between space-x-6">
              <Link href="/website">
                <div className="cursor-pointer font-agdasima">Home</div>
              </Link>
              <Link href="/game">
                <div className="cursor-pointer font-agdasima">Game</div>
              </Link>
              <Link href="/events">
                <div className="cursor-pointer font-agdasima">Events</div>
              </Link>
              <Link href="contactus">
                <div className="cursor-pointer font-agdasima">Contact</div>
              </Link>
            </div>
          </Dialog.Description>
        </Dialog.Panel>
      </Dialog>
    </header>
  );
}

export default Header;

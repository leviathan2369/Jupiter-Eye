import Spline from '@splinetool/react-spline'
import React from 'react'

function Events() {
  return (
	  <section className="sticky top-0 mx-auto flex flex-col h-screen max-w-[1350px] gap-60 px-8">

<div className="flex bg-[#0E1129]">
	  <div className="w-1/2">
	  <h1 className=" text-5xl mt-44 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block sm:hidden font-agdasima bg-gradient-to-r  from-violet-300 to-pink-500 bg-clip-text text-transparent">
          Our Events
          </span></h1><span className="flex mt-44 font-agdasima bg-gradient-to-r  text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
     Lorumep sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </span>
	  </div>
		<div className="">
		<Spline scene="https://prod.spline.design/gVpdQi1Z0qQCNEIG/scene.splinecode" />
		<span className="sm:flex font-agdasima bg-gradient-to-r hidden text-6xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
        Our Events
				  </span>
				   <span className="sm:flex mt-10 font-agdasima bg-gradient-to-r hidden text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
     Lorumep sum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
          </span>
		</div>
	</div> </section>
  )
}

export default Events
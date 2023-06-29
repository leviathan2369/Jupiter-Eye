import Spline from '@splinetool/react-spline'
import React from 'react'

function Gallery() {
  return (
	<section className="sticky top-0 mx-auto flex flex-col h-screen max-w-[1350px] gap-60 px-8">
<div className="flex bg-[#0E1129]">
	 <div className="w-1/2">
	  <h1 className=" text-5xl mt-44 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block sm:hidden font-agdasima bg-gradient-to-r  from-violet-300 to-pink-500 bg-clip-text text-transparent">
          Our Gallery
          </span></h1><span className="flex mt-44 font-agdasima bg-gradient-to-r  text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
Selling physical and digital art  3d photographie and much more features        </span>
	  </div>
	<div className="w-1/2">
    <Spline scene="https://prod.spline.design/0ATxJd3NyFWrPqe4/scene.splinecode" />
	</div>
  </div></section>
  )
}

export default Gallery
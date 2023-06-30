import Spline from '@splinetool/react-spline'
import React from 'react'

function Gallery() {
  return (
    <section className="relative top-0 mx-auto flex flex-col h-screen max-w-[1350px] gap-60 px-8">
      <div className="flex bg-[#0E1129]">
        <div className="w-1/2">
        <h1 className=" text-5xl mt-44 sm:mt-14 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block bg-gradient-to-r sm:text-3xl lg:text-5xl  from-violet-300 to-pink-500 bg-clip-text text-transparent">              Our Gallery
            </span>
          </h1>
          <span className="flex sm:hidden mt-20  bg-gradient-to-r lg:text-2xl text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">            We offer a wide range of features on our platform, including the
            sale of both physical and digital art, as well as 3D photography and
            many other exciting offerings.
          </span>
        </div>
        <div className=" sm:hidden xs:hidden  lg:hidden md:hidden w-1/2">
          <Spline scene="https://prod.spline.design/0ATxJd3NyFWrPqe4/scene.splinecode" />
        </div>
        <span className="sm:flex  mt-44  bg-gradient-to-r hidden text-2xl from-violet-300 to-pink-500 bg-clip-text  text-transparent">        We offer a wide range of features on our platform, including the
            sale of both physical and digital art, as well as 3D photography and
            many other exciting offerings.{' '}
        </span>
      </div>
    </section>
  )
}

export default Gallery

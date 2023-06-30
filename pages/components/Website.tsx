import Spline from '@splinetool/react-spline'
import React from 'react'

function Website() {
  return (
    <section className="sticky top-0 mx-auto  flex flex-col h-screen max-w-[1350px] gap-60 px-8">
      <div className="flex bg-[#0E1129]">
        <div className="w-1/2">
          <h1 className=" text-5xl mt-44 sm:mt-20 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="block bg-gradient-to-r sm:text-3xl lg:text-5xl  from-violet-300 to-pink-500 bg-clip-text text-transparent">
              Our Website
            </span>
          </h1>
          <span className="flex sm:hidden mt-20 lg:text-2xl  bg-gradient-to-r  text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
            Our website is currently under development and will be launching
            soon.{' '}
          </span>
        </div>
        <div className="sm:hidden xs:hidden lg:hidden md:hidden">
          <Spline scene="https://prod.spline.design/pykJg6oNETQ3HLFI/scene.splinecode" />
        </div>
        <span className="sm:flex mt-56 bg-gradient-to-r hidden text-2xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
          Our website is currently under development and will be launching soon.{' '}
        </span>{' '}
      </div>
    </section>
  )
}

export default Website

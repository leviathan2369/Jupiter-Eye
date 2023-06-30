import Spline from '@splinetool/react-spline'
import React from 'react'

function Shop() {
  return (
    <section className="relative top-0 mx-auto flex flex-col h-screen max-w-[1350px] gap-60 px-8">
      <div className="flex bg-[#0E1129]">
        <div className="w-1/2 flex-col">
          <h1 className=" text-5xl mt-44 sm:mt-14 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
            <span className="block bg-gradient-to-r sm:text-3xl lg:text-5xl  from-violet-300 to-pink-500 bg-clip-text text-transparent">
              Our Shop
            </span>
          </h1>
          <span className="flex sm:hidden mt-20  bg-gradient-to-r lg:text-2xl text-4xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
            Will offer a diverse range of products, including featured paintings
            by renowned artists, our exclusive line of Jupiter Eye products for
            the game, and physical art. Additionally, our platform will serve as
            a marketplace, providing a space for both artists and individuals to
            showcase their talents and foster creativity.{' '}
          </span>
        </div>
        <div className=" flex-col sm:hidden items-center justify-center  lg:hidden md:hidden xs:hidden">
          <Spline scene="https://prod.spline.design/YH80Tp9Q6CqJk4-f/scene.splinecode" />
        </div>{' '}
        <span className="sm:flex  mt-44  bg-gradient-to-r hidden text-2xl from-violet-300 to-pink-500 bg-clip-text  text-transparent">
          Will offer a diverse range of products, including featured paintings
          by renowned artists, our exclusive line of Jupiter Eye products for
          the game, and physical art. Additionally, our platform will serve as a
          marketplace, providing a space for both artists and individuals to
          showcase their talents and foster creativity.{' '}
        </span>
      </div>
    </section>
  )
}

export default Shop

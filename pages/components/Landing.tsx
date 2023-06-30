import Spline from '@splinetool/react-spline'
import Link from 'next/link';
import React from 'react'

function Landing() {
  return (
    <section className="bg-[#0E1129] flex-col h-screen ">
		  <div className="flex flex-col ">
		  <h1 className="space-y-3  text-5xl text-center font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="  block bg-gradient-to-r mt-44  from-violet-300 to-pink-500 bg-clip-text text-transparent">
           Click on Jupiter
          </span>
        </h1>

        <Link href='/website'>

          <Spline scene="https://prod.spline.design/PbzN5g3ChdKjoTGv/scene.splinecode" />
	  </Link>
      </div>
    </section>
  )
}

export default Landing;

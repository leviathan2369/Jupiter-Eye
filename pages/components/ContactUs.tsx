import Spline from '@splinetool/react-spline'
import Link from 'next/link'
import React from 'react'

function ContactUs() {
  return (	<section className="sticky top-0 mx-auto flex flex-col h-screen max-w-[1350px] gap-60 px-8">

<div className="flex bg-[#0E1129]">
	  <div className="w-1/2">
	  <h1 className=" text-5xl mt-44 font-semibold tracking-wide lg:text-6xl xl:text-7xl">
          <span className="block font-agdasima bg-gradient-to-r sm:hidden  from-violet-300 to-pink-500 bg-clip-text text-transparent">
       Check Our Instagram
          </span></h1>
	  </div>
		<div className=" flex-col items-center justify-center">
	  <Link href="https://instagram.com/jupitereyemag?igshid=MzRlODBiNWFlZA==">
	  <Spline scene="https://prod.spline.design/snysnpTF0e3EOa6B/scene.splinecode" />
	  </Link>  <span className="sm:flex font-agdasima bg-gradient-to-r hidden text-6xl from-violet-300 to-pink-500 bg-clip-text text-transparent">
       Check Our Instagram
          </span>
	    </div>
	</div> </section>
  )
}

export default ContactUs
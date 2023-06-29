import React from 'react'
import Header from './components/Header'
import Gallery from './components/Gallery'

function gallery() {
  return (
	<div className=''>     <Header />
    <main className="relative h-[200vh] bg-[#0E1129]">
 <Gallery />
    </main> </div>
  )
}

export default gallery
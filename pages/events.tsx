import React from 'react'
import Header from './components/Header'
import Events from './components/Events'

function events() {
  return (
	<div className=''>     <Header />
    <main className="relative h-[200vh] bg-[#0E1129]">
 <Events />
    </main> </div>
  )
}

export default events
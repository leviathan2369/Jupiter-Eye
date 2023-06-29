import React from 'react'
import Header from './components/Header'
import Game from './components/Game'

function game() {
  return (
	<div className=''>     <Header />
    <main className="relative h-[200vh] bg-[#0E1129]">
 <Game />
    </main> </div>
  )
}

export default game
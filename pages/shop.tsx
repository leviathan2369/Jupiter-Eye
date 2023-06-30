import React from 'react'
import Header from './components/Header'
import Shop from './components/Shop'

const WebsitePage: React.FC = () => {
  return (
    <div className=" bg-[#0E1129]">
      <Header />
      <main className="relative h-[220vh] bg-[#0E1129]">
        <Shop />
      </main>
     
    </div>
  )
}

export default WebsitePage

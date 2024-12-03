import React from 'react'
import Navbar from '../Navbar/Navbar'

function Header() {
  return (
    <header className='flex justify-evenly font-mono py-4 bg-[#FAFAFD]'>
      <div className="logo">
        <h3 className='text-2xl text-teal-400 font-extrabold'>i-Store</h3>
      </div>
      <Navbar/>
    </header>
  )
}

export default Header

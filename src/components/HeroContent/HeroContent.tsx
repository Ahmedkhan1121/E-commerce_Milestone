import React from 'react'
import Button from '../Button/Button'

function HeroContent() {
  return (
    <div className='font-mono'>
      <h5 className='text-teal-300 font-bold uppercase'>Immerse in Nature's Sounds with </h5>
      <h1 className='text-teal-300 text-5xl uppercase font-extrabold w-10 py-3'>SonicJive Earbuds.</h1>
      <p className='w-[400px] text-[#909090] pb-5'>At SonicJive, we believe that technology and nature can coexist harmoniously. Our mission is to provide you with earbuds that offer exceptional sound quality while respecting our planet's delicate ecosystem. </p>
      <Button/>
    </div>
  )
}

export default HeroContent

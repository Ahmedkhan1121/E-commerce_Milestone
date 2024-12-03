import Image from 'next/image'
import React from 'react'

function HeroImg() {
  return (
    <div>
      <Image
      className=''
      src='/images/product_se__frx4hb13romm_large.png'
      alt='hero-img'
      height={300}
      width={300}
      />
    </div>
  )
}

export default HeroImg

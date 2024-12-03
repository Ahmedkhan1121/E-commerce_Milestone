import React from 'react'
import HeroContent from '../HeroContent/HeroContent'
import HeroImg from '../HeroImg/HeroImg'

function Hero() {
  return (
    <section className='flex justify-evenly py-24'>
        <HeroContent/>
        <HeroImg/>
    </section>
  )
}

export default Hero

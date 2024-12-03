import { heroRating } from '@/utils/helper'
import React from 'react'

function HeroRating() {
  return (
    <div className=' font-mono flex justify-evenly  items-center py-4'>
      {heroRating.map((e,i) => {
        return (
            <div key={i} className='flex gap-5 items-center p-7 shadow w-56 bg-[#FAFAFD]' >
                <h3 className='text-teal-400 text-4xl font-extrabold'>{e.rate}</h3>
                <p className='text-[#909090] font-bold w-10'>{e.name}</p>
            </div>
        );
      })}
    </div>
  )
}

export default HeroRating

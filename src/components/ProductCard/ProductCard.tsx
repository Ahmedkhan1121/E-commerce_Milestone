import { Electronics } from '@/utils/helper'
import Image from 'next/image'
import React from 'react'

function ProductCard({prodCard}:{prodCard:Electronics}) {
  return (
    <div key={prodCard.id} className='text-center py-5 rounded-md font-mono flex flex-col items-center bg-[#FAFAFD] w-[350px]'>
      <Image
      src={`/images/${prodCard.img}`}
      alt=''
      height={100}
      width={300}
      />
      <div>
        <h3 className='font-extrabold text-xl'>{prodCard.name}</h3>
        <p className='font-bold text-[#cdcdcd]'>{prodCard.price}</p>
      </div>
    </div>
  )
}

export default ProductCard;

import { electronicsList } from '@/utils/helper'
import React from 'react'
import ProductCard from '../ProductCard/ProductCard'

function ProductList() {
  return (
    <section className='py-28 flex justify-center items-center gap-11 flex-wrap'>
      {electronicsList.map((e) => {
        return(
            <ProductCard prodCard={e}/>
        )
      })}
    </section>
  )
}

export default ProductList

import { navList } from '@/utils/helper'
import Link from 'next/link'
import React from 'react'

function Navlist() {
  return (
    <ul className='capitalize flex gap-5'>
      {navList.map((e,i) => {
        return (
            <li key={i}> <Link href={`${e.link}`}>{e.name}</Link> </li>
        )
      })}
    </ul>
  )
}

export default Navlist

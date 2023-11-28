import Image from 'next/image'
import React from 'react'

const Brand = () => {
  return (
    <>
      <div className='hidden flex flex-row  h-160 pt-20  pb-20 lg:flex '>
        <div>
          <Image
          src='/triangle.png'
          alt='triangle'
          height={170}
          width={65}
          />
        </div>
        
        <div className=' hide-scrollbar w-[100%] place-content-evenly grid grid-flow-col justify-around
        snap-x snap-mandatory '>
          <Image
          src='/trip.png'
          alt='trip'
          width={211}
          height={32}
          className='snap-always snap-center'
          />
          <Image
          src='/exp.png'
          alt='exp'
          height={113}
          width={132}
          />
          <Image
          src='/book.png'
          alt='book'
          height={118}
          width={132}
          />
          <Image
          src='/air.png'
          alt='air'
          height={102}
          width={132}
          />
          <Image
          src='/rbit.png'
          alt='rbit'
          height={173}
          width={132}
          />
        </div>
      </div>
    </>
  )
}

export default Brand
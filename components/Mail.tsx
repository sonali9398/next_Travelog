import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Mail = () => {
  return (
    <>
      <section className=' w-full  pb-[100px] ml-20'>
        <Image
          src='/left.png'
          alt='left'
          height={176}
          width={183}
          className='flexStart left-[20%] animate-bounce'
        />
        <div className='z-20 flex-1 flexCenter flex-col flex-wrap leading-loose'>
          <h3 className='text-base font-bold text-[#F85E9F] uppercase grow'>subscribe to our newsletter</h3>
          <h1 className='text-6xl fond-extrabold text-[#191825] '>Prepare yourself & let’s explore the<br/> beauty of the world</h1>
        </div>
        <div className='flex flex-wrap justify-around xl:flex-row leading-loose'>
            <Button
              type='button'
              title="Your Email"
              icon='/mail.png'
              variant='btn_white_text'            
          /> 
          <Button
              type="button"
              title="Sunscribe"
              variant="btn_purple"/>
        </div>

      </section>
      <div className='flexEnd'>
        <Image
          src='/right.png'
          alt='right'
          height={125}
          width={125}
          className='flexEnd animate-bounce'
        />
      </div>
    </>
    
  )
}

export default Mail
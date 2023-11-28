import Image from 'next/image'
import React from 'react'
import Button from './Button'

const Hero = () => {
  return (
    <section className='max-container padding-container
    flex flex-col gap-20 pb-32 md:gap-28 lg:py-20 xl:flex-row   '>

      {/* left */}
      <div className='relative z-20 flex flex-col xl:w-1/2 '>
        <Image
          src='/explore.png'
          alt='camp'
          width={225}
          height={56}
          className='absolute left-[-5px] top-[-30px] w-10 lg:w-[50px]'
          />
        <div className=' bold-52 lg:bold-88 font-bold my-8'>
          <h1 className='text-[#000000]'>Travel</h1><span className='text-[#F85E9F]'>top destination </span>
          <h1 className='text-[#000000]'> of the world</h1>
        </div>
        
        
        <p className='text-[#191825]
        xl:max-w-[520px] font-inter font-normal text-lg'>We always make our customer happy by providing
        as many choices as possible </p>

        <div className='flex flex-col w-full gap-3 sm:flex-row my-10'>
          <Button
            type='button'
            title="Get Started"
            variant='btn_purple'
            />
          <Button
            type='button'
            title="Watch Demo"
            icon='/play.png'
            variant='btn_white_text'
            />  

        </div>

      </div>

      <div className='relative flex flex-1 items-start'>
        <div className='relative w-[338px] flex-col gap-8 '>
          <div className=''>
            <div className='flexBetween'>
              <Image 
                src='/layerWorld.png'
                alt='world'
                width={800}
                height={400}
                className='top-17 left-46'
                />
            </div>
            <div className='flexBetween'>  
                <Image
                src='/3imgs.png'
                alt='imgs'
                height={713}
                width={772}
                />
            </div>
            
          </div>
          <div className='relative  '>
            <div className='absolute  flex space-between content-start top-341'>
                
                  <Image
                  src='/share.png'
                  alt='share'
                  height={56}
                  width={56}
                  />
                  <Image
                  src='/topPlace.png'
                  alt='top'
                  height={56}
                  width={166}
                  />
              </div>
              <div className='absolute'>                
                  
              </div>
              <div className='absolute top-649
              left-901 p-16 gap-8'>
                
                  <Image
                  src='/contact.png'
                  alt='contact'
                  height={64}
                  width={64}
                  />
              </div>
              
          </div>

        </div>

      </div>

    </section>

    )
}

export default Hero
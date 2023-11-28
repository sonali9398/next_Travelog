import Image from 'next/image';
import React from 'react';


interface CampProps {
  title:string;
  subtitle:string;
}

const Campsite = ({ title, subtitle} : CampProps) =>{
  return(
    <div className={`shadow-xl  h-full w-[20%] min-w-[300px]
   lg:rounded-r-5xl 2xl:rounded-5xl`}>
      <div className='flex h-full flex-col flex-wrap whitespace-normal 
      p-6 lg:px-20 lg:py-10'>
        <div className='flexCenter flex-col flex-wrap gap-4'>
          <div className='rounded-full b-green-50 p-4'>
            <Image
              src='/destination.png'
              alt='map'
              width={64}
              height={64}/>
          </div>
          <div>
            <h1 className='font-bold'>{title}</h1>
            <h4 className='text-[#191825]'>{subtitle}</h4>
          </div>
        </div>
        

      </div>
    </div>
  )
}

const Services = () => {
  return (
    <section className='relative
     2xl:max-container  w-60% 
     flex  space-y-4  lg:mb-10 lg:py-20 xl:mb-20'>
      <div className=' hide-scrollbar flex h-[340px] w-50% space-x-20 items-start justify-start gap-8 overflow-x-auto lg:h-[400px] xl:h-[640px]'>
        {/* left */}
        <div className='flex flex-col leading-loose justify-center'>
          <h4 className='text-[#F85E9F] font-bold text-2xl uppercase text-normal'>Services</h4>
          <h1 className='text-[#191825] font-semibold text-6xl'>Our top value categories for you</h1>
        </div>
        
        {/* right */}
        <div className=' hide-scrollbar flex h-[340px] w-full items-start
        justify-start gap-8 ovrflow-x-auto lg:h-[400] xl:h-[443]'>
          <Campsite
            title='Best Tour Guide'
            subtitle="What looked like a small patch of purple grass above five feet"
          />
          <Campsite
            title='Easy Booking'
            subtitle="Square, was moving across the sand in their direction."
          />
          <Campsite
            title='Safe & Secure'
            subtitle="Square, was moving across the sand in their direction."
          />
          <Campsite
            title='Hasselfree Services'
            subtitle="Square, was moving across the sand in their direction."
          />
        </div>
      </div>
    </section>
    
  )
}

export default Services
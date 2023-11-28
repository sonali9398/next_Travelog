import { FEATURES } from '@/constants'
import Image from 'next/image'
import React from 'react'

const Package = () => {
  return (
    <section className='flex-col  flexCenter overflow-hidden bg-feature-bg bg-center bg-no-repeat py-24'>
      <div className='max-container padding-container relative w-full flex justify-end'>
        <div className='flex flex-1 lg:min-h-[900px]'>
          <Image
            src='/girl.png'
            alt='girl'
            height={789}
            width={697}
            className='absolute top-[13%] z-10 hidden md:-left-16 lg:flex  3xl:left-20;'
          />
          
        </div>
        <Image
            src='/discPrice.png'
            alt='disc'
            height={672}
            width={900}
            className="absolute left-[5px] bottom-[88px] w-10 lg:w-[500px]"
          />

        <div className='flex flex-col flex-wrap '>
          <h4 className='text-[#F85E9F] font-bold text-xl uppercase'>Travel Point</h4>
          <h1 className='text-[#191825] font-bold text-4xl'>We helping you find your dream location</h1>
          <p className='text-[#191825] font-normal text-sm'>Contrary to popular belief, Lorem Ipsum is not simply random text. It has roots in a piece of classical Latin literature from 45 BC.</p>
          <Image
            src='/yellow.png'
            alt='yel'
            height={112}
            width={112}
            className="absolute right-[-5px] top-[28px] w-10 lg:w-[110px]"
          />
          <ul className='mt-10 grid gap-8 md:grid-cols-2 lg:mt-20 lg:gap-15 motion-safe:animate-bounce'>
              {FEATURES.map((feature) =>(
                <FeatureItem 
                key={feature.title}  
                title={feature.title}
                description ={feature.description}/>
              ))}
          </ul>
        </div>

      </div>


    </section>
  )
}  
  type FeatureItem = {
    title: string;
    description :string;
  }
  const FeatureItem = ({title, description}: FeatureItem) =>{
    return(
      <li className='flex  flex-1 flex-col items-start'>
        <div className='rounded-full p-4 lg:p-7'>
          <div className='bold-20 lg:bold-32 mt-5 text-[#FF5722] text-3xl font-bold'>{title}</div>
          <p className='regular-16 mt-5 lg:mt-[30px] text-[#191825] text-normal text-sm'>{description}</p>
        </div>
      </li>
    )
  }


export default Package
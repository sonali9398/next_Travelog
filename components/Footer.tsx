import React from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { FOOTER_CONTACT_INFO, FOOTER_LINKS, SOCIALS } from '@/constants'
const Footer = () => {
  return (
    <footer className='flexCenter mb-24 w-100% '>
      <div className='padding-container max-container flex w-full flex-col gap-14'>
        <div className='flex flex-wrap items-start justify-center gap-[10%]
        md:flex-row '>
          <div>
            <Link href='/' className="mb-10">
              <Image
                src='/Frame 1.png'
                alt='brand'
                height={35}
                width={74}
              />
            </Link>
            <div className='flex flex-wrap gap-10'>
              <FooterColumn >
                <ul className='regular-18 flex gap-4 text-lg '>
                  <p className='medium-14 whitespace-nowrap text-lg
                    text-blue-70'>
                      Contrary to popular <br/>belief, Lorem Ipsum is <br/>not simply random text. <br/>It has roots<br/>
                      in a piece of classical <br/>Latin literature from 45 BC.
                  </p>
                  {SOCIALS.links.map((link) =>(
                    <Link href='/' key={link}>
                      <Image src={link}
                        alt='link'
                        height={24}
                        width={24}
                        className='grid grid-flow-row auto-rows-max'
                      />
                    </Link>
                  ))}
                </ul>
              </FooterColumn>

            </div>
          </div>
          
          <div className='flex flex-wrap gap-10 sm:justify-betweeen
          md:flex-1'>
            {FOOTER_LINKS.map((columns) =>(
              <FooterColumn title={columns.title}>
                <ul className='regular-14 flex flex-col 
                gap-4 text-gray-40'>
                  {columns.links.map((link) =>(
                    <Link href='/' key={link}>
                      {link}
                    </Link>
                  ))}

                </ul>
              </FooterColumn>
            ))}
            <div className='flex flex-col gap-5'>
              <FooterColumn title ={FOOTER_CONTACT_INFO.title}>
                {FOOTER_CONTACT_INFO.links.map((link) =>(
                  <Link href="/"  
                  className='flex gap-4 md:flex-col lg:flex-row'>
                    
                    <p className='medium-14 whitespace-nowrap 
                    text-blue-70'>
                      {link.value}
                    </p>
                    
                  </Link>
                ))}

              </FooterColumn>

            </div>
            
          </div>

        </div>
      </div>

    </footer>
  )
}
type FooterColumnProps = {
  title:string;
  children:React.ReactNode;
}
const FooterColumn = ({title, children} : FooterColumnProps) =>{
  return(
    <div className='flex flex-col gap-5'>
      <h4 className='bold-18 whitespace-nowrap'>
        {title}
      </h4>
      {children}
    </div>
  )
}

export default Footer
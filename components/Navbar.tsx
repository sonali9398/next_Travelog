import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import {NAV_LINKS} from '@/constants';
import Button from './Button';

const Navbar = () => {
  return (
    <nav className='flexBetween max-container padding-container relative z-30 py-5'>
        <Link href='/'>
            <Image 
                src="/Frame 1.png" alt='logo' width={145} height={50}/>
        </Link>
            

            <ul className='hidden h-full w-full gap-12 lg:flex justify-evenly'>   
                    {NAV_LINKS.map((link) =>(
                        <Link href={link.href} key={link.key}
                        className='regular-16 text-gray-50 flexBetween
                        cursor-pointer pb-1.5 transition-all hover:font-bold' >
                            {link.label}
                        </Link>
                    ))}
            </ul>

            <div className='lg:flexCenter hidden  hover:font-bold'>
                <Button
                    type='button'
                    title="Log In"
                    variant='btn_white_text'
                /> 
                <Button
                    type="button"
                    title="Sign Up"
                    variant="btn_purple"/>
                   

            </div>
            <Image
                src={"/menu.png"}
                alt='menu'
                width={32}
                height={32}
                className='inline-block cursor-pointer lg:hidden'/>
    </nav>
    
  )
}

export default Navbar;
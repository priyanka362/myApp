import React from 'react'
import Link from 'next/link'
import Image from 'next/image'

const Navbar = () => {
    return (
            <nav className='bg-orange-100'>
                <div className='p-3 mx-16 flex flex-row items-center justify-between'>
                    <div className='left'>
                        <Link href={'/'} className="flex flex-row items-center gap-3 ">
                        <Image src={'/assests/chat.png'} alt='LOGO' width={60} height={60}/>
                        <span>BrandName</span>
                        </Link>                     
                    </div>
                    <div className="right flex gap-4">
                       <button className='rounded-full bg-red-200 text-red-950 w-20 h-10'>Login</button>
                       <button className='rounded-full bg-red-600 text-red-50 w-20 h-10'>Signup</button>
                    </div>
                </div>
            </nav>
    )
}

export default Navbar



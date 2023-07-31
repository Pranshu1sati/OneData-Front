'use client'
import {use, useState} from 'react'
import {usePathname} from "next/navigation"

import { Bars3BottomRightIcon, XMarkIcon } from '@heroicons/react/24/solid'
import Link from 'next/link'
const header = () => {
    const path = usePathname();
    const isPublic = path ==='/login'
    let Links =[
        {name:"Home",link:"/"},
        {name:"Dashboard",link:"/Dashboard"},
        {name:"NIRF",link:"/NIRF"},
        {name:"Contact",link:"/Contact"},
      ];
    const [open, setIsOpen] = useState(false);
  return (
    <div className='sticky shadow-md w-full  top-0'>
           <div className='md:flex items-center justify-between bg-white py-0 md:px-10 px-7'>
            {/* logo section */}
            <div className='font-bold text-2xl cursor-pointer flex items-center'>
                <img src='https://lawbhoomi.com/wp-content/uploads/2022/03/Graphic-Era-Hill-University.jpg' className='w-28 h-21'/>
                <span className='text-gray-800 -mx-4'>Graphic Era</span>
            </div>
            {/* Menu icon */}
            {!isPublic &&<div onClick={()=>setIsOpen(!open)} className='absolute right-8 top-6 cursor-pointer md:hidden w-10 h-10 pt-1'>
                {
                    open ? <XMarkIcon className='text-gray-700'/> : <Bars3BottomRightIcon className='text-gray-600'/>
                }
            </div>}
            {/* linke items  */}<>
            {!isPublic &&<ul className={`md:flex md:items-center md:pb-0 pb-0 absolute md:static bg-white md:z-auto z-[-1] left-0 w-full md:w-auto md:pl-0 pl-9 transition-all duration-500 ease-in ${open ? 'top-20' : 'top-[-490px]'}`}>
                {
                    Links.map((link) => (
                    <li key={link.link} className='md:ml-8 md:my-0 my-7 font-semibold'>
                        <Link href={link.link} className='text-gray-800 hover:text-blue-400 duration-500' onClick={()=>setIsOpen(!open)}>{link.name}</Link>
                    </li>))
                }
                
            </ul>}
            </>
            {/* button for logout not sure*/}
           </div>
        </div>
  )
}
export default header
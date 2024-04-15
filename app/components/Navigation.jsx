import React from 'react'
import { usePathname } from 'next/navigation'
import Link from "next/link"
import { useSession, signIn, signOut } from 'next-auth/react';


const Navigation = () => {
    const pathname = usePathname();
    const { status } = useSession()
  

    const NavItems = [
        { label: "Home", href: "/" },
        { label: "Dashboard", href: "/Dashboard" },
        { label: "Profile", href: "/Profile" },
        { label: "Messages", href: "/Messages" },
        { label: "About", href: "/About" },
    ]

    return (
    <nav className='relative container mx-auto bg-gray-800 text-white p-6'>
        <div className="flex items-center justify-between">

          <div className='mx-48 mr-6 w-32 h-16 '>
            <a href='/'>
            <h1 className='text-xl font-bold text-white font-mono shadow-2xl'>Company Management System</h1>
            </a>
          </div>

          <div className='flex flex-row space-x-12 mr-12 text-lg font-semibold text-gray-200'>
            {
                NavItems.map((item, index) => (
                    <Link key={index}
                    href={item.href}
                    className={ pathname === `${item.href}` ? 'font-bold text-blue-600 shadow-md' : '' }
                    > {item.label} </Link>
                ))
            }
        
          </div>
          
          <div className='flex flex-row justify space-x-1 shadow-lg'>
            <input className='text-gray-800 text-md p-2 rounded-xl font-semibold h-16'
            type='text'
            placeholder='Search'
            name='SearchBox'
            />

            <button type='button' name='SearchButton' className='bg-gray-400 px-4 py-2 hover:bg-blue-500 font-semibold rounded-md'>Search</button>
          </div>

          <div className='ml-2'>
          {
            status === "authenticated" ? (
              <button className='bg-gray-400 h-16 font-bold text-black px-6 py-2 rounded-md hover:bg-red-500' onClick={() => signOut()}>Log Out</button>
            ) : (
              <button className='bg-gray-400 h-16 font-bold text-black px-6 py-2 rounded-md hover:bg-blue-500' onClick={() => signIn("google")}>Sign In</button>
            )
          } 

          </div>
        
        </div>
    </nav>
  )
}

export default Navigation
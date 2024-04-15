"use client"
import React from 'react'
import { useSession } from 'next-auth/react'

const page = () => {
    const { status, data: session } = useSession();
    
  return status === 'authenticated' ?
  (
    <div className='bg-black'>
        <div className='flex flex-col text-white text-xs justify-between items-center mt-24 p-2 space-y-2'>
            <p className='text-lg'>Company Management System, Inc.</p>
            <p>Phone: +1-880-789-8799</p>
            <p>1855 Aldridge Way, NW, San Francisco, California</p>
            <p>Company Management System &copy; 2024 All rights reserved.</p>
        </div>
    </div>
  ) : (
    <div className='flex flex-col text-white text-xs justify-between items-center mt-24 p-2 space-y-2'> Please Login! </div>
  )
}

export default page
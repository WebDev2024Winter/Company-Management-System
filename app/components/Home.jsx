"use client"
import React from 'react'
import LogInBtn from './LogInBtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";


const Home = () => {
  const { status, data: session } = useSession();

  return status === "authenticated" ?
  (
    <div className='bg-gray-400'>

      <Header/>
      <Navigation/>

      <div>
        <h2 className='text-2xl text-black font-semibold m-24'> Welcome: </h2>

        <div className='flex flex-col items items-center gap-4 shadow-md p-5'>
          <Image
          src={session.user.image}
          alt="User Image"
          width={40}
          height={40}
          className='w-10 h-10 rounded-full'
          />

          <span className='text-xl font-bold'>{session?.user?.name}</span>
          <span className='text-xl font-bold'>{session?.user?.email}</span>
      

        </div>
      </div>

      <Footer/>
    </div>

  ) : (
    <div className="bg-black grid place-items-center h-screen mt-24">
      <LogInBtn />
    </div>
  )
}

export default Home
"use client"
import React from 'react'
import LogInBtn from './LogInBtn'
import { useSession } from 'next-auth/react'
import Image from 'next/image'
import Header from "./Header";
import Navigation from "./Navigation";
import Footer from "./Footer";
import Users from '../models/users'
import { connectToMongoDB } from '../lib/mongodb'
import { useState } from "react"

const Home = () => {
  const [addAdminUser, setAddAdminUser] = useState('');
  const { status, data: session } = useSession();
  connectToMongoDB();
  const user = Users.findOne({name: session.user.name});

  const addAdmin = async () => {
    await Users.updateOne({name: addAdminUser}, {admin: true});
  }

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

      { user.admin ? (

      <div className='mt-16 flex flex-row justify-between items-center'>
        <h6 className='font-semibold text-white text-sm'> Make a user Admin/Not Admin: </h6>
      
        <input
        type='text'
        placeholder='User email'
        className='w-1/2 font-semibold rounded-md p-2'
        onChange={(e) => setAddAdminUser(e.target.value)}
        />

        <button className='bg-red-700 hover:bg-red-900 p-2 mx-2'
        onClick={addAdmin}> Save </button>
      </div>

      ) : (
        <div className='text-white text-sm font-semibold'> You are logged in as: {user.name} </div>
      )}

      <Footer/>
    </div>

  ) : (
    <div className="bg-black grid place-items-center h-screen mt-24">
      <LogInBtn />
    </div>
  )
}

export default Home
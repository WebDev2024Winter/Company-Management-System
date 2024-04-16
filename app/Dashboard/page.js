"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import AdminDashboard from '../models/adminDashboard';
import Users from '../models/users';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const page = async () => {
    const [messages, setMessages] = useState([]);
    const [showNewMessageModal, setShowNewMessageModal] = useState(false);
    const [newMessageTitle, setNewMessageTitle] = useState('');
    const [newMessageDesc, setNewMessageDesc] = useState('');
    

    const { status, data: session } = useSession();
    const user = await Users.findOne({name: session?.user?.name})

    useEffect(async () => {
    setMessages(await AdminDashboard.find());
    }, [])

    const handleAddDashboardMessage = async () => {
        await AdminDashboard.create({name: session.user.name, title: newMessageTitle, message: newMessageDesc});
    }

  return status === 'authenticated' ?
  (
    <div className='bg-gray-800'>
        <Header/>
        <Navigation/>

        <button
        onClick={() => setShowNewMessageModal(true)}
        className="bg-red-800 text-white p-4"
        > Add New Message </button>
        
        <Modal showModal={showNewMessageModal} setShowModal={setShowNewMessageModal}>
            <form className="bg-gray-800 w-full p-6" onSubmit={handleAddDashboardMessage}>
                <h1 className='text-white font-bold'>Add Movie</h1>
            
                <input
                type="text"
                placeholder="Title"
                className="w-full p-2 m-2 rounded-md"
                onChange={(e) => setNewMessageTitle(e.target.value)}
                />
            
                <label>Description: <br/></label>
                <textarea
                rows="6"
                cols="60"
                placeholder="Description"
                className='w-full p-2 m-2 rounded-md'
                onChange={(e) => setNewMessageDesc(e.target.value)}
                />

                <button type="submit" className="justify-items-end bg-green-500 hover:bg-green-900 text-white font-semibold px-6 py-2">
                Save
                </button>
            </form>
        </Modal>

        <h1 className='text-3xl m-16 font-bold text-white font-mono'>Dashboard</h1>
            

        <ul className='mt-8'>
            {
                messages.map(msg => (
                <li className="p-4 my-4 rounded-lg bg-gray-700" key={msg.id}>
                <h3 className='text-xl font-bold text-white font-mono'>From: {msg.name}</h3>
                <h1 className='text-2xl font-bold text-white font-mono'>{msg.title}</h1>
                <p className='text-sm text-white font-mono'>{msg.message}</p>
                </li>
                ))
            }
        </ul>

        
        <Footer/>
    </div>
  ) : (
    <div className="bg-black grid place-items-center h-screen mt-24">
      <LogInBtn />
    </div>
  )
}

export default page
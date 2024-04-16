"use client"
import React from 'react'
import { useEffect, useState } from 'react'
import { useSession } from 'next-auth/react';
import UserMessages from '../models/userMessages';
import Users from '../models/users';
import Header from '../components/Header';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import Modal from '../components/Modal';

const page = async () => {
    const [communicatingUser, setCommunicatingUser] = useState('');

    const [messagesFromUser, setMessagesFromUser] = useState([]);
    const [messagesToUser, setMessagesToUser] = useState([]);
    const [messagesToAndFromUser, setMessagesToAndFromUser] = useState([]);
    const [newMessage, setNewMessage] = useState('');
    
    const { status, data: session } = useSession();
    
    const currentDate = new Date();
    const user = await Users.findOne({name: session?.user?.name})
    
    const handleNewUser = async (e) => {
        setCommunicatingUser(e.target.value);
        setMessagesFromUser(await UserMessages.find({name: communicatingUser, toUser: session.user.name}).sort({createdAt: 'asc'}));
        setMessagesToUser(await UserMessages.find({name: session.user.name, toUser: communicatingUser}).sort({createdAt: 'asc'}));

        var fromUserInt = 0;
        var toUserInt = 0;
        while((messagesFromUser.length > fromUserInt) && (messagesToUser.length > toUserInt))
        {
          if(messagesFromUser[fromUserInt].createdAt < messagesToUser[toUserInt].createdAt)
          {
            setMessagesToAndFromUser((prevMessages) => [...prevMessages, messagesFromUser[fromUserInt]]);
            fromUserInt++;
          } else {
            setMessagesToAndFromUser((prevMessages) => [...prevMessages, messagesToUser[toUserInt]]);
            toUserInt++;
          }
        }
      }
    
    const handleAddUserMessage = async () => {
        await UserMessages.create({name: user.name, message: newMessage, toUser: communicatingUser});
        const newMsg = await UserMessages.findOne().sort({createdAt: -1});
        setMessagesToAndFromUser((prevMessages) => [...prevMessages, newMsg]);
    }

  return status === 'authenticated' ?
  (
    <div className='bg-gray-900'>
      <Header/>
      <Navigation/>

      <div className='flex flex-row justify-between'>

        <h1 className='text-3xl m-16 font-bold text-white font-mono'>Messages</h1>
        
          <label>To/From User: </label>
          <input
          type="text"
          placeholder="To/From User"
          className="w-1/2 p-2 m-2 rounded-md"
          onChange={handleNewUser}
          />
          
          <ul className='mt-8'>
            {
                messagesToAndFromUser.map(msg => (
                  msg.name === communicatingUser ? (
                    <li className="absolute inset-y-0 left-0 w-1/2 p-2 my-2 rounded-md bg-gray-200" key={msg.id}>
                    <h3 className='text-md font-bold text-white font-mono'>From: {msg.name}</h3>
                    <p className='text-sm text-white font-mono'>{msg.message}</p>
                    </li>
                    
                    ) : (
                    
                    <li className="absolute inset-y-0 right-0 w-1/2 p-2 my-2 rounded-md bg-gray-200" key={msg.id}>
                    <h3 className='text-md font-bold text-white font-mono'>To: {msg.toUser}</h3>
                    <p className='text-sm text-white font-mono'>{msg.message}</p>
                    </li>  
                  )
                  ))  
            }
          </ul>
      
          <label>Text: <br/></label>
          <input
          type="text"
          placeholder="Text Messages"
          className='w-full p-2 m-2 rounded-md'
          onChange={async (e) => setNewMessage(e.target.value)}
          />

          <button className="justify-items-end bg-blue-700 hover:bg-blue-900 text-white font-semibold px-6 py-2"
          onClick={async () => handleAddUserMessage()}>
          Send
          </button>    

        
          <Footer/>
        </div>
    </div>
  ) : (
    <div className="bg-black grid place-items-center h-screen mt-24">
      <LogInBtn />
    </div>
  )
}

export default page
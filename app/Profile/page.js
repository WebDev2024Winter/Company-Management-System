"use client"
import React from 'react'
import { useSession } from 'next-auth/react'
import { useState } from 'react'
import AdminOnly from '../models/adminOnly'
import Users from '../models/users'
import Addresses from '../models/address'
import Header from '../components/Header'
import Navigation from '../components/Navigation'
import Footer from '../components/Footer'
import LogInBtn from '../components/LogInBtn'
import { connectToMongoDB } from '../lib/mongodb'

const page = async () => {
    const { status, data: session } = useSession();
    
    const [user, setUser] = useState();
    const [adminOnly, setAdminOnly] = useState();
    const [address, setAddress] = useState();

    const [name, setName] = useState();
    const [phone, setPhone] = useState();
    const [houseNumber, setHouseNumber] = useState();
    const [street, setStreet] = useState();
    const [city, setCity] = useState();
    const [province, setProvince] = useState();
    const [country, setCountry] = useState();
    
    const [wage, setWage] = useState();
    const [overtimeRaise, setOvertimeRaise] = useState();
    const [hours, setHours] = useState();
    const [jobTitle, setJobTitle] = useState();
    
    const [admin, setAdmin] = useState();
    
    const [editName, setEditName] = useState(false);
    const [editPhone, setEditPhone] = useState(false);
    const [editHouseNumber, setEditHouseNumber] = useState(false);
    const [editStreet, setEditStreet] = useState(false);
    const [editCity, setEditCity] = useState(false);
    const [editProvince, setEditProvince] = useState(false);
    const [editCountry, setEditCountry] = useState(false);
    
    const [editWage, setEditWage] = useState(false);
    const [editOvertimeRaise, setEditOvertimeRaise] = useState(false);
    const [editHours, setEditHours] = useState(false);
    const [editJobTitle, setEditJobTitle] = useState(false);
    
    const [editAdmin, setEditAdmin] = useState(false);
    
    connectToMongoDB();
    const PersonName = await Users.findOne({email: session.user.name})

    setUser(PersonName);
    setAddress(await Addresses.findOne({name: PersonName.name}));
    setAdminOnly(await AdminOnly.findOne({name: PersonName.name}));
    
  return status === "authenticated" ?
  (
    <>
    <Header/>
    <Navigation/>

    <div className='bg-grey-400'>
      <h1 className='font-bold text-white text-2xl mt-12'>User Profile</h1>

      <div className='bg-gray-800 flex flex-row justify-between space-y-5 space-x-2'>

      <div> 
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditName(true)}}>
      Edit</button>
      
      <label>Name: </label>
      { editName ? (
      <>
      <input
        className="p-1 m-2" 
        value={user.name}
        onChange={(e) => setName(e.target.value)}
      />

      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Users.findOneAndUpdate({email: `${user.email}`}, {name: `${name}`}); setEditName(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.name}</div>
      )}

      </div>
      
      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditPhone(true)}}>
      Edit</button>
      
      <label>Phone: </label>
      { editPhone ? (
      <>
      <input
        type='number'
        className="p-1 m-2" 
        value={user.phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Users.findOneAndUpdate({email: `${user.email}`}, {phone: `${phone}`});
                      setEditPhone(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.phone}</div>
      )}
      

      </div>
      
      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditHouseNumber(true)}}>
      Edit</button>
      
      <label>House Number: </label>
      { editHouseNumber ? (
      <>
      <input
        className="p-1 m-2" 
        value={address.houseNumber}
        onChange={(e) => setHouseNumber(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Addresses.findOneAndUpdate({email: `${user.email}`}, {houseNumber: `${houseNumber}`});
                      setEditHouseNumber(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.houseNumber}</div>
      )}
      

      </div>
      
      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditStreet(true)}}>
      Edit</button>

      <label>Street: </label>
      { editStreet ? (
      <>
      <input
        className="p-1 m-2" 
        value={address.street}
        onChange={(e) => setStreet(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Addresses.findOneAndUpdate({email: `${user.email}`}, {street: `${street}`});
                      setEditStreet(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.street}</div>
      )}
      

      </div>
      
      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditCity(true)}}>
      Edit</button>
      
      <label>City: </label>
      { editCity ? (
      <>
      <input
        className="p-1 m-2" 
        value={address.city}
        onChange={(e) => setCity(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Addresses.findOneAndUpdate({email: `${user.email}`}, {city: `${city}`});
                      setEditCity(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.city}</div>
      )}

      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditProvince(true)}}>
      Edit</button>
      
      <label>Province: </label>
      { editProvince ? (
      <>
      <input
        className="p-1 m-2" 
        value={address.province}
        onChange={(e) => setProvince(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Addresses.findOneAndUpdate({email: `${user.email}`}, {province: `${province}`});
                      setEditProvince(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.province}</div>
      )}
      

      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditCountry(true)}}>
      Edit</button>
      
      <label>Country: </label>
      { editCountry ? (
      <>
      <input
        className="p-1 m-2" 
        value={address.country}
        onChange={(e) => setCountry(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await Addresses.findOneAndUpdate({email: `${user.email}`}, {country: `${country}`});
                      setEditCountry(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.country}</div>
      )}
      

      </div>
      

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditWage(true)}}>
      Edit</button>
      
      <label>Wage: </label>
      { (editWage && user.admin) ? (
      <>
      <input
        className="p-1 m-2" 
        value={adminOnly.wage}
        onChange={(e) => setWage(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await AdminOnly.findOneAndUpdate({email: `${user.email}`}, {wage: `${wage}`});
                      setEditWage(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{admin.wage}</div>
      )}
        
      
      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditOvertimeRaise(true)}}>
      Edit</button>
      
      <label>Overtime Raise: </label>
      { (editOvertimeRaise && user.admin) ? (
      <>
      <input
        className="p-1 m-2" 
        value={adminOnly.overtimeRaise}
        onChange={(e) => setOvertimeRaise(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await AdminOnly.findOneAndUpdate({email: `${user.email}`}, {overtimeRaise: `${overtimeRaise}`});
                      setEditOvertimeRaise(false)}}>
      Save</button>
      </>
      ) : (
      <div className='text-white text-sm font-bold'>{admin.overtimeRaise}</div>
      )}
      
      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditHours(true)}}>
      Edit</button>
      
      
      <label>Hours: </label>
      { (editHours && user.admin) ? (
      <>
      <input
        className="p-1 m-2" 
        value={adminOnly.hours}
        onChange={(e) => setHours(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await AdminOnly.findOneAndUpdate({email: `${user.email}`}, {hours: `${hours}`});
                      setEditHours(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{admin.hours}</div>
      )}
      

      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditJobTitle(true)}}>
      Edit</button>
      
      <label>Job Title: </label>
      { (editJobTitle && user.admin) ? (
      <>
      <input
        className="p-1 m-2" 
        value={adminOnly.name}
        onChange={(e) => setJobTitle(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {await AdminOnly.findOneAndUpdate({email: `${user.email}`}, {jobTitle: `${jobTitle}`});
                      setEditJobTitle(false)}}>
      Save</button>
      </>
      ) : (
      <div className='text-white text-sm font-bold'>{admin.jobTitle}</div>
      )}
      
      </div>

      <div>
      <button className='bg-red-500 hover:bg-red-900 text-white p-2'
      onClick={() => {setEditAdmin(true)}}>
      Edit</button>
      
      <label>Admin Status: </label>
      { (editAdmin && user.admin) ? (
      <>
      <input
        className="p-1 m-2" 
        placeholder='True/False only'
        value={adminOnly.admin}
        onChange={(e) => setAdmin(e.target.value)}
      />
      
      <button className='bg-green-500 hover:bg-green-900 text-white p-2'
      onClick={async () => {if(admin === 'True') await User.findOneAndUpdate({email: `${user.email}`}, {admin: true}); else
                      if(admin === 'False') await User.findOneAndUpdate({email: `${user.email}`}, {admin: false});
                      setEditAdmin(false)}}>
      Save</button>
      </>
      ) : (
        <div className='text-white text-sm font-bold'>{user.admin}</div>
      )}
        
      </div>
      
      </div>
    </div>

    <Footer/>
    </>
  ) : (
    <div className="bg-black grid place-items-center h-screen mt-24">
      <LogInBtn />
    </div>
  )
}

export default page
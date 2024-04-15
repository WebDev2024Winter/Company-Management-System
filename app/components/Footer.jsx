import React from 'react'

const Footer = () => {
  return (
    <footer className='bg-gray-800'>
        <div className='container flex flex-row justify-around px-4 py-4 space-y-4 space-x-6'>
          <div className='flex flex-col justify-between px-4 py-4 space-y-3'>
        
            <div className='mx-12 w-32 h-16 '>
                <a href='/'>
                <h1 className='text-xl font-bold text-white font-mono shadow-gray-300'>Company Management System</h1>
                </a>
            </div>
            
          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2 mx-4 text-white text-sm'>
            <a className='flex flex-row' href='https://twitter.com/CompanyManagementSystem/'>
              <img className='w-8' src='twitter-icon.svg'/>
              <h6 className='text-sm text-white hover:text-blue-500'>Twitter</h6>
            </a>

            <a className='flex flex-row' href='https://facebook.com/CompanyManagementSystem/'>
              <img className='w-8' src='facebook-icon.svg'/>
              <h6 className='text-sm text-white hover:text-blue-500'>Facebook</h6>
            </a>

            <a className='flex flex-row' href='https://instagram.com/CompanyManagementSystem/'>
              <img className='w-8' src='instagram-icon.svg'/>
              <h6 className='text-sm text-white hover:text-blue-500'>Instagram</h6>
            </a>

            <a className='flex flex-row' href='https://reddit.com/CompanyManagementSystem/'>
              <img className='w-8' src='reddit-icon.svg'/>
              <h6 className='text-sm text-white hover:text-blue-500'>Reddit</h6>
            </a>

          </div>

          <div className='flex flex-col justify-between px-4 py-2 space-y-2'>
            <a href='/' className='text-white hover:text-blue-500'>Home</a>
            <a href='#' className='text-white hover:text-blue-500'>About</a>
            <a href='#' className='text-white hover:text-blue-500'>Contact</a>
            <a href='#' className='text-white hover:text-blue-500'>Help</a>
          </div>

          <div className='flex flex-col text-white text-xs justify-between p-2 space-y-2'>
            <p className='text-lg'>Company Management System, Inc.</p>
            <p>Phone: +1-880-789-8799</p>
            <p>1855 Aldridge Way, NW, San Francisco, California</p>
            <p>Company Management System &copy; 2024 All rights reserved.</p>
          </div>
          
        </div>
    </footer>
  )
}

export default Footer
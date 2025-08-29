import React from 'react'

function Navbar() {
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 
                    z-20 backdrop-blur-xl font-medium bg-white/50  dark:bg-gray-900/70 '>
      
      <img src="/src/assets/log.jpg" alt="logo" className='w-32 sm:w-40'/>

      <div>
        <a href="#" className='sm:hover:border-b '>Home</a>
        <a href="#services" className='sm:hover:border-b '>Services</a>
        
      </div>
    </div>
  )
}

export default Navbar


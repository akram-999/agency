import React, {useState} from 'react';
import { GoArrowRight } from "react-icons/go";
import { RxCross2 } from "react-icons/rx";
import { CgMenuRight } from "react-icons/cg";

function Navbar() {

  const [open, setOpen] = useState(false);
  return (
    <div className='flex justify-between items-center px-4 sm:px-12 lg:px-24 xl:px-40 py-4 sticky top-0 
                    z-20 backdrop-blur-xl font-medium bg-white/50  dark:bg-gray-900/70 '>
      
      <img src="/src/assets/log.jpg" alt="logo" className='w-28 '/>

      <div className={`text-gray-700 dark:text-white sm:text-sm ${!open ? 'max-sm:w-0 overflow-hidden' : 'max-sm:w-60 max-sm:pl-10'} max-sm:fixed top-0 
                        bottom-0 right-0 max-sm:min-h-screen max-sm:h-full max-sm:flex-col max-sm:bg-primary mx-sm:text-white 
                        max-sm:pt-20 flex sm:items-center gap-5 transition-all`}>

        <RxCross2 className='text-3xl sm:hidden absolute top-4 right-4 cursor-pointer' onClick={() => setOpen(false)}/>   

        <a onClick={() => setOpen(false)} href="#" className='sm:hover:border-b'>Home</a>
        <a onClick={() => setOpen(false)} href="#services" className='sm:hover:border-b '>Services</a>
        <a onClick={() => setOpen(false)} href="#about" className='sm:hover:border-b '>About</a>
        <a onClick={() => setOpen(false)} href="#our-work" className='sm:hover:border-b '>Our Work</a>
        
      </div>

      <div className='flex items-center gap-2 sm:gap-4'>
        <CgMenuRight  onClick={() => setOpen(true)} className='text-3xl sm:hidden cursor-pointer'/>
        <a href="#contact" className='text-sm max-sm:hidden flex items-center gap-2 bg-primary text-white px-6 py-2 rounded-full cursor-pointer hover:scale-103 transition-all '>Contact <GoArrowRight /></a>
      </div>
    </div>
  )
}

export default Navbar


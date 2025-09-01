import React, { useEffect } from 'react';
import { MdOutlineDarkMode } from "react-icons/md";
import { IoSunnyOutline } from "react-icons/io5";

export default function ThemeToggle({theme, setTheme}) {

    useEffect(() => {
        const localTheme = localStorage.getItem('theme')
        if(localTheme){
            setTheme(localTheme)
        }
    },[])
    useEffect(() => {
        if(theme === 'dark'){
            document.documentElement.classList.add('dark')
        }else{
            document.documentElement.classList.remove('dark')
        }
        localStorage.setItem('theme', theme)
    },[theme])

  return (
    <div>
      <button onClick={ () => setTheme(theme === "dark" ? "light" : "dark")}>
        {theme === "dark" ? <MdOutlineDarkMode className='text-2xl mt-1.5 text-emerald-300'/> : <IoSunnyOutline className='text-2xl mt-1.5 text-emerald-300'/>}
      </button>
    </div>
  )
}

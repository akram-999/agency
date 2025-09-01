import React, { useEffect } from 'react'
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

export default function ThemeToggle({theme, setTheme}) {
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
        {theme === "dark" ? <MdOutlineDarkMode className='text-2xl mt-1.5 text-emerald-300'/> : <MdDarkMode className='text-2xl mt-1.5 text-emerald-300'/>}
      </button>
    </div>
  )
}

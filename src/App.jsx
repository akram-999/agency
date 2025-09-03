import React, {useState} from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Clients from './components/Clients'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  return (
    <div className='dark:bg-gray-900 relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero/>
      <Clients />
    </div>
  )
}

export default App

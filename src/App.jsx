import React, {useState} from 'react'
import Navbar from './components/Navbar'
function App() {
  const [theme, setTheme] = useState(localStorage.getItem('theme') || 'light')
  return (
    <div className='dark:bg-gray-900 relative'>
      <Navbar theme={theme} setTheme={setTheme}/>
    </div>
  )
}

export default App

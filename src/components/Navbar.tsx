import { useState } from 'react';
import darkMoon from '../assets/dark moon.png'
import lightMoon from '../assets/light moon.png'
const Navbar = () => {
  const [theme, settheme] = useState("dark-theme");
  const toggleTheme = () => { 
    if (document.body.classList.contains("dark-theme")) { 
      document.body.classList.remove("dark-theme")
      document.body.classList.add("light-theme")
      settheme("light-theme");
    }
    else { 
      // light theme
      document.body.classList.remove("light-theme")
      document.body.classList.add("dark-theme")
      settheme("dark-theme");
    }

  }
  return (
    <div className="flex shadow-element w-full p-5 m-0 bg-elements items-center justify-between ">
        <h1 className="font-bold text-xl">Where in the world?</h1>
        <div onClick={toggleTheme} id="theme-toggler" className='group flex cursor-pointer trans hover:scale-105 gap-2 max-h-5  items-center'>
            {/* icon */}
            <img src={theme == "dark-theme" ? darkMoon : lightMoon} className='h-5 w-5' alt="" />
            <span>Dark Mode</span>
        </div>
    </div>
  )
}

export default Navbar
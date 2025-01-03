import React, { useEffect, useState } from 'react'
import { createContext } from 'react'


export const ThemeContext = createContext()
export default function ThemeProvider( {children}) {

    const [theme,setheme]=useState(
        localStorage.getItem("theme") || "light"
    )
    useEffect(()=>{
        document.documentElement.setAttribute("data-theme",theme)
        localStorage.setItem("theme",theme)
    },[theme])
    const togglebtn = ()=>{
        setheme((prevTheme)=> (prevTheme === "light"?"dark":"light"))
    }
    const themeValue = {
        theme,
        togglebtn
    }

    
  return (
   <ThemeContext.Provider value={themeValue}
   >
    {children}
   </ThemeContext.Provider>
  )
}
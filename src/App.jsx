import { useState } from 'react'
import{MyRoutes}from"./index"
import{createContext} from "react"
import {Light,Dark} from "./index"
import {ThemeProvider} from "styled-components"
export const ThemeContext=createContext(null);


function App() {
const{theme,setTheme}=useState("light");
const themeStyle=theme==="light"?Light:Dark

  

  return (
    <>
<ThemeContext.Provider value={{setTheme,theme}}>

  <ThemeProvider theme={themeStyle} >

<MyRoutes/>

</ThemeProvider>

</ThemeContext.Provider>






   
    </>
  )
}

export default App

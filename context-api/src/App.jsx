import React from 'react'
import Navbar from './components/Navbar'
import { useState } from 'react'
import Button from './components/Button'

const App = () => {

  // const [theme, setTheme]=useState('light');

  return (
    <div>
      {/* <Navbar theme={theme}>
        <h4>
          This is a Navbar
        </h4>
         <h4>
          hey there
        </h4>
      </Navbar> */}
     
     <Navbar/>
     <Button/>
    </div>
  )
}

export default App

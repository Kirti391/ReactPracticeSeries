import React from 'react'
import Nav2 from './Nav2'
import { useContext } from 'react';
import { ThemeDataContext } from './ThemeContext';
const Navbar = () => { 
    // console.log(props.children);
    const [theme]=useContext(ThemeDataContext);
    // console.log(data);



  return (
    <div className={theme}>
       
      {/* <h2>{data}</h2>  */}
      {/* <h2>{props.children[0]}</h2> */}
       {/* <Nav2 theme={props.theme}/> */}

       <Nav2/>
    </div>
  )
}

export default Navbar

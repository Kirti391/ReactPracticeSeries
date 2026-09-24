import React from 'react'
import './Header';
import '../button/Button'
import styles  from './Header.module.css'
// import styles1 from "../button/Button.module.css"
const Header = () => {
  return (
    <div className={styles.header}>
     Header
     <button className={styles.btn}>Login</button>
    </div>
  )
}

export default Header

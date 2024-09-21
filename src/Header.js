import logo from './images/logo.png'
import { FaBars } from 'react-icons/fa'
import { useState } from 'react'

const Header = ({active,setActive}) => {
  
  const toggleClass = () => {
    setActive(!active);
  };

  return (
    <header className="header">
        <img src={logo} />
        <FaBars onClick={toggleClass} style={{
            display: 'inline-block',
            fontSize: '2rem',
            position: 'relative',    
            bottom: '12',
            left: '15%',
            color: '#d6d8d7', 
        }}/>                
        
        
    </header>
  )
}

export default Header

import React from 'react'
import { FaTimes } from 'react-icons/fa'
import { useRef } from 'react'
import useOutsideClick from './Hooks/useOutsideClick';

const Dialogbox = ({randomMen,randomWomen,setClicked}) => {
    const ref = useRef();
    useOutsideClick(ref, () => setClicked(false))
    const handleClick = () => {
        setClicked(false);
    }
  return (
    <div ref={ref} className='dialogbox'>
      <FaTimes onClick={handleClick} style={{
        position: 'relative',
        fontSize: '2rem',
        color: 'rgba(233, 0, 89,1)'
      }}/>
      <h2>{randomMen()}'s partner would be {randomWomen()}</h2>
      <p>Disclaimer: This Life Partner Predictor is purely for entertainment and fun purposes only. It just generates partner randomly. No one was intended to harm. No unicorns were harmed during the making of this predictor.</p>
    </div>
  )
}

export default Dialogbox

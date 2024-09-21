import React from 'react'
import { useState } from 'react';
import Dialogbox from './Dialogbox';

const Random = ({defaultMen,defaultWomen}) => {

  const [clicked,setClicked] = useState(false);
  const randomMen =() =>{ return defaultMen[Math.floor(Math.random() * defaultMen.length)];};
  const randomWomen =() => { return defaultWomen[Math.floor(Math.random() * defaultWomen.length)];};

     const handleClick = () => {
      setClicked(true);
     }
     

  return (
    <div className='random'>
      <h3>Click the button below to find a random male and female partners</h3>
      <button onClick={handleClick}>
        Find Now..!
      </button>
      {clicked && <Dialogbox
        randomMen={randomMen}
        randomWomen={randomWomen}
        setClicked= {setClicked}
        />}
    </div>
  )
}

export default Random

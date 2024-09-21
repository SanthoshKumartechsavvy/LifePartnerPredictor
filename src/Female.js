import FemaleDialogbox from "./FemaleDialogbox";
import { useState } from "react";

const Female = ({femaleInput,setFemaleInput,randomMen}) => {

  const [clicked,setClicked] = useState(false);
  const handleClick = () => {

    if(femaleInput.trim() === '') {
      alert('Female Name cannot be empty!');
    }
    else {
      setClicked(true);   
    }
   }

  return (
    <form onSubmit={(e) => e.preventDefault()} className="male">
        <label htmlFor="maleInput">Enter your name below to predict your male life partner</label>
        <input 
          type="text"
          id='maleInput'
          placeholder='Enter name'
          required
          value={femaleInput}
          onChange={(e) => setFemaleInput(e.target.value)}
        />
        <button onClick={handleClick} type='submit'>
          Predict Now..!
        </button>
        
        {clicked && <FemaleDialogbox
        femaleInput={femaleInput}
        randomMen={randomMen}
        setClicked= {setClicked}
        />}
      </form>
  )
}

export default Female

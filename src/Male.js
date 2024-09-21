import ReactDOM from 'react-dom'
import MaleDialogbox from './MaleDialogbox'
import { useState } from 'react';

const Male = ({maleInput, setMaleInput, randomWomen}) => {
  const [clicked,setClicked] = useState(false);
  const handleClick = () => {

    if(maleInput.trim() === '') {
      alert('Male name cannnot be empty!');
    }
    else{
      setClicked(true);
    }
    
   }
   const handleSubmit = (event) => {
       event.preventDefault();
     };
  return (
    
      <form onSubmit={handleSubmit} className="male">
        <label htmlFor="maleInput">Enter your name below to predict your female life partner</label>
        <input 
          type="text"
          id='maleInput'
          placeholder='Enter name'
          required
          value={maleInput}
          onChange={(e) => setMaleInput(e.target.value)}
        />
        <button onClick={handleClick} type='submit'>
          Predict Now..!
        </button>
        
        {clicked && <MaleDialogbox
        maleInput={maleInput}
        randomWomen={randomWomen}
        setClicked= {setClicked}
        />}
      </form>
    
  )
}

export default Male

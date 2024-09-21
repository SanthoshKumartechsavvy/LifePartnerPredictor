import React, { useState } from 'react'
import { FaPlus } from 'react-icons/fa';
import { useNavigate } from 'react-router-dom';


const ChangeInput = ({setDefaultMen, setDefaultWomen}) => {
    const navigate = useNavigate();
    const [maleArray, setMaleArray] = useState([]);
    const [maleInput, setMaleInput] = useState('');
    
    const handleAddMale = () => {
        if(maleInput.trim() === '') {
          alert('Male name cannnot be empty!');
        }
        else{
          setMaleArray([...maleArray, maleInput]);
          setMaleInput('');
        }
        
    }

    const [femaleArray, setFemaleArray] = useState([]);
    const [femaleInput, setFemaleInput] = useState('');

    const handleAddFemale = () => {
        if(femaleInput.trim() === '') {
          alert('Female Name cannot be empty!');
        }
        else {
          setFemaleArray([...femaleArray, femaleInput]);
          setFemaleInput('');
        }
        
    }

    const handleButton = () => {
        setDefaultMen(maleArray);
        setDefaultWomen(femaleArray);
        navigate('/input');
    }

  return (

    <>
    <div className='input-cont'>
            <h3>Input Male Names</h3>
            <ul>
            {maleArray.map((male, index) => (
                <li key={index}>{male}</li>
            ))}
            </ul>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className="inputform">
        <label htmlFor="maleInput">Add male name</label>
        <input 
          type="text"
          id='maleInput'
          placeholder='Enter male name'
          value={maleInput}
          onChange={(e) => setMaleInput(e.target.value)}
        /> 
        <button aria-label='AddItem' type='submit' onClick={handleAddMale}><FaPlus/></button>
      </form>

      <div className='input-cont'>
            <h3>Input Female Names</h3>
            <ul>
            {femaleArray.map((female, index) => (
                <li key={index}>{female}</li>
            ))}
            </ul>
    </div>

    <form onSubmit={(e) => e.preventDefault()} className="inputform">
        <label htmlFor="femaleInput">Add female name</label>
        <input 
          type="text"
          id='femaleInput'
          placeholder='Enter female name'
          value={femaleInput}
          onChange={(e) => setFemaleInput(e.target.value)}
        /> 
        <button aria-label='AddItem' type='submit' onClick={handleAddFemale}><FaPlus/></button>
      </form>
    <div className='inputbutton'>
        <button onClick={handleButton}>Use these Input Names</button>
    </div>
    
    </>
  )
}

export default ChangeInput

import React from 'react'
import { Link } from "react-router-dom"

const InputNames = ({defaultMen,defaultWomen,setDefaultMen,setDefaultWomen}) => {

    const handleChangeDefault = () => {
        setDefaultMen(["Sangesh V","Sanjay Raj","Sanjay K", "Sanjay S","Sanjay Gupta","Sanjeetharan","Santhana Mariyappan","Santhosh S","Santhosh Kumar","Saravanan","Sathiyanarayanan","Selva Kumar","Shreyas R","Shyam C","Shyam Sathish","Siddtharth","Sivanesan","SivanthRaj","Sri Balaji","Srinithin","Sriram","Subbu Veerapan","Subramani","Ramprakash","Sudharsan S","Sudharsan P","Sudhir Rao","Suganeswaran","Surya S","Thowfiq Umar","Vasantha Kumar","Vijay Krishnan","Vinoj M","Vishal N","Vitta Hem Kumar","Yuvaraj A"]);
        setDefaultWomen(["Santhiya R","Shamita H","Shamrutha","Sharika S","Sharmila G","Shivvatharani","Shivvani M","Shobbana S","Silvia Caralyn","Siva Sankari","Solai Srivarshini","Sri Priyadarshini","Srishti","Sruthi R","Sruthilaya","Suba Shree","Sumithra S","Suwetha S","Tharanya B","Varsha N","Varsha TB","Varshini R","Vidhya B","Vivedha A","Yamini R","Yuvabarathi"]);
    }

  return (
    <>
        <div className='men-cont'>
            <h3>Input Male Names</h3>
            <ul>
            {defaultMen.map((men, index) => (
                <li key={index}>{men}</li>
            ))}
            </ul>
        </div>
        <div className='men-cont'>
            <h3>Input Female Names</h3>
            <ul>
            {defaultWomen.map((women, index) => (
                <li key={index}>{women}</li>
            ))}
            </ul>
        </div>
        <div className="buttons">
            <button><Link to= "/changeinput">Change Input Names </Link></button>
            <button onClick={handleChangeDefault}>Change into Default Names</button>
        </div>
        
    </>
    
  )
}

export default InputNames

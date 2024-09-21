import Header from "./Header";
import Menu from "./Menu";
import Footer from "./Footer";
import Male from "./Male";
import Random from "./Random";
import Female from "./Female";
import About from "./About";
import InputNames from "./InputNames";
import ChangeInput from "./ChangeInput";
import { Route, Routes, useNavigation } from "react-router-dom";
import { useState, useEffect } from "react";


function App() {

  const [active, setActive] = useState(false);
  const [defaultMen, setDefaultMen] = useState(["Sangesh V","Sanjay Raj","Sanjay K", "Sanjay S","Sanjay Gupta","Sanjeetharan","Santhana Mariyappan","Santhosh S","Santhosh Kumar","Saravanan","Sathiyanarayanan","Selva Kumar","Shreyas R","Shyam C","Shyam Sathish","Siddtharth","Sivanesan","SivanthRaj","Sri Balaji","Srinithin","Sriram","Subbu Veerapan","Subramani","Ramprakash","Sudharsan S","Sudharsan P","Sudhir Rao","Suganeswaran","Surya S","Thowfiq Umar","Vasantha Kumar","Vijay Krishnan","Vinoj M","Vishal N","Vitta Hem Kumar","Yuvaraj A"]);
  const [defaultWomen, setDefaultWomen] = useState(["Santhiya R","Shamita H","Shamrutha","Sharika S","Sharmila G","Shivvatharani","Shivvani M","Shobbana S","Silvia Caralyn","Siva Sankari","Solai Srivarshini","Sri Priyadarshini","Srishti","Sruthi R","Sruthilaya","Suba Shree","Sumithra S","Suwetha S","Tharanya B","Varsha N","Varsha TB","Varshini R","Vidhya B","Vivedha A","Yamini R","Yuvabarathi"]);
  const randomMen =() =>{ return defaultMen[Math.floor(Math.random() * defaultMen.length)];};
  const randomWomen =() => { return defaultWomen[Math.floor(Math.random() * defaultWomen.length)];};
  const [maleInput, setMaleInput] = useState('');
  const [femaleInput, setFemaleInput] = useState('');


  return (
    <div className="App">
      <Header
        active = {active}
        setActive = {setActive}
        />
      {
        active && <Menu/>
      }
      
      <Routes>
        <Route  exact path="/" element={<Random
          defaultMen = {defaultMen}
          defaultWomen = {defaultWomen}
          />}/>
        <Route path="/male" element={<Male
          maleInput = {maleInput}
          setMaleInput = {setMaleInput}
          randomWomen = {randomWomen}
          />}/>
        <Route path="/female" element={<Female
          femaleInput = {femaleInput}
          setFemaleInput = {setFemaleInput}
          randomMen = {randomMen}
          />}/>
        <Route path='/about' element={<About/>}/>
        <Route path='/input' element={<InputNames
          defaultMen = {defaultMen}
          defaultWomen = {defaultWomen}
          setDefaultMen = {setDefaultMen}
          setDefaultWomen = {setDefaultWomen}
          />}/>
        <Route path='/changeinput' element={<ChangeInput
          setDefaultMen = {setDefaultMen}
          setDefaultWomen = {setDefaultWomen}
          />}/>
      </Routes>
      <Footer/>
    </div> 
  )
}

export default App;

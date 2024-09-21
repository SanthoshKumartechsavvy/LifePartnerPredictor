
import { FaMale } from 'react-icons/fa'
import { FaRandom } from "react-icons/fa"
import { FaFemale } from "react-icons/fa"
import { NavLink } from "react-router-dom"


const Footer = () => {
  return (
    <footer className="footer">
      <ul>
        <li><NavLink to="/male"  > <FaMale style={{fontSize: '1.2rem'}}/> Male</NavLink></li>
        <li><NavLink to="/"  > <FaRandom style={{fontSize: '1rem'}}/> Random</NavLink></li>
        <li><NavLink to="/female"  > <FaFemale style={{fontSize: '1.2rem'}}/> Female</NavLink></li>
      </ul>
    </footer>
  )
}

export default Footer

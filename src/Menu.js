import { Link } from "react-router-dom"
import useOutsideClick from "./Hooks/useOutsideClick"

const Menu = () => {

  
  return (

    <div className="dropmenu">
        <ul>
        <li><Link to='/input'>Input Names</Link></li>
        <li><Link to='/about'>About</Link></li>
        </ul>
    </div>
  )
}

export default Menu

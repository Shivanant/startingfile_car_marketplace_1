import { NavLink } from "react-router-dom";
import '../App';

const Navigation=()=>{
    return(<nav>

     <div className="logo">
        KOENIGSEGG
     </div>
     <div className="nav-elements">
        <NavLink to="/">
            Home
        </NavLink>
        <NavLink to='/Myitems'>
            Myitems
        </NavLink>
        <NavLink to="/About" >
            About
        </NavLink>

     </div>
     <div className="button">
        <button>0x24rn...232h</button>
     </div>

    </nav>)
}

export default Navigation;
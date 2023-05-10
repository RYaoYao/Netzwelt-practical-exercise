import "./navbar.css"
import { Link ,useNavigate} from "react-router-dom"
import {useContext} from 'react';
import {AuthContext} from "../../context/AuthContext.js"
const Navbar = () => {
    const {loading, error, dispatch} = useContext(AuthContext)
    const user = localStorage.getItem("name")
    const navigate = useNavigate();

  const handleClick = async (e) => {
    dispatch({type:"LOGOUT"});
    localStorage.removeItem("user");
    localStorage.removeItem("name");
    navigate("Account/SignIn");
  }
  return (
    <div className="navbar">
      <div className="navContainer">
        <Link to="/" style={{color:"inherit", textDecoration:"none"}}>
        <span className="logo">Welcome {user}</span>
        </Link>
        <div className="navItems">
          <button className="navButton" onClick={handleClick}>Log Out</button>
        </div>
      </div>
    </div>
  )
}

export default Navbar
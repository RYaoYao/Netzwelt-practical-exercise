import "./login.css"
import {useContext, useState} from 'react';
import {AuthContext} from "../../context/AuthContext.js"
import { useNavigate  } from "react-router-dom";
import axios from "axios"

const Login = () => {

  const navigate = useNavigate();

  const {loading, error, dispatch} = useContext(AuthContext)
  const [user,setUser] = useState('');
  const [pwd, setPwd] = useState('');


  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch({type:"LOGIN_START"})
    try{
      const response = await axios.post("http://localhost:3001/Account/SignIn", {username:user, password:pwd},  {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    }
);
    dispatch({type:"LOGIN_SUCCESS", payload: response.data});
    localStorage.setItem("name", response.data.displayName)
    setUser('');
    setPwd('');
     navigate("/")
    
    }catch(err) {
      dispatch({type:"LOGIN_FAILURE", payload: err.response.data})
      }
    }
  

  return (
      
    <div className="login">
  
    <section>
      {error && <span className="errMsg">{error.message}</span>}
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username"  autoComplete='off' onChange={(e) => setUser(e.target.value)} value={user} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password"onChange={(e) => setPwd(e.target.value)} value={pwd} required/>
        <button>Sign In</button>
      </form>
    </section>
  </div>
  )

}

export default Login
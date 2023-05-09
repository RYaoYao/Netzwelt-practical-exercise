import "./login.css"
import {useRef, useState, useEffect, useContext} from 'react';
import AuthContext from "../../context/authProvider";
import axios from "axios"
const Login = () => {
  const {setAuth} = useContext(AuthContext)
  const userRef = useRef();
  const errRef = useRef();

  const [user,setUser] = useState('');
  const [pwd, setPwd] = useState('');
  const [errMsg, setErrMsg] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() =>{
    userRef.current.focus();
  }, [])

  useEffect(() => {
    setErrMsg('');
  }, [user,pwd])

  const handleSubmit = async (e) => {
    e.preventDefault();
    try{
      const response = await axios.post("http://localhost:3001/Account/SignIn", {username:user, password:pwd},  {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true
    }
);
      console.log(JSON.stringify(response?.data));

      const accessToken = response?.data?.token;
      const roles = response?.data?.roles;

    setAuth({user,pwd,roles,accessToken});
    setUser('');
    setPwd('');
    setSuccess(true);
    }catch(err) {
      if(!err?.response){
        setErrMsg('No server Response');
      }else if(err.response.data.status === 404){
        setErrMsg(err.response.data.message)
      }
      errRef.current.focus();
    }

   

  }
  return (
    <div className="login">
    <> {
      success? (
        <section>
          <h1>You are logged in!</h1>
          <br/>
          <p>
            <a href ='#'>Go to Home</a>
          </p>
        </section>
      ): (
    <section>
      <p ref={errRef} className={errMsg ? "errmsg": "offscreen"} aria-live="assertive">{errMsg}</p>
      <h1>Sign In</h1>
      <form onSubmit={handleSubmit}>
        <label htmlFor="username">Username:</label>
        <input type="text" id="username" ref={userRef} autoComplete='off' onChange={(e) => setUser(e.target.value)} value={user} required/>
        <label htmlFor="password">Password:</label>
        <input type="password" id="password" ref={userRef} onChange={(e) => setPwd(e.target.value)} value={pwd} required/>
        <button>Sign In</button>
      </form>
    </section>
  )} </>
  </div>
  )
}

export default Login
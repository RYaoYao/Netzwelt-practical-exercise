
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login';
import RequireAuth from './components/RequireAuth/RequireAuth';
import Home from './pages/home/Home';
import PersistLogin from './components/PersistLogin/PersistLogin';
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path ="/Account/SignIn" element={<Login />}/>
          <Route element ={<PersistLogin/>}>
          <Route element = {<RequireAuth/>}>
          <Route path="/" element={<Home />}/>
          </Route>
          </Route>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

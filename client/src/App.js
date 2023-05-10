
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login';
import Home from './pages/home/Home';
import RequireAuth from './components/RequireAuth';
import CheckUser from './components/CheckUser'
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route  path ="/Account/SignIn" element={<CheckUser><Login /> </CheckUser>}/>
          <Route path="/" element={<RequireAuth><Home /> </RequireAuth>}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

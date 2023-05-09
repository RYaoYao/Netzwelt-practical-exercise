
import {BrowserRouter, Routes,Route} from 'react-router-dom';
import Login from './pages/login/Login';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Routes>
          <Route path ="/Account/Login" element={<Login />}/>
        </Routes>
      </BrowserRouter>
    
    </div>
  );
}

export default App;

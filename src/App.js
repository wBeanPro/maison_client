
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import DashBoard from './Pages/Home/DashBoard/DashBoard';
import Home from './Pages/Home/Home/Home';
import Shop from './Pages/Home/Shop/Shop';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/Shared/NotFound/PageNotFound';
import TopBar from './Pages/Shared/TopBar/TopBar';

function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />
          <Route path="dashBoard" element={<DashBoard/>}></Route>
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

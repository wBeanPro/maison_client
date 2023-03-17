
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import './App.css';
import AuthProvider from './Pages/AuthProvider/AuthProvider';
import AddProducts from './Pages/Home/AddProducts/AddProducts';
import EmailContact from './Pages/Home/EmailContact/EmailContact';
import ManageProducts from './Pages/Home/ManageProducts/ManageProducts';
import DashBoard from './Pages/Home/DashBoard/DashBoard';
import MyOrders from './Pages/Home/DashBoard/MyOrders/MyOrders';
import Payment from './Pages/Home/DashBoard/Payment/Payment';
import UserReviews from './Pages/Home/DashBoard/UserReviews/UserReviews';
import UsersReview from './Pages/Home/DashBoard/UsersReview/UsersReview';
import Home from './Pages/Home/Home/Home';
import MakeAdmin from './Pages/Home/MakeAdmin/MakeAdmin';
import ProductDetails from './Pages/Home/ProductDetails/ProductDetails';
import Shop from './Pages/Home/Shop/Shop';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import PageNotFound from './Pages/Shared/NotFound/PageNotFound';
import TopBar from './Pages/Shared/TopBar/TopBar';
import PrivateRoute from './Pages/PrivateRoute/PrivateRoute';
import Footer from './Pages/Shared/Footer/Footer';


function App() {
  return (
    <div>
      <AuthProvider>
      <BrowserRouter>
      <TopBar/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="shop" element={<Shop />} />
          <Route path="shop/:id" element={
            <PrivateRoute>
              <ProductDetails/>
            </PrivateRoute>
          } />
          <Route path="login" element={<Login/>} />
          <Route path="register" element={<Register />} />

          <Route path="dashBoard" element={<DashBoard/>}>
            <Route path="myOrders" element={<MyOrders/>} />
            <Route path="usersReview" element={<UsersReview/>} />
            <Route path="payment" element={<Payment/>} />
            <Route path="userReviews" element={<UserReviews/>} />
            <Route path="makeAdmin" element={<MakeAdmin/>} />
            <Route path="addProducts" element={<AddProducts/>} />
            <Route path="manageProducts" element={<ManageProducts/>} />
          </Route>
          <Route path="emailContact" element={<EmailContact/>} />
          <Route path="*" element={<PageNotFound />}/>
        </Routes>
        <Footer/>
      </BrowserRouter>
      </AuthProvider>
    </div>
  );
}

export default App;

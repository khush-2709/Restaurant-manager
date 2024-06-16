import React, { useState } from 'react'
import Navbar from './components/Navbar/Navbar'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/Home/Home'
import Cart from './pages/Cart/Cart'
import PlaceOrder from './pages/PlaceOrder/PlaceOrder'
import Feedback from './pages/Feedback/Feedback'
import Footer from './components/Footer/Footer'
import Login from './components/Login/Login'
import MyOrders from './pages/MyOrders/MyOrders'
import Verify from './pages/Verify/Verify'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

 const [showLogin,setShowLogin] = useState(false)

  return (
    <>
    <ToastContainer/>
    {showLogin?<Login setShowLogin={setShowLogin}/> :<></>}
    <div className='app'>
      <Navbar setShowLogin={setShowLogin}/>
      <Routes>
        <Route path='/' element={<Home/>} />
        <Route path="/cart" element={<Cart/>} />
        <Route path="/order" element={<PlaceOrder/>} />
        <Route path='/feedback' element={<Feedback />} />
        <Route path='/myorders' element={<MyOrders />}/>
        <Route path='/verify' element={<Verify />}/>
      </Routes>
    </div>
    <Footer />
    </>
    
  )
}

export default App

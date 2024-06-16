import React, { useContext, useState } from 'react'
import './Navbar.css'
import { assets } from '../../assets/assets'
import { Link, useNavigate } from 'react-router-dom';
import { StoreContext } from '../../context/storeContext';

const Navbar = ({setShowLogin}) => {

    const [menu,setMenu]= useState("home");

    const {getTotalCartAmount, token, setToken} = useContext(StoreContext)

    const navigate = useNavigate();

    const logout = () => {
      localStorage.removeItem("token");
      setToken("");
      navigate('/')
    }

  return (
    <div className='navbar'>
        <Link to='/'><img src={assets.logo} alt="" className="logo" /></Link>
        <ul className="navbar-menu">
            <Link to='/' onClick={()=>setMenu("home")} className={menu==="home" ? "active":""}>home</Link>
            <a href='#explore-menu' onClick={()=>setMenu("menu")} className={menu==="menu" ? "active":""}>menu</a >
            <Link to='/feedback' onClick={()=>setMenu("review")} className={menu==="review" ? "active":""}>review</Link>
            <a href='#footer' onClick={()=>setMenu("contact us")} className={menu==="contact us" ? "active":""}>contact us</a>
        </ul>
        <div className="navbar-right">
            <img src={assets.search_icon} alt=""/>
            <Link to ='/cart' className="navbar-search-icon">
             <img src={assets.basket_icon} alt="" />
             </Link>
            <div className="dot">

            </div>
            {!token ? <button onClick={() => setShowLogin(true)}>sign in</button>
              : <div className='navbar-profile'>
              <img src={assets.profile_icon} alt="" />
            <ul className='navbar-profile-dropdown'>
              {/*<li onClick={()=>navigate('/myorders')}> <img src={assets.bag_icon} alt="" /> <p>Orders</p></li>*/}
              <hr />
              <li onClick={logout}> <img src={assets.logout_icon} alt="" /> <p>Logout</p></li> 
            </ul>
          </div>
        }
        </div>
      
    </div>
  )
}

export default Navbar

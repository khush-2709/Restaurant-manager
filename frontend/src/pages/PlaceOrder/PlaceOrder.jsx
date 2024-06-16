import React, { useEffect, useState } from 'react'
import './PlaceOrder.css'
import { useContext } from 'react'
import { StoreContext } from '../../context/storeContext'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import axios from 'axios'
import { assets } from '../../assets/assets'



const PlaceOrder = () => {

  const [payment, setPayment] = useState("cod")

  const {getTotalCartAmount, token, food_list,cartItems,url, setCartItems, currency, taxes} = useContext(StoreContext)
const [data,setData] = useState({
  firstName: "",
  lastName: "",
  email: "",
  table: "",
  address: "",  
  phone: ""
})

const navigate = useNavigate();

const onChangeHandler = (event) => {
  const name = event.target.name
  const value = event.target.value
  setData(data => ({ ...data, [name]: value }))
}

const placeOrder = async (event) => {
  event.preventDefault()
  let orderItems = [];
  food_list.map(((item) => {
      if (cartItems[item._id] > 0) {
          let itemInfo = item;
          itemInfo["quantity"] = cartItems[item._id];
          orderItems.push(itemInfo)
      }
  }))
  let orderData = {
      address: data,
      items: orderItems,
      amount: getTotalCartAmount() + taxes,
  }
  if (payment === "stripe") {
      let response = await axios.post(url + "/api/order/place", orderData, { headers: { token } });
      if (response.data.success) {
          const { session_url } = response.data;
          window.location.replace(session_url);
      }
      else {
          toast.error("Something Went Wrong")
      }
  }
  else{
      let response = await axios.post(url + "/api/order/placecod", orderData, { headers: { token } });
      if (response.data.success) {
          //navigate("/myorders")
          toast.success(response.data.message)
          setCartItems({});
      }
      else {
          toast.error("Something Went Wrong")
      }
  }

}

/*useEffect(() => {
  if (!token) {
      toast.error("to place an order sign in first")
      navigate('/cart')
  }
  else if (getTotalCartAmount() === 0) {
      navigate('/cart')
  }
}, [token])*/

  return (
    <form onSubmit={placeOrder} className='place-order'>
      <div className="place-order-left">
          <p className='title'>Order Information</p>
          <div className="multi-fields">
            <input name='firstName' type='text' placeholder='First name' onChange={onChangeHandler} value={data.firstName}  required />
            <input name ='lastName'type='text' onChange={onChangeHandler} value={data.lastName} placeholder='Last name' required/>

          </div>
          <div className='multi-fields'>
            <input name='table' type='text' placeholder='Table Number' onChange={onChangeHandler} value={data.table}  required/>
            <input name='address' type='text' placeholder='Address' onChange={onChangeHandler} value={data.address} required />
          </div>
          <input name='email'type='email' placeholder='Email address' onChange={onChangeHandler} value={data.email}  required />
          
          <input name='phone' type='text' placeholder='Phone No' onChange={onChangeHandler} value={data.phone}  required/>
      </div>
      <div className="place-order-right">
      <div className="cart-total">
          <h2>Cart Total</h2>
          <div>
            <div className="cart-total-details">
              <p>Subtotal</p>
              <p>${getTotalCartAmount()}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <p>Taxes</p>
              <p>${getTotalCartAmount()===0?0:5}</p>
            </div>
            <hr />
            <div className="cart-total-details">
              <b>Total</b>
              <b>${getTotalCartAmount()===0?0:getTotalCartAmount()+5}</b>
            </div>
          </div>
          
        </div>
                <div className="payment">
                    <h2>Payment Method</h2>
                    <div onClick={() => setPayment("cod")} className="payment-option">
                        <img src={payment === "cod" ? assets.checked : assets.un_checked} alt="" />
                        <p>COD ( Cash on delivery )</p>
                    </div>
                    <div onClick={() => setPayment("stripe")} className="payment-option">
                        <img src={payment === "stripe" ? assets.checked : assets.un_checked} alt="" />
                        <p>Stripe ( Credit / Debit )</p>
                    </div>
                </div>
                <button className='place-order-submit' type='submit'>{payment==="cod"?"Place Order":"Proceed To Payment"}</button>
        {/*<div className="cart-promocode">
          <div>
            <p>If you have a promo code, Enter it here</p>
            <div className='cart-promocode-input'>
              <input type="text" placeholder='promo code'/>
              <button>Submit</button>
            </div>
          </div>
        </div>*/}

      </div>
      
    </form>
  )
}

export default PlaceOrder

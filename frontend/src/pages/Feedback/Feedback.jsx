import React, { useContext } from 'react'
import './Feedback.css'
import { useState } from 'react';
import axios from "axios"
import {toast} from "react-toastify";
import { StoreContext } from '../../context/storeContext';



const Feedback = () => {


  const url = "http://localhost:4000"
  const {token} = useContext(StoreContext)
 

    const [data, setData] = useState({
        name: "",
        taste: "",
        cleanliness:"",
        service:"",
        ambience:"",
        price: "",
        
    });

  

    const onSubmitHandler = async (event) => {
        event.preventDefault();
        const formData = new FormData();
        formData.append("name", data.name);
        formData.append("taste", Number(data.taste));
        formData.append("cleanliness", Number(data.cleanliness));
        formData.append("service", Number(data.service));
        formData.append("ambience", Number(data.ambience));
        formData.append("price", Number(data.price));
        ;
        const response = await axios.post(`${url}/api/feedback/submit`, formData,  {headers: { token } });
        if (response.data.success) {
            toast.success(response.data.message)
           
      
              
            
        }
        else{
            toast.error(response.data.message)
        }
    }

    const onChangeHandler = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        setData(data => ({ ...data, [name]: value }))
    }
  return (
    
    <form className='feeback-form' onSubmit={onSubmitHandler}>
    <div className="feedback">
      <p className='title1'>Feedback Form</p>
        <div className="multi-fields">
          <input type='text' name='name' onChange={onChangeHandler} value={data.name} placeholder='First name' required />
          <input type='text' placeholder='Last name'/>
        </div>
        <p className='title'>Please rate on a scale of 1 - 5</p>
        <div className='multi-fields'>
          <input type='text' name='taste' onChange={onChangeHandler} value={data.taste} placeholder='Taste' required/>
          <input type='text' name='cleanliness' onChange={onChangeHandler} value={data.cleanliness} placeholder='Cleanliness' required />
          <input type='text' name='ambience' onChange={onChangeHandler} value={data.ambience} placeholder='Ambience' required/>
          <input type='text' name='service' onChange={onChangeHandler} value={data.service} placeholder='Service' required/>
          <input type='text' name='price' onChange={onChangeHandler} value={data.price} placeholder='Price' required/>
        </div>
        
        
        <input type='paragraph' placeholder='Any other suggestions'/>
        <button type="submit">SUBMIT</button>
    </div>

    </form>
  )
}

export default Feedback

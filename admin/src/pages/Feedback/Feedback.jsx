import React, { useEffect, useState } from 'react'
import './Feedback.css'

import axios from 'axios';
import { toast } from 'react-toastify';

const List = ({url}) => {

  const [list,setList] = useState([]);
  
  const fetchList = async () => {
    const response = await axios.get(`${url}/api/feedback/list`)
    if(response.data.success)
    {
      setList(response.data.data);
    }
    else{
      toast.error("Error")
    }
  }

  
  useEffect(()=>{
    fetchList();
  },[])

  return (
    <div className='list add flex-col'>
        <p className='feedback'>List of Feedbacks</p>
        <div className='list-table'>
          <div className="list-table-format title">
            
            <b>Name</b>
            <b>Taste</b>
            <b>Cleanliness</b>
            <b>Service</b>
            <b>Ambience</b>
            
            
          </div>
          {list.map((item,index)=>{
            return (
              <div key={index} className='list-table-format'>
                
                <p> {item.name}</p>
                <p>{item.taste}</p>
                <p>{item.cleanliness}</p>
                <p> {item.service}</p>
                <p> {item.ambience}</p>
               
                
              </div>
            )
          })}
        </div>
    </div>
  )
}

export default List
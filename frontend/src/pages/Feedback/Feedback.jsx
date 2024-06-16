import React from 'react'
import './Feedback.css'


const Feedback = () => {
  return (
    
    <form className='feeback-form'>
    <div className="feedback">
      <p className='title1'>Feedback Form</p>
        <div className="multi-fields">
          <input type='text' placeholder='First name' />
          <input type='text' placeholder='Last name'/>
        </div>
        <p className='title'>Please rate on a scale of 1 - 5</p>
        <div className='multi-fields'>
          <input type='text' placeholder='Taste'/>
          <input type='text' placeholder='Cleanliness' />
          <input type='text' placeholder='Ambience'/>
          <input type='text' placeholder='Service'/>
          <input type='text' placeholder='Price'/>
        </div>
        
        
        <input type='paragraph' placeholder='Any other suggestions'/>
        <button >SUBMIT</button>
    </div>

    </form>
  )
}

export default Feedback

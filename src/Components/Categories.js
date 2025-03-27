import React from 'react'
import "./Categories.scss"
import tshirt from './Assets/red tshirt.jpg'
const Categories = () => {
  return (
    <div className='categories'>
        
        <div className='list'>
      <img src={tshirt} alt="Description of image"/>
       <h3>Mens</h3>
      </div>
      <div className='list'>
      <img src={tshirt} alt="Description of image"/>
      <h3>Women</h3>
      </div>
      <div className='list'>
        <img src={tshirt} alt="Description of image"/>
      <h3>Kids</h3>
      </div>
        
     
    </div>
  )
}

export default Categories

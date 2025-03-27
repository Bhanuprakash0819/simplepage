import React from 'react'
import "./Dashboard.scss";
const Dashboard = () => {
  return (
    <div className='dashboard'>
        <div className='sales'>
          <h2>Total Sales</h2>
          <p>9 units</p>
        </div>
        <div className='order-requests'>
          <h2>New Order Requests</h2>
          <p>0</p>
        </div>
        <div className='orders-received'>
          <h2>Pie chart</h2>
        </div>
      </div>
  )
}

export default Dashboard

import React from 'react'
import { useNavigate } from 'react-router-dom'
function Customers() {
    const navigate=useNavigate();
  return (
    <div>Customers
        {/* table of customers and products by customers 
        and from product in table to edit product*/}

        <button onClick={navigate('./AllProducts')}>Add product</button>
    </div>
  )
}

export default Customers
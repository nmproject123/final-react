import React from 'react'
import DataPurchases from './DataPurchases'
import { useNavigate } from 'react-router-dom'
function EditCustomer() {
    const navigate=useNavigate()
  return (
    <div>EditCustomer
        <DataPurchases/>
        {/* בלחיצה על הכפתורים יקרה האירוע */}
        <button onClick={navigate('./AllProducts')}>Add</button>
        <button>Delete</button>
    </div>
  )
}

export default EditCustomer
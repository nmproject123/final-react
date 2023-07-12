import React,{useState} from 'react'
import ShowAllCustomers from './ShowAllCustomers'
import ShowAllProducts from './ShowAllProducts'


function Purchases() {
    const [customer, setCuseomer] = useState('');
    const [product, setProduct] = useState('');
    const [date, setDate] = useState('');
    return (
        <div>Purchases
            all customers in combobox <ShowAllCustomers />
            <br />
            all customers in combobox <ShowAllProducts />
            <br />
            Date : <input type='date' />
            <br />
            {/* button on search call to function search */}
            <button>Search</button>

        </div>
    )
}

export default Purchases
import React from 'react'
import { Outlet, Link } from 'react-router-dom'
import TotalProduct from './TotalProduct'
import NameProduct from './NameProduct'

function Products() {
   
    return (
        <div>Products <br /> total product<TotalProduct /><br />
            <NameProduct />

            <Link to="./EditProduct" >EditProduct from list</Link>
            <Outlet />
        </div>
    )
}

export default Products
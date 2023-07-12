import React from 'react'
import { Link, Outlet } from 'react-router-dom';

function Menu() {

    return (
        <div>Menu

            <Link to="Customers" >Customers</Link>
            <Link to="./Products" >Products</Link>
            <Link to="./Purchases" >Purchases</Link>
            <Outlet />

        </div>
    )
}

export default Menu
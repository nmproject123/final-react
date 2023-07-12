import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NameProduct() {

  return (
    <div>NameProduct

      <Link to="EditProduct">name customer from list</Link>
      <Outlet />
    </div>
  )
}

export default NameProduct
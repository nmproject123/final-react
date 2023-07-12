import React from 'react'
import { Link, Outlet } from 'react-router-dom'

function NameCastomers() {

    return (
        <div>NameCastomers

            <Link to="./EditCastomer">NameCastomers from list</Link>
            <Outlet />
        </div>
    )
}

export default NameCastomers
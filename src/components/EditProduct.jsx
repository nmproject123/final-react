import React, { useState } from 'react'
import NameCastomers from './NameCastomers'

function EditProduct() {
    const [pro, setPro] = useState({ name: "", price: 0, quentity: 0 })

    return (
        <div>
            <h1>EditProduct</h1>
            <form method='POST' onSubmit={(e) => e.preventDefault()}>

                name: <input type='text' defaultValue={pro.name} onChange={(e) => setPro({ name: e.target.value })} />
                <br />
                price: <input type='text' defaultValue={pro.price} onChange={(e) => setPro({ price: e.target.value })} />
                <br />
                quentity: <input type='text' defaultValue={pro.quentity} onChange={(e) => setPro({ quentity: e.target.value })} />
                <br />
                {/* בלחיצה על עדכון המוצר יתעדכן ברידקס */}
                <button type='submit'>Edit</button>
                <button type='submit'>Delete</button>
            </form>
            <NameCastomers />
        </div>
    )
}

export default EditProduct
import React from 'react'

const PurchaseList = ({ id, name, price }) => {
    const style = {
        display: "flex",
    }

    return (
        <li className='dropdown-item' style={style}>
            <span>{name} - {price}€</span>
            {/* <button className='btn btn-danger' onClick={eraseItem}> X </button> */}
        </li>
    )
}

export default PurchaseList
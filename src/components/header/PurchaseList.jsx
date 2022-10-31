const PurchaseList = ({ quantity, id, name, price }) => {
    const style = {
        display: "flex",
    }

    return (
        <li className='dropdown-item' style={style}>
            <span>{quantity}x {name} - {price}€</span>
            {/* <button className='btn btn-danger' onClick={eraseItem}> X </button> */}
        </li>
    )
}

export default PurchaseList
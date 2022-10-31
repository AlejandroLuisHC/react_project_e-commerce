const PurchaseList = ({ add, sub, quantity, id, name, price }) => {
    const style = {
        display: "flex",
        fontSize: "14px",
    }
    const btnStyle = {
        border: "none",
        padding: "0 5px",
        color: "white",
        height: "20px",
        fontSize: "13px",
        borderRadius: "5px",
        width: "20px",
        backgroundColor: "rgba(56, 57, 65, .6)",
        cursor: "pointer",  
    }

    return (
        <li className="p-3 pt-1 dropdown-item-text" style={style}>
            <span><button onClick={()=>sub(id)} style={btnStyle}>-</button> {quantity} u. <button onClick={()=>add(id)} style={btnStyle}>+</button> {name} - {price}€</span>
        </li>
    )
}

export default PurchaseList
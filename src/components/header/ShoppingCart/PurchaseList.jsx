import accounting from 'accounting';
import { add, sub } from '../../../helper/utils/modifyCart';

const PurchaseList = ({ setItems, quantity, id, name, price, items }) => {
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
        backgroundColor: "rgb(136, 137, 145)",
        cursor: "pointer",  
    }
    
    return (
        <li className="p-3 pt-1 dropdown-item-text" style={style}>
            <span><button onClick={()=>sub(id, items, setItems)} style={btnStyle}>-</button> {quantity} u. <button onClick={()=>add(id, items, setItems)} style={btnStyle}>+</button> {name} - {accounting.formatMoney(price, {symbol:"€", format:"%v %s"})}</span>
        </li>
    )
}

export default PurchaseList
import accounting from 'accounting';
import { useDispatch } from 'react-redux';
import { addToQuantity, subtractFromQuantity } from '../../../redux/features/userData/userSlice';

const PurchaseList = ({ quantity, id, name, price, items }) => {
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
    const dispatch = useDispatch();

    return (
        <li className="p-3 pt-1 dropdown-item-text" style={style}>
            <span><button onClick={() => dispatch(subtractFromQuantity(id))} style={btnStyle}>-</button> {quantity} u. <button onClick={() => dispatch(addToQuantity(id))} style={btnStyle}>+</button> {name} - {accounting.formatMoney(price, {symbol:"€", format:"%v %s"})}</span>
        </li>
    )
}

export default PurchaseList
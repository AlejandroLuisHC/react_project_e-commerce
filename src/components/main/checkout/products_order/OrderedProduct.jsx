import accounting from "accounting";
import { TrashFill } from "react-bootstrap-icons";
import { useDispatch } from 'react-redux';
import { ADD_TO_QUANTITY, SUBTRACT_FROM_QUANTITY, ERASE_FROM_CART } from '../../../../redux/features/cartData/cartSlice';

const OrderedProduct = ({ id, name, price, img, subTotal, quantity }) => {
    const imgStyle = {
      borderRadius: "5px",
      border: "1px "
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
        <>
        <div>
            <div className="d-flex mb-2 align-items-center justify-content-between">
                <div className="text-white">
                    <button className="btn btn-outline-danger btn-sm me-4" onClick={() => dispatch(ERASE_FROM_CART(id))}><TrashFill /></button>
                    <button style={btnStyle} onClick={() => dispatch(SUBTRACT_FROM_QUANTITY(id))}>-</button>  {quantity} x <button onClick={() => dispatch(ADD_TO_QUANTITY(id))} style={btnStyle}>+</button> {name} - <b>{accounting.formatMoney(subTotal, {symbol:"€", format:"%v %s"})}</b> 
                    <small>{
                    quantity > 1 ? ` (${accounting.formatMoney(price, {symbol:"€", format:"%v %s"})}/u)` : null
                    }</small>
                </div>
                <img style={imgStyle} src={img} alt={name} width="60px" />
            </div>
        </div>
        <hr/>
        </>
    )
}

export default OrderedProduct
import { useOutletContext } from 'react-router-dom';
import OrderedProduct from './OrderedProduct';
import accounting from "accounting";
import getTotal from '../../../../helper/utils/getTotal';

const DisplayCart = () => {
    const [, items] = useOutletContext();
    const title = {
        color: "#eee",
        textShadow: "1px 1px 5px rgba(0, 0, 0, .6)",
    }
    const sectionStyle = {
        border: "2px solid rgb(26, 27, 35)",
        borderRadius: "8px",
        padding: "10px",
        width: "100%",
    }

    const totalPrice = getTotal(items);
    const fees = 1.99;
    const taxes21 = (fees + totalPrice) * 0.21;

    return (
        <section style={sectionStyle}>
            <h2 style={title}>Your order</h2>
            {items.map(i =>
                <OrderedProduct key = {i.id}
                    id       = {i.id}
                    name     = {i.name} 
                    price    = {i.price}
                    subTotal = {i.price * i.quantity}
                    img      = {i.img}
                    quantity = {i.quantity}
                />
            )}
            <div className='d-flex flex-column align-items-end text-white justify-content-end'>
                <p>Sub total: {accounting.formatMoney(totalPrice, {symbol:"€", format:"%v %s"})}</p>
                <p>Fees: {accounting.formatMoney(fees, {symbol:"€", format:"%v %s"})}</p>
                <p>Taxes (21%): {accounting.formatMoney(taxes21, {symbol:"€", format:"%v %s"})}</p>
                <p className='fs-2'><b>Total: {accounting.formatMoney(totalPrice + taxes21, {symbol:"€", format:"%v %s"})}</b></p>
            </div>
        </section>
    )
}

export default DisplayCart
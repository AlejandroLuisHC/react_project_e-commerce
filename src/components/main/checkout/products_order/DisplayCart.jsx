import OrderedProduct from './OrderedProduct';
import accounting from "accounting";
import getTotal from '../../../../helper/utils/getTotal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import arrivalTime from '../../../../helper/utils/arrivalTime';
import { useEffect } from 'react';
import fetchPromotions from '../../../../api/fetchPromotions';

const DisplayCart = () => {
    const items = useSelector((state) => state.userData.cart)

    const title = {
        color: "#eee",
        textShadow: "1px 1px 5px rgba(0, 0, 0, .6)",
    }
    const sectionStyle = {
        border: "2px solid rgb(26, 27, 35)",
        borderRadius: "8px",
        padding: "10px",
        width: "100%",
        color: "#eee"
    }

    const [shipping, setShipping] = useState({
        price: 0, 
        time: 3, 
        free: "checked",
        standard: "",
        premium: "" 
    })
    const changeShipping = ({target}) => {
        if (target.checked){
            switch(target.id) {
                case "free": 
                    target.checked = true;
                    setShipping(prev => prev = {
                        price: 0, 
                        time: 3, 
                        free: "checked",
                        standard: "",
                        premium: ""
                    })
                    break
                case "standard":
                    target.checked = true;
                    setShipping(prev => prev = {
                        price: 1.99, 
                        time: 2, 
                        free: "",
                        standard: "checked",
                        premium: ""
                    })
                    break
                case "premium": 
                    target.checked = true;
                    setShipping(prev => prev = {
                        price: 3.99, 
                        time: 1, 
                        free: "",
                        standard: "",
                        premium: "checked"
                    })
                    break
                default:
                    break;
            };
        }
    }
    const totalPrice = getTotal(items);
    const fees = 1.99;
    const taxes21 = (fees + totalPrice + shipping.price) * 0.21;

    // Promotional code 
    const [promotionsAvailable, setPromotionsAvailable] = useState([])
    useEffect(() => {
        const retrievePromotions = async() => {
            const data = await fetchPromotions();
            setPromotionsAvailable(prev => prev = data)
        }
        retrievePromotions();
    }, [])
    const [promotion, setPromotion] = useState("")
    const changeCode = ({ target }) => {
        setPromotion(prev => prev = target.value)
    }
    const existPromotion = promotionsAvailable.find(p => p.code === promotion)
    const checkPromotion = existPromotion ? "form-control is-valid" : "form-control"

    const total = () => {
        if (!existPromotion){
            return accounting.formatMoney(totalPrice + fees + shipping.price + taxes21, {symbol:"€", format:"%v %s"});
        } else {
            switch (existPromotion.promo) {
                case '5% less':
                    const totDisc = (totalPrice + fees + shipping.price + taxes21) * .05
                    const tot = (totalPrice + fees + shipping.price + taxes21) - totDisc
                    return accounting.formatMoney(tot, {symbol:"€", format:"%v %s"});
                case 'free shipping':
                    const taxes = (fees + totalPrice) * 0.21
                    return accounting.formatMoney(totalPrice + fees + taxes, {symbol:"€", format:"%v %s"});
                default:
                    return accounting.formatMoney(totalPrice + fees + shipping.price + taxes21, {symbol:"€", format:"%v %s"});
            }
        }
    }
    return (
        <section style={sectionStyle}>
            <h2 style={title}>Your order</h2>
            <div>
                <fieldset>
                    <legend>Select your shipping method:</legend>
                    <form action="">
                        <div className='form-group d-flex gap-2'>
                            <input id="free" type="radio" name="shipping" onChange={changeShipping} checked={shipping.free}/>
                            <label htmlFor="free">Free shipping (72h)</label>
                        </div>
                        <div className='form-group d-flex gap-2'>
                            <input id="standard" type="radio" name="shipping" onChange={changeShipping} checked={shipping.standard}/>
                            <label htmlFor="standard">Standard shipping (48h) +1.99€</label>    
                        </div>
                        <div className='form-group d-flex gap-2'>
                            <input id="premium" type="radio" name="shipping" onChange={changeShipping} checked={shipping.premium}/>
                            <label htmlFor="premium">Premium shipping (24h) +3.99€</label>
                        </div>
                    </form>
                </fieldset>
            </div>
            <hr />
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
            <div className='d-flex flex-column align-items-end text-white justify-content-end gap-3'>
                <div className='d-flex flex-column align-items-end'>
                    <p>Sub total: {accounting.formatMoney(totalPrice, {symbol:"€", format:"%v %s"})}</p>
                    <p>Shipping: {accounting.formatMoney(shipping.price, {symbol:"€", format:"%v %s"})}</p>
                    <p>Fees: {accounting.formatMoney(fees, {symbol:"€", format:"%v %s"})}</p>
                    <p>Taxes (21%): {accounting.formatMoney(taxes21, {symbol:"€", format:"%v %s"})}</p>
                    <div className='d-flex gap-5'>
                        <label>Promotional code: 
                            <input className={checkPromotion} type="text" onChange={changeCode} value={promotion} />
                            <p className='valid-feedback'>{existPromotion ? `Promo: ${existPromotion.promo}` : ""}</p>
                        </label>
                        <p className='fs-1'><b>Total: {total()}</b></p>
                    </div>
                </div>
                <p>Estimated arrival date: <b>{arrivalTime(shipping.time)}</b></p>
            </div>
        </section>
    )
}

export default DisplayCart
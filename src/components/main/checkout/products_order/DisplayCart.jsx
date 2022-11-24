import OrderedProduct from './OrderedProduct';
import accounting from "accounting";
import getTotal from '../../../../helper/utils/getTotal';
import { useSelector } from 'react-redux';
import { useState } from 'react';
import arrivalTime from '../../../../helper/utils/arrivalTime';
import { useEffect } from 'react';
import fetchPromotions from '../../../../api/fetchPromotions';
import { H2 } from '../../../style/H2'
import { SectionOrder } from '../../../style/checkoutStyle';
import changeShipping from '../../../../helper/utils/changeShipping';


const DisplayCart = () => {
    const items = useSelector((state) => state.cartData.cart)
    
    const totalPrice = getTotal(items);
    const fees = 1.99;
    const [shipping, setShipping] = useState({
        price: 0, 
        time: 3, 
        free: "checked",
        standard: "",
        premium: "" 
    })
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

    // Get total
    const totalSum = () => {
        if (!existPromotion){
            const tot = totalPrice + fees + shipping.price + taxes21;
            localStorage.setItem('total', JSON.stringify(tot))
            return accounting.formatMoney(tot, {symbol:"€", format:"%v %s"});
        } else {
            switch (existPromotion.promo) {
                case '5% less':
                    const totDisc = (totalPrice + fees + shipping.price + taxes21) * .05
                    const tot5 = (totalPrice + fees + shipping.price + taxes21) - totDisc
                    localStorage.setItem('total', JSON.stringify(tot5))
                    return accounting.formatMoney(tot5, {symbol:"€", format:"%v %s"});
                case 'free shipping':
                    const taxes = (fees + totalPrice) * 0.21
                    const totShip = totalPrice + fees + taxes;
                    localStorage.setItem('total', JSON.stringify(totShip))
                    return accounting.formatMoney(totShip, {symbol:"€", format:"%v %s"});
                default:
                    const totDef = totalPrice + fees + shipping.price + taxes21;
                    localStorage.setItem('total', JSON.stringify(totDef))
                    return accounting.formatMoney(totDef, {symbol:"€", format:"%v %s"});
            }
        }
    }

    return (
        <SectionOrder>
            <H2>Your order</H2>
            <div>
                <fieldset>
                    <legend>Select your shipping method:</legend>
                    <form action="">
                        <div className='form-group d-flex gap-2'>
                            <input id="free" type="radio" name="shipping" onChange={e => changeShipping(e, setShipping)} checked={shipping.free}/>
                            <label htmlFor="free">Free shipping (72h)</label>
                        </div>
                        <div className='form-group d-flex gap-2'>
                            <input id="standard" type="radio" name="shipping" onChange={e => changeShipping(e, setShipping)} checked={shipping.standard}/>
                            <label htmlFor="standard">Standard shipping (48h) +1.99€</label>    
                        </div>
                        <div className='form-group d-flex gap-2'>
                            <input id="premium" type="radio" name="shipping" onChange={e => changeShipping(e, setShipping)} checked={shipping.premium}/>
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
                        <p className='fs-1'><b>Total: {totalSum()}</b></p>
                    </div>
                </div>
                <p>Estimated arrival date: <b>{arrivalTime(shipping.time)}</b></p>
            </div>
        </SectionOrder>
    )
}

export default DisplayCart
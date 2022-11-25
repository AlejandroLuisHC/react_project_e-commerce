import accounting from 'accounting';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { DivConfirmation, MainConfirm, PConfirmation, SectionConfirm, UlConfirm } from '../components/style/confirmPayStyle';
import { H2 } from '../components/style/H2';
import { emptyCart } from '../redux/features/cartData/cartSlice';
import { addOrder } from '../redux/features/ordersData/ordersSlice';

const ConfirmPayment = () => {
    const {total, shipping, payment, cart} = JSON.parse(localStorage.getItem('orderInfo'))
    const navigate = useNavigate()
    const dispatch = useDispatch()
    const user = useSelector((state) => state.userData.user)
    const [confirmed, setConfirmed] = useState(false)
    
    const cancelPayment = () => {
        localStorage.clear();
        navigate('/checkout');
    }
    const date = new Date();
    const order = {
        id: "",
        date: `${date.getDate()}/${date.getMonth() + 1}/${date.getFullYear()} - ${date.getHours()}h ${date.getMinutes()}min ${date.getSeconds()}s`, 
        fullname: shipping.fullName,
        email: shipping.email,
        phone: shipping.phone,
        country: shipping.country,
        address: shipping.address,
        postalCode: shipping.postalCode,
        shippingMethod: shipping.method, 
        cardNum: payment.cardNum,
        products: cart, 
        total: total,
    }

    const confirmPayment = () => {
        dispatch(addOrder(order));
        setConfirmed(prev => prev = true)
        setTimeout(() => {
            localStorage.clear();
            dispatch(emptyCart());
            navigate('/');
        }, 15000);
    }

    return (
        <MainConfirm>
            <SectionConfirm>
                <div className='d-flex flex-column gap-4'>
                    <div>
                        <H2>Shipping destination:</H2>
                        <UlConfirm>
                            <li>{shipping.fullName}</li>
                            <li>{shipping.address}</li>
                            <li>{shipping.postalCode}</li>
                            <li>{shipping.country}</li>
                            <li>{shipping.email}</li>
                            <li>{shipping.phone}</li>
                            <li>{shipping.method}</li>
                        </UlConfirm>
                    </div>
                    <div>
                        <H2>Payment method:</H2>
                        <UlConfirm>
                            <li>Payment card: {payment.cardNum}</li>
                        </UlConfirm>
                    </div>
                    <div>
                        <H2>TOTAL:</H2>
                        <H2>{accounting.formatMoney(total, {symbol:"€", format:"%v %s"})}</H2>
                    </div>
                    {!confirmed &&
                        <div className='d-flex gap-3'>
                            <button className='btn btn-success btn-lg' onClick={confirmPayment}>Confirm & Buy</button>
                            <button className='btn btn-outline-warning btn-lg' onClick={cancelPayment}>Cancel</button>
                        </div>
                    }
                    {confirmed &&
                        <DivConfirmation>
                            <PConfirmation>Congratulations! Your ordered has been proceeded!</PConfirmation>
                            <p>A copy of the order process and the receipt will be send to your email: <b>{user.email}</b></p>
                            <p>You will be redirected home now.</p>
                        </DivConfirmation>
                    }
                </div>
                <div>
                    <H2>Products ordered: </H2>
                    <UlConfirm>
                        {cart?.map(e => {
                            return(
                              <li>{e.quantity} x {e.name}</li>  
                            );
                        })}
                    </UlConfirm>
                </div>
            </SectionConfirm>
        </MainConfirm>
    )
}

export default ConfirmPayment
import { memo, useState } from 'react'
import { useSelector } from 'react-redux'
import useFormController from '../../../../hooks/useFormController'
import { H2 } from '../../../style/H2.js'
import { FormShipping } from '../../../style/checkoutStyle'
import useFormPayment from '../../../../hooks/useFormPayment'
import { Navigate } from 'react-router-dom'

const ShippingForm = () => {
    // Upload default form values depending on the user
    const user = useSelector((state) => state.userData.user)
    const cart = useSelector((state) => state.cartData.cart)

    // Manage of values by "useFormController()" <-- custom hook
    const { form, changeValue } = useFormController(user)

    // Manage inputs validation state
    const inputCheck = (a, b, c, d, e, f) => {
        return (a && b && c && d && e && f) ? true : false;
    };
    
    const validCountry      = form.country.length > 3 ? true : false;
    const validAddress      = form.address.length > 0 ? true : false;
    const validPostalCode   = form.postalCode.length === 5 ? true : false;
    const validfullName     = (form.fullName.length > 5) && (form.fullName.includes(" ")) ? true : false;
    const validEmail        = form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false;
    const validPhone        = form.phone.length === 9 ? true : false;

    const btnState          = inputCheck(validCountry, validAddress, validPostalCode, validfullName, validEmail, validPhone) ? "btn btn-outline-success btn-lg" : "btn btn-outline-warning btn-lg";
    const enableSubmit      = inputCheck(validCountry, validAddress, validPostalCode, validfullName, validEmail, validPhone) ? "" : "disabled";
    const countryState      = validCountry ? "form-control is-valid" : "form-control is-invalid"
    const addressState      = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState   = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const userState         = validfullName ? "form-control is-valid" : "form-control is-invalid"
    const emailState        = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const phoneState        = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgCountry = form.country === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgAddress = form.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal  = form.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgUser    = form.user === "" ? "d-none" : "invalid-feedback";
    const invalidMsgEmail   = form.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone   = form.phone === "" ? "d-none" : "invalid-feedback";
    
    // Manage payment form 
    const { paymentForm, changePaymentValues } = useFormPayment(user)
    console.log(paymentForm)
    
    // Manage payment validation state
    const inputPayCheck = (a, b, c, d, e) => {
        return (a && b && c && d && e) ? true : false;
    };

    const validHolder       = paymentForm.holder.length > 3 ? true : false;
    const validCardNum      = paymentForm.cardNum.length === 16 ? true : false;
    const validCVC          = paymentForm.CVC.length === 3 ? true : false;
    const validExpMonth     = (paymentForm.expirationMonth.length === 2) && (paymentForm.expirationMonth > 0 && paymentForm.expirationMonth < 13) ? true : false;
    const validExpYear      = (paymentForm.expirationYear.length === 4) && (paymentForm.expirationYear >= new Date().getFullYear()) ? true : false;

    const btnStatePay       = inputPayCheck(validHolder, validCardNum, validCVC, validExpMonth, validExpYear) ? "btn btn-outline-success btn-lg" : "btn btn-outline-warning btn-lg";
    const enableSubmitPay   = inputPayCheck(validHolder, validCardNum, validCVC, validExpMonth, validExpYear) ? "" : "disabled";
    const holderState       = validHolder ? "form-control is-valid" : "form-control is-invalid"
    const cardNumState      = validCardNum ? "form-control is-valid" : "form-control is-invalid"
    const CVCState          = validCVC ? "form-control is-valid" : "form-control is-invalid"
    const expMonthState     = validExpMonth ? "form-control is-valid" : "form-control is-invalid"
    const expYearState      = validExpYear ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgCardNum = paymentForm.cardNum === "" ? "d-none" : "invalid-feedback";
    const invalidMsgCVC     = paymentForm.CVC === "" ? "d-none" : "invalid-feedback";
    // Submit functions
    const [shippingReady, setShippingReady] = useState(false)
    const [paymentReady, setPaymentReady] = useState(false)

    const submitAddress = e => {
        e.preventDefault();
        setShippingReady(prev => prev = true)
    }
    const submitPayment = e => {
        e.preventDefault();
        if (inputPayCheck(validHolder, validCardNum, validCVC, validExpMonth, validExpYear)) {
            localStorage.setItem('orderInfo', JSON.stringify({
                total: JSON.parse(localStorage.getItem('total')),
                shipping: form,
                payment: paymentForm,
                cart: cart
            }))
            setPaymentReady(prev => prev = true)
        }
        console.log('Error at payment submit');
    }

    return (
        <div>
            {!shippingReady &&
                <fieldset>
                    <H2>Shipping address</H2>
                    <FormShipping
                        onSubmit={submitAddress} 
                    >
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Country:
                                <input className={countryState} autoComplete="off" type="text" name="country" value={form.country} onChange={changeValue} autoFocus required/>
                                <div className={invalidMsgCountry}>
                                    Not a valid country
                                </div>
                            </label>
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Address:
                                <input className={addressState} autoComplete="off" type="text" name="address" value={form.address} onChange={changeValue} required/>
                                <div className={invalidMsgAddress}>
                                    Not a valid address
                                </div>
                            </label>
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Postal code:
                                <input className={postalCodeState} autoComplete="off" type="number" name="postalCode" value={form.postalCode} onChange={changeValue} required/>
                                <div className={invalidMsgPostal}>
                                    Not a valid postal code
                                </div>
                            </label>
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Full name:
                                <input className={userState} autoComplete="off" type="text" name="user" value={form.fullName} onChange={changeValue} required/>
                                <div className={invalidMsgUser}>
                                    Not a valid name
                                </div>
                            </label>
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Email:
                                <input className={emailState} autoComplete="off" type="email" name="email" value={form.email} onChange={changeValue} required/>
                                <div className={invalidMsgEmail}>
                                    Not a valid email
                                </div>
                            </label>
                        </div>
                        <div className='mb-4 form-group'>
                            <label className='label col-12'>
                                Phone:
                                <input className={phoneState} autoComplete="off" type="tel" name="phone" value={form.phone} onChange={changeValue} required/>
                                <div className={invalidMsgPhone}>
                                    Not a valid phone number
                                </div>
                            </label>
                        </div>
                        <div className='form-group'>
                            <input className={btnState} disabled={enableSubmit} type="submit" value="Submit" />
                        </div>
                    </FormShipping>
                </fieldset>

            }
            {shippingReady &&
                <fieldset>
                    <H2>Payment method</H2> 
                    <FormShipping
                        onSubmit={submitPayment} 
                    >
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Card Holder:
                                <input className={holderState} autoComplete="off" type="text" name="holder" value={paymentForm.holder} onChange={changePaymentValues} autoFocus required/>
                            </label>
                        </div>
                        <div className='mb-3 form-group'>
                            <label className='label col-12'>
                                Card number:
                                <input className={cardNumState} autoComplete="off" type="text" name="cardNum" value={paymentForm.cardNum} onChange={changePaymentValues} required/>
                                <div className={invalidMsgCardNum}>
                                    Not a valid card number
                                </div>
                            </label>
                        </div>
                        <div className='mb-3 form-group d-flex gap-5'>
                            <label className='label'>
                                CVC:
                                <input className={CVCState} style={{width: "100px"}} placeholder="XXX" autoComplete="off" type="text" name="CVC" value={paymentForm.CVC} onChange={changePaymentValues} required/>
                                <div className={invalidMsgCVC}>
                                    Not a valid CVC
                                </div>
                            </label>
                            <label className='label'>
                                Expiration date:
                                <div className='d-flex gap-3'>
                                    <input className={expMonthState} style={{width: "100px"}} placeholder="XX" autoComplete="off" type="text" name="expirationMonth" value={paymentForm.expirationMonth} onChange={changePaymentValues} required/>
                                    <span style={{fontSize: "24px"}}>/</span>
                                    <input className={expYearState} style={{width: "100px"}} placeholder="XXXX" autoComplete="off" type="text" name="expirationYear" value={paymentForm.expirationYear} onChange={changePaymentValues} required/>
                                </div>
                            </label>
                        </div>
                        <div className='form-group d-flex gap-3'>
                            <button className='btn btn-outline-secondary btn-lg' onClick={() => setShippingReady(prev => prev = false)}>Return</button>
                            <input className={btnStatePay} disabled={enableSubmitPay} type="submit" value="Submit" />
                        </div>
                    </FormShipping>
                </fieldset>
            }
            {paymentReady && <Navigate to="/confirmPayment" />}
        </div>
    )
}

export default memo(ShippingForm)
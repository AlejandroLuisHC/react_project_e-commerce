import { memo, useReducer } from 'react'
import { useSelector } from 'react-redux'
import addressReducer from '../../../../reducers/addressReducer'

const ShippingForm = () => {
    const title = {
        color: "#eee",
        textShadow: "1px 1px 5px rgba(0, 0, 0, .6)",
    }
    const styleForm = {
        color: "#eee",
        width: "25vw",
    }
    
    // Upload default form values depending on the user
    const user = useSelector((state) => state.user.user)

    // Manage of values by useReducer()
    const initialState = {
        country: user.country,
        address: user.address,
        postalCode: user.postalCode,
        user: user.fullName,
        email: user.email,
        phone: user.phone,
    }
    const [input, dispatch] = useReducer(addressReducer, initialState)

    // Manage inputs validation state
    const validCountry      = input.country.length > 3 ? true : false;
    const validAddress      = input.address.length > 0 ? true : false;
    const validPostalCode   = input.postalCode.length === 5 ? true : false;
    const validUser         = (input.user.length > 5) && (input.user.includes(" ")) ? true : false;
    const validEmail        = input.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false;
    const validPhone        = input.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e, f) => {
        const ok = (a && b && c && d && e && f) ? true : false;
        return ok;
    };

    const btnState          = inputCheck(validCountry, validAddress, validPostalCode, validUser, validEmail, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit      = inputCheck(validCountry, validAddress, validPostalCode, validUser, validEmail, validPhone) ? "" : "disabled";
    const countryState      = validCountry ? "form-control is-valid" : "form-control is-invalid"
    const addressState      = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState   = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const userState         = validUser ? "form-control is-valid" : "form-control is-invalid"
    const emailState        = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const phoneState        = validPhone ? "form-control is-valid" : "form-control is-invalid"
    const invalidMsgCountry = input.country === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgAddress = input.address === "" ? "d-none" : "invalid-feedback"; 
    const invalidMsgPostal  = input.postalCode === "" ? "d-none" : "invalid-feedback";
    const invalidMsgUser    = input.user === "" ? "d-none" : "invalid-feedback";
    const invalidMsgEmail   = input.email === "" ? "d-none" : "invalid-feedback";
    const invalidMsgPhone   = input.phone === "" ? "d-none" : "invalid-feedback";

    // Submit functions
    const submitAddress = e => {
        e.preventDefault();
        const ok = inputCheck(validCountry, validAddress, validPostalCode, validUser, validEmail, validPhone) ? "Pa'lante" : "Dónde va', pisha?";
        alert(ok);
    }

    return (
        <div>
            <h2 style={title}>Shipping address</h2>
            <fieldset>
                <form style={styleForm}
                    onSubmit={submitAddress} 
                >
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Country:
                            <input className={countryState} autoComplete="off" type="text" name="country" value={input.country} onChange={e => dispatch({ type: 'CH_COUNTRY', payload: e.target.value })} required/>
                            <div className={invalidMsgCountry}>
                                Not a valid country
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Address:
                            <input className={addressState} autoComplete="off" type="text" name="address" value={input.address} onChange={e => dispatch({ type: 'CH_ADDRESS', payload: e.target.value })} required/>
                            <div className={invalidMsgAddress}>
                                Not a valid address
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Postal code:
                            <input className={postalCodeState} autoComplete="off" type="number" name="postalCode" value={input.postalCode} onChange={e => dispatch({ type: 'CH_POSTAL', payload: e.target.value })} required/>
                            <div className={invalidMsgPostal}>
                                Not a valid postal code
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Full name:
                            <input className={userState} autoComplete="off" type="text" name="user" value={input.user} onChange={e => dispatch({ type: 'CH_USER', payload: e.target.value })} required/>
                            <div className={invalidMsgUser}>
                                Not a valid name
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label col-12'>
                            Email:
                            <input className={emailState} autoComplete="off" type="email" name="email" value={input.email} onChange={e => dispatch({ type: 'CH_EMAIL', payload: e.target.value })} required/>
                            <div className={invalidMsgEmail}>
                                Not a valid email
                            </div>
                        </label>
                    </div>
                    <div className='mb-4 form-group'>
                        <label className='label col-12'>
                            Phone:
                            <input className={phoneState} autoComplete="off" type="tel" name="phone" value={input.phone} onChange={e => dispatch({ type: 'CH_PHONE', payload: e.target.value })} required/>
                            <div className={invalidMsgPhone}>
                                Not a valid phone number
                            </div>
                        </label>
                    </div>
                    <div className='form-group'>
                        <input className={btnState} disabled={enableSubmit} type="submit" value="Submit" />
                    </div>
                </form>
            </fieldset>
        </div>
    )
}

export default memo(ShippingForm)
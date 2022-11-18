import { memo } from 'react'
import { useSelector } from 'react-redux'
import useFormController from '../../../../hooks/useFormController'

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

    // Manage of values by "useFormController()" <-- custom hook
    const { form, changeValue } = useFormController(user)

    // Manage inputs validation state
    const validCountry      = form.country.length > 3 ? true : false;
    const validAddress      = form.address.length > 0 ? true : false;
    const validPostalCode   = form.postalCode.length === 5 ? true : false;
    const validfullName     = (form.fullName.length > 5) && (form.fullName.includes(" ")) ? true : false;
    const validEmail        = form.email.match(/^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/) ? true : false;
    const validPhone        = form.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e, f) => {
        const ok = (a && b && c && d && e && f) ? true : false;
        return ok;
    };

    const btnState          = inputCheck(validCountry, validAddress, validPostalCode, validfullName, validEmail, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
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

    // Submit functions
    const submitAddress = e => {
        e.preventDefault();
        const ok = inputCheck(validCountry, validAddress, validPostalCode, validfullName, validEmail, validPhone) ? "Pa'lante" : "Dónde va', pisha?";
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
                            <input className={userState} autoComplete="off" type="text" name="user" value={form.user} onChange={changeValue} required/>
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
                </form>
            </fieldset>
        </div>
    )
}

export default memo(ShippingForm)
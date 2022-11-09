import { memo, useState } from 'react'

const ShippingForm = () => {
    const title = {
        color: "#eee",
    }
    const styleForm = {
        color: "#eee",
    }

    const [input, setInput] = useState({
        address: "",
        postalCode: "",
        user: "",
        email: "",
        phone: "",
    })

    const changeInput = e => {
        e.preventDefault();
        console.log(e.target);
        const prevInput = {...input}
        prevInput[e.target.name] = e.target.value;
        setInput(prevInput)
    }

    const validAddress      = input.address.length > 0 ? true : false;
    const validPostalCode   = input.postalCode.length === 5 ? true : false;
    const validUser         = (input.user.length > 5) && (input.user.includes(" ")) ? true : false;
    const validEmail        = input.email.includes("@") ? true : false;
    const validPhone        = input.phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e) => {
        const ok = (a && b && c && d && e) ? true : false;
        return ok;
    };

    const btnState = inputCheck(validAddress, validPostalCode, validUser, validEmail, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit = inputCheck(validAddress, validPostalCode, validUser, validEmail, validPhone) ? "" : "true";

    const addressState      = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState   = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const userState         = validUser ? "form-control is-valid" : "form-control is-invalid"
    const emailState        = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const phoneState        = validPhone ? "form-control is-valid" : "form-control is-invalid"

    return (
        <div>
            <h2 style={title}>Shipping address:</h2>
            <fieldset>
                <form style={styleForm}
                    onSubmit={e => {
                        e.preventDefault();
                        const ok = inputCheck(validAddress, validPostalCode, validUser, validEmail, validPhone) ? "Pa'lante" : "Dónde va', pisha?";
                        alert(ok);
                    }} 
                >
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Address:
                            <input className={addressState} autoComplete="off" type="text" name="address" value={input.address} onChange={changeInput} required/>
                            <div className='invalid-feedback'>
                                Not a valid address
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Postal code:
                            <input className={postalCodeState} autoComplete="off" type="number" name="postalCode" value={input.postalCode} onChange={changeInput} required/>
                            <div className='invalid-feedback'>
                                Not a valid postal code
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Full name:
                            <input className={userState} autoComplete="off" type="text" name="user" value={input.user} onChange={changeInput} required/>
                            <div className='invalid-feedback'>
                                Not a valid name
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Email:
                            <input className={emailState} autoComplete="off" type="email" name="email" value={input.email} onChange={changeInput} required/>
                            <div className='invalid-feedback'>
                                Not a valid email
                            </div>
                        </label>
                    </div>
                    <div className='mb-4 form-group'>
                        <label className='label'>
                            Phone:
                            <input className={phoneState} autoComplete="off" type="tel" name="phone" value={input.phone} onChange={changeInput} required/>
                            <div className='invalid-feedback'>
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
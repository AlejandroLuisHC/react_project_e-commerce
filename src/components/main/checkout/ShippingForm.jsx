import { memo, useState } from 'react'

const ShippingForm = () => {
    const title = {
        color: "#eee",
    }
    const styleForm = {
        color: "#eee",
    }

    const [address, setAddress] = useState("")
    const [postalCode, setPostalCode] = useState("")
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")
    const [phone, setPhone] = useState("")

    const validAddress      = address.length > 0 ? true : false;
    const validPostalCode   = postalCode.length === 5 ? true : false;
    const validName         = (name.length > 5) && (name.includes(" ")) ? true : false;
    const validEmail        = email.includes("@") ? true : false;
    const validPhone        = phone.length === 9 ? true : false;

    const inputCheck = (a, b, c, d, e) => {
        const ok = (a && b && c && d && e) ? true : false;
        return ok;
    };

    const btnState = inputCheck(validAddress, validPostalCode, validName, validEmail, validPhone) ? "btn btn-outline-success" : "btn btn-outline-warning";
    const enableSubmit = inputCheck(validAddress, validPostalCode, validName, validEmail, validPhone) ? "" : "true";

    const addressState      = validAddress ? "form-control is-valid" : "form-control is-invalid"
    const postalCodeState   = validPostalCode ? "form-control is-valid" : "form-control is-invalid"
    const nameState         = validName ? "form-control is-valid" : "form-control is-invalid"
    const emailState        = validEmail ? "form-control is-valid" : "form-control is-invalid"
    const phoneState        = validPhone ? "form-control is-valid" : "form-control is-invalid"

    return (
        <div>
            <h2 style={title}>Shipping address:</h2>
            <fieldset>
                <form style={styleForm}
                    onSubmit={e => {
                        e.preventDefault();
                        const ok = inputCheck(validAddress, validPostalCode, validName, validEmail, validPhone) ? "Pa'lante" : "Dónde va', pisha?";
                        alert(ok);
                    }} 
                >
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Address:
                            <input className={addressState} autoComplete="off" type="text" value={address} onChange={e => setAddress(e.target.value)} required/>
                            <div className='invalid-feedback'>
                                Not a valid address
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Postal code:
                            <input className={postalCodeState} autoComplete="off" type="number" value={postalCode} onChange={e => setPostalCode(e.target.value)} required/>
                            <div className='invalid-feedback'>
                                Not a valid postal code
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Full name:
                            <input className={nameState} autoComplete="off" type="text" value={name} onChange={e => setName(e.target.value)} required/>
                            <div className='invalid-feedback'>
                                Not a valid name
                            </div>
                        </label>
                    </div>
                    <div className='mb-3 form-group'>
                        <label className='label'>
                            Email:
                            <input className={emailState} autoComplete="off" type="email" value={email} onChange={e => setEmail(e.target.value)} required/>
                            <div className='invalid-feedback'>
                                Not a valid email
                            </div>
                        </label>
                    </div>
                    <div className='mb-4 form-group'>
                        <label className='label'>
                            Phone:
                            <input className={phoneState} autoComplete="off" type="tel" value={phone} onChange={e => setPhone(e.target.value)} required/>
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
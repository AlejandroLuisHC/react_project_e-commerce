import { useState } from "react";


function useFormPayment(user) {
    const initialForm = {
        holder: user.fullName,       
        cardNum: "",
        CVC: "",
        expirationMonth: "",
        expirationYear: "",
    }
    const [paymentForm, setForm] = useState(initialForm);

    const changePaymentValues = ({ target }) => {
        setForm({
            ...paymentForm,
            [target.name]: target.value
        });
    } 
    return {
        paymentForm,
        changePaymentValues,
    }
}

export default useFormPayment;
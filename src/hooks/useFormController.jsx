import { useState } from "react";

const initialForm = {
    username: "",
    email: "",
    password: "",
    passwordCheck: "",
    fullName: "",
    country: "",
    address: "",
    postalCode: "",
    phone: "",
    id: ""
}

function useFormController(state = initialForm) {
    const [form, setForm] = useState(state);

    const changeValue = ({ target }) => {
        if(target.name === 'country') {
            const value = target.value.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            setForm({
                ...form,
                [target.name]: value
            });
        } else {
            setForm({
                ...form,
                [target.name]: target.value
            });
        }
    } 
    return {
        form,
        changeValue,
    }
}

export default useFormController;
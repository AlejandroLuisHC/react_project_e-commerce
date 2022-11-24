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
        setForm({
            ...form,
            [target.name]: target.value
        });
    } 
    return {
        form,
        changeValue,
    }
}

export default useFormController;
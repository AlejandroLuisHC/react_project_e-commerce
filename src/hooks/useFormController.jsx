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
        const updatedForm = { ...form };
        updatedForm[target.name] = target.value;
        setForm(updatedForm);
    } 
    return {
        form,
        changeValue,
    }
}

export default useFormController;
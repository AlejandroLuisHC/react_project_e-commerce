const changeShipping = ({target}, set) => {
    if (target.checked){
        switch(target.id) {
            case "free": 
                target.checked = true;
                set(prev => prev = {
                    price: 0, 
                    time: 3, 
                    free: "checked",
                    standard: "",
                    premium: ""
                })
                break
            case "standard":
                target.checked = true;
                set(prev => prev = {
                    price: 1.99, 
                    time: 2, 
                    free: "",
                    standard: "checked",
                    premium: ""
                })
                break
            case "premium": 
                target.checked = true;
                set(prev => prev = {
                    price: 3.99, 
                    time: 1, 
                    free: "",
                    standard: "",
                    premium: "checked"
                })
                break
            default:
                break;
        };
    }
}

export default changeShipping;
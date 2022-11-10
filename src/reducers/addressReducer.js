const addressReducer = (input, action) => {
    switch (action.type) {
        case 'CH_ADDRESS':
            return {
                ...input,
                address: action.value
            }
        case 'CH_POSTAL':
            return {
                ...input,
                postalCode: action.value
            }
        case 'CH_USER':
            return {
                ...input,
                user: action.value
            }
        case 'CH_EMAIL':
            return {
                ...input,
                email: action.value
            }
        case 'CH_PHONE':
            return {
                ...input,
                phone: action.value
            }
        default:
            return input
    }        
}

export default addressReducer;
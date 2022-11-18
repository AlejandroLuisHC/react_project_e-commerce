const regReducer = (input, action) => {
    switch (action.type) {
        case 'CH_USERNAME':
            return {
                ...input,
                username: action.payload
            }
        case 'CH_EMAIL':
            return {
                ...input,
                email: action.payload
            }
        case 'CH_PWD':
            return {
                ...input,
                password: action.payload
            }
        case 'CH_PWD_CHECK':
            return {
                ...input,
                passwordCheck: action.payload
            }
        case 'CH_FULLNAME':
            return {
                ...input,
                fullName: action.payload
            }
        case 'CH_COUNTRY':
            const payload = action.payload.toLowerCase().replace(/\b[a-z]/g, function(letter) {
                return letter.toUpperCase();
            });
            return {
                ...input,
                country: payload
            }
        case 'CH_ADDRESS':
            return {
                ...input,
                address: action.payload
            }
        case 'CH_POSTAL':
            return {
                ...input,
                postalCode: action.payload
            }
        case 'CH_PHONE':
            return {
                ...input,
                phone: action.payload
            }
        default:
            return input
    }        
}

export default regReducer;
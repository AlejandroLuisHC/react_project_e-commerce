const regReducer = (input, action) => {
    switch (action.type) {
        case 'CH_USERNAME':
            return {
                ...input,
                username: action.value
            }
        case 'CH_EMAIL':
            return {
                ...input,
                email: action.value
            }
        case 'CH_PWD':
            return {
                ...input,
                password: action.value
            }
        case 'CH_PWD_CHECK':
            return {
                ...input,
                passwordCheck: action.value
            }
        case 'CH_FULLNAME':
            return {
                ...input,
                fullName: action.value
            }
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
        case 'CH_PHONE':
            return {
                ...input,
                phone: action.value
            }
        default:
            return input
    }        
}

export default regReducer;
const logReducer = (logInput, action) => {
    switch (action.type) {
        case 'CH_USERNAME':
            return {
                ...logInput,
                username: action.payload
            }
        case 'CH_PWD':
            return {
            ...logInput,
            pwd: action.payload
        }
        
        default:
            return logInput;
    }
}

export default logReducer;
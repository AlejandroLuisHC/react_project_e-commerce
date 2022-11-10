const logReducer = (logInput, action) => {
    switch (action.type) {
        case 'CH_USERNAME':
            return {
                ...logInput,
                username: action.value
            }
        case 'CH_PWD':
            return {
            ...logInput,
            pwd: action.value
        }
        
        default:
            return logInput;
    }
}

export default logReducer;
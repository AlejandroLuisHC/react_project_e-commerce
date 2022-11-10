const userReducer = (user, action) => {
    switch (action.type) {
        case 'LOG':
            sessionStorage.setItem('user', JSON.stringify(action.value))
            return action.value
        case 'RESET':
            sessionStorage.removeItem('user');
            return { username: "Guest" };
        default:
            break;
    }
}

export default userReducer;
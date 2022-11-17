const userReducer = (_, action) => {
    switch (action.type) {
        case '@user/log':
            sessionStorage.setItem('user', JSON.stringify(action.payload))
            return action.payload
        case '@user/reset':
            sessionStorage.removeItem('user');
            return { username: "Guest" };
        default:
            break;
    }
}

export default userReducer;
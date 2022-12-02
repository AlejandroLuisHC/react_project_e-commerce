const logOutUser = (state) => {
    sessionStorage.removeItem('user');
    state.user = {
        isLogged: false,
        username: "Guest"
    };
}

export default logOutUser;
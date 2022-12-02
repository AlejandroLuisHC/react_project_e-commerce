import toast from "react-hot-toast";

const logInUser = (state, action) => {
    if (action.payload.username === 'admin') {
        sessionStorage.setItem('user', JSON.stringify({
            ...action.payload,
            isLogged: true,
            isAdmin: true
        }));
        state.user = {
            ...action.payload,
            isLogged: true,
            isAdmin: true
        }
    } else {
        sessionStorage.setItem('user', JSON.stringify({
            ...action.payload,
            isLogged: true
        }));
        state.user = {
            ...action.payload,
            isLogged: true
        }
    }
    toast(`Welcome, ${action.payload.username}`, {
        icon: '🤟',
        style: {
            borderRadius: '10px',
            background: 'rgb(56, 57, 65)',
            color: '#eee',
        }
    })
}

export default logInUser;
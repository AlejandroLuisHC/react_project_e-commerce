import toast from "react-hot-toast";

const eraseFromCart = (state, action) => { // payload === id 
    state.cart.map(e => {
        if (e.id === action.payload)  {
            const pos = state.cart.indexOf(e);
            return state.cart.splice(pos, 1);
        } else return null;
    })
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
    toast.success(`The item's been removed`, {
        style: {
            borderRadius: '10px',
            background: 'rgb(56, 57, 65)',
            color: '#eee',
        }
    })
}

export default eraseFromCart
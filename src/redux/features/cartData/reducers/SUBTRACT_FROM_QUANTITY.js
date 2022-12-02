import toast from "react-hot-toast";

const subtractFromQuantity = (state, action) => { // payload === id
    state.cart.map(e => {
        if (e.id === action.payload) {
            if (e.quantity > 1) {
                return e.quantity -= 1
            } else {
                const pos = state.cart.indexOf(e);
                toast.success(`The item's been removed`, {
                    style: {
                        borderRadius: '10px',
                        background: 'rgb(56, 57, 65)',
                        color: '#eee',
                    }
                })
                return state.cart.splice(pos, 1);
            }
        }
        return null;
    })
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
}

export default subtractFromQuantity
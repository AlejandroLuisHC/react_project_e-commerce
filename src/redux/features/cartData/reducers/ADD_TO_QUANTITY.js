const addToQuantity = (state, action) => { // payload === id
    state.cart.map(e => {
        if (e.id === action.payload) {
            return e.quantity += 1;
        }
        return null;
    })
    sessionStorage.setItem('cart', JSON.stringify(state.cart));
}

export default addToQuantity
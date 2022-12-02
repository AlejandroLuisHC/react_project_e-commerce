import toast from "react-hot-toast";

const emptyCart = (state) => {
    sessionStorage.removeItem('cart');
    state.cart = [];
    toast.success('Your cart is empty', {
        style: {
            borderRadius: '10px',
            background: 'rgb(56, 57, 65)',
            color: '#eee',
        }
    })
}

export default emptyCart
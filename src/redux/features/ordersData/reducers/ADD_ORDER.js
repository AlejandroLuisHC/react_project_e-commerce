import fetchCreateOrder from "../../../../api/orders/fetchCreateOrder"

const addOrder = (state, action) => {
    const order = {
        ...action.payload,
        state: 'Pending...'
    }
    const sendOrder = async() => {
        await fetchCreateOrder(order)
    }
    sendOrder()
}

export default addOrder;
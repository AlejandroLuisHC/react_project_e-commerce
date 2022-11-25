async function fetchOrders () {
    try {
        const res = await fetch('http://localhost:4000/orders')
        return await res.json() 
    } catch(e) {
        console.log('Something went wrong while creating the order.');
    }
}

export default fetchOrders;
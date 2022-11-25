async function fetchCloseOrder (order, id) {
    const newOrder = { ...order }
    newOrder.state = 'Closed'
    console.log(newOrder);
    try {
        const res = await fetch(`http://localhost:4000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(newOrder)
        })
        const created = await res.json() 
        console.log('Successful update:', created);

    } catch(e) {
        console.log('Something went wrong while updating the order.');
    }
}

export default fetchCloseOrder;
async function fetchPROCESS_ORDER (order, id) {
    try {
        const res = await fetch(`http://localhost:4000/orders/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                ...order,
                state: 'Processing...'
            })
        })
        const created = await res.json() 
        console.log('Successful update:', created);

    } catch(e) {
        console.log('Something went wrong while updating the order.');
    }
}

export default fetchPROCESS_ORDER;
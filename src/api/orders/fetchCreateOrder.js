import { v4 } from 'uuid';

async function fetchCreateOrder (order) {
    order.id = v4();
    try {
        const res = await fetch('http://localhost:4000/orders', {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify(order)
        })
        const created = await res.json() 
        console.log('Successful addition:', created);

    } catch(e) {
        console.log('Something went wrong while creating the order.');
    }
}

export default fetchCreateOrder;
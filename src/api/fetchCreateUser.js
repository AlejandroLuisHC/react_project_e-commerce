import { v4 } from 'uuid';

async function fetchCreateUser (user) {
    user.id = v4();
    try {
        const res = await fetch('http://localhost:3000/users', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const created = await res.json() 
        console.log('Successful addition:', created);

    } catch(e) {
        console.log('Something went wrong while creating the user.');
    }
}

export default fetchCreateUser;
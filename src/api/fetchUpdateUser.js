async function fetchUpdateUser (user, id) {
    try {
        const res = await fetch(`http://localhost:3000/users/${id}`, {
            method: 'PUT',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user)
        })
        const created = await res.json() 
        console.log('Successful update:', created);

    } catch(e) {
        console.log('Something went wrong while updating the user.');
    }
}

export default fetchUpdateUser;
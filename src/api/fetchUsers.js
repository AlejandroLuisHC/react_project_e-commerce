async function fetchUsers () {
    try {
        const res = await fetch('http://localhost:3000/users')
        return await res.json()

    } catch(e) {
        alert('Something went wrong while retrieving users data.')
    }
}

export default fetchUsers;
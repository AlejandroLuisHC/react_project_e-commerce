async function fetchUsers () {
    try {
        const res = await fetch('http://localhost:4000/users')
        return await res.json()

    } catch(e) {
        console.log('Something went wrong while retrieving users data.')
    }
}

export default fetchUsers;
async function fetchDeleteUser(id) {
    try {
        await fetch(`http://localhost:3000/users/${id}`, {
            method: 'DELETE',
        }) 
        console.log('Deleted successfully');

    } catch(e) {
        console.log('Something went wrong while deleting the user.');
    }
}

export default fetchDeleteUser;
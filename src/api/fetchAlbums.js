async function fetchBands (band) {
    try {
        const res = await fetch(`http://localhost:3000/${band}`)
        return await res.json()

    } catch(e) {
        alert('Something went wrong while retrieving albums data.')
    }
}

export default fetchBands;
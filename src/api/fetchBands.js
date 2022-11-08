async function fetchBands () {
    try {
        const res = await fetch('http://localhost:3000/bandsData')
        return await res.json()

    } catch(e) {
        alert('Something went wrong while retrieving bands data.')
    }
}

export default fetchBands;
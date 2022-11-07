async function fetchBands () {
    try {
        const res = await fetch('http://localhost:3000/bandsData')
        const data = await res.json()
        return await data

    } catch(e) {
        alert('Something went wrong while retrieving bands data.')
    }
}

export default fetchBands;
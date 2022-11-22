async function fetchBands () {
    try {
        const res = await fetch('http://localhost:4000/bandsData')
        return await res.json()

    } catch(e) {
        console.log('Something went wrong while retrieving bands data.')
    }
}

export default fetchBands;
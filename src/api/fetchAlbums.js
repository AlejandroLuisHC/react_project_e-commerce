async function fetchAlbums (band) {
    try {
        const res = await fetch(`http://localhost:4000/${band}`)
        return await res.json()

    } catch(e) {
        console.log('Something went wrong while retrieving albums data.')
    }
}

export default fetchAlbums;
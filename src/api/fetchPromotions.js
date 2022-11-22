async function fetchPromotions () {
    try {
        const res = await fetch('http://localhost:4000/promotions')
        return await res.json()

    } catch(e) {
        console.log('Something went wrong while retrieving promotions data.')
    }
}

export default fetchPromotions;
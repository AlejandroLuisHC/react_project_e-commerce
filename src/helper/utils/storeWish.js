function storeWishes (id, name, price, img, state, setWish) {
    let wishList = [...state]
    function existId(id, state) {
        let exist = false;
        state.map(item => {
            if (item.id === id) {
                exist = true;
                return exist
            }
            return null;
        })
        return exist;
    }

    if (existId(id, wishList)) {
        wishList.map(i => {
            if (i.id === id) {
                const pos = wishList.indexOf(i);
                return wishList.splice(pos, 1);
            }
            return null
        }) 
    } else {
        wishList.push({
            id, 
            name,
            price,
            img,
        })
    }
    setWish(prev => prev = wishList);

}

export default storeWishes;
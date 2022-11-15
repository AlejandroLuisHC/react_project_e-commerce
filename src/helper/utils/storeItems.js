function storeItems (id, name, price, img, state, setItems) {
    let itemsList = [...state]
    function checkId(id, state) {
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

    if (checkId(id, itemsList)) {
        itemsList.map(i => {
            if (i.id === id) {
                return i.quantity += 1;
            }
            return null
        }) 
    } else {
        itemsList.push({
            id, 
            name,
            price,
            img,
            quantity: 1,
        })
    }
    setItems(prev => prev = itemsList);

}

export default storeItems;
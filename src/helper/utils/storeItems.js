function storeItems (id, name, price, img, state, setItems) {
    let itemsList = [...state]
    function checkId(id, state) {
        let exist = false;
        state.forEach(item => {
            if (item.id === id) {
                exist = true;
                return exist
            }
        })
        return exist;
    }

    if (checkId(id, itemsList)) {
        itemsList.forEach(i => {
            if (i.id === id) {
                i.quantity += 1;
            }
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
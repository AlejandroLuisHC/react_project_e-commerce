const add = (id, state, setItems) => {
    let itemsList = [...state];
    itemsList.map(i => {
        if (i.id === id) {
            return i.quantity++   
        }
        return null;
    });
    setItems(prev => prev = itemsList);
}

const sub = (id, state, setItems) => {
    let itemsList = [...state];
    itemsList.map(i => {
        if (i.id === id) {
            if (i.quantity > 1) {
                return i.quantity-- 
            } else {
                const pos = itemsList.indexOf(i);
                return itemsList.splice(pos, 1);
            }    
        }
        return null
    });
    setItems(prev => prev = itemsList);
}

export {
    add,
    sub,
}
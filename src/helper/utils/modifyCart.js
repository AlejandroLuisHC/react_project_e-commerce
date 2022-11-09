const add = (id, state, setItems) => {
    let itemsList = [...state];
    itemsList.forEach(i => {
        if (i.id === id) {
            i.quantity++   
        }
    });
    setItems(prev => prev = itemsList);
}

const sub = (id, state, setItems) => {
    let itemsList = [...state];
    itemsList.forEach(i => {
        if (i.id === id) {
            if (i.quantity > 1) {
                i.quantity-- 
            } else {
                const pos = itemsList.indexOf(i);
                itemsList.splice(pos, 1);

            }    
        }
    });
    setItems(prev => prev = itemsList);
}

export {
    add,
    sub,
}
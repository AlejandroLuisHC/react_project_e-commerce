const existId = (id, state) => {
    let exist = false;
    state.map(e => {
        if (e.id === id) {
            return exist = true;
        }
        return null;
    })
    return exist;
}

export default existId;
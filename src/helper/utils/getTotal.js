function getTotal(items){
    if(items.length > 0) {
        let price = 0;
        items.map(i => price += i.price * i.quantity);
        return price;
    }
    return 0;
}

export default getTotal;
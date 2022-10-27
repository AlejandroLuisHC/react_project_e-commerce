let x = [];

const storeItems = (id, name, price) => {
    let i = {
        id, 
        name, 
        price,
    };
    x.push(i);
}
storeItems(1, 'ALE', 20);
storeItems(1, 'ALE', 20);
storeItems(1, 'ALE', 20);
storeItems(1, 'ALE', 20);
storeItems(1, 'ALE', 20);

console.log(x);
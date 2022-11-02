import accounting from 'accounting';

const PurchaseList = ({ setItems, quantity, id, name, price, items }) => {
    const style = {
        display: "flex",
        fontSize: "14px",
    }
    const btnStyle = {
        border: "none",
        padding: "0 5px",
        color: "white",
        height: "20px",
        fontSize: "13px",
        borderRadius: "5px",
        width: "20px",
        backgroundColor: "rgb(136, 137, 145)",
        cursor: "pointer",  
    }

    const add = (id, state) => {
        let itemsList = [...state];
        itemsList.forEach(i => {
            if (i.id === id) {
                i.quantity++   
            }
        });
        setItems(prev => prev = itemsList);
    }

    const sub = (id, state) => {
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

    return (
        <li className="p-3 pt-1 dropdown-item-text" style={style}>
            <span><button onClick={()=>sub(id, items)} style={btnStyle}>-</button> {quantity} u. <button onClick={()=>add(id, items)} style={btnStyle}>+</button> {name} - {accounting.formatMoney(price, "€")}</span>
        </li>
    )
}

export default PurchaseList
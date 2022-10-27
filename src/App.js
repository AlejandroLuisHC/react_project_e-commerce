import { useState } from 'react';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    let [items, setItems] = useState([]);
    
    localStorage.setItem('items', JSON.stringify(items));

    const storeItems = (id, name, price) => {
        let i = JSON.parse(localStorage.getItem('items'));
        i.push({
            id: Math.floor(Math.random() * 1000), 
            name,
            price
        })
        setItems(i);
        localStorage.setItem('items', JSON.stringify(i));
    }

    const deleteFunc = () => {
        localStorage.removeItem('items');
        setItems([]);
    }

    return (
        <>
            <Header 
                count={JSON.parse(localStorage.getItem('items')).length}
                deleteFunc={deleteFunc}
            />
            <Main 
                store={storeItems}
            />
        </>
    );
}

export default App;


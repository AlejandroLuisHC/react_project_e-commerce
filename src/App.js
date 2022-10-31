import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    const [items, setItems] = useState([]);
    
    localStorage.setItem('items', JSON.stringify(items));
    
    const storeItems = (id, name, price) => {
        let itemsList = JSON.parse(localStorage.getItem('items'));
        
        function checkId(id) {
            let itemsList = JSON.parse(localStorage.getItem('items'));
            let exist = false;
            itemsList.forEach(item => {
                if (item.id === id) {
                    exist = true;
                    return exist
                }
            })
            return exist;
        }

        
        if (checkId(id)) {
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
                quantity: 1,
            })
        }
        setItems(itemsList);
        localStorage.setItem('items', JSON.stringify(itemsList));
        console.log(checkId(id));
        console.log(itemsList);
    }
    
    const deleteFunc = () => {
        localStorage.removeItem('items');
        setItems([]);
    }

    const add = (id) => {
        const itemsList = JSON.parse(localStorage.getItem('items'));
        itemsList.forEach(i => {
            if (i.id === id) {
                i.quantity++   
            }
        });
        setItems(itemsList);
        localStorage.setItem('items', JSON.stringify(itemsList));
    }

    const sub = (id) => {
        const itemsList = JSON.parse(localStorage.getItem('items'));
        itemsList.forEach(i => {
            if (i.id === id) {
                if (i.quantity > 0) {
                    i.quantity-- 
                } else {
                    const pos = itemsList.indexOf(i);
                    itemsList.splice(0, pos);
                }    
            }
        });
        setItems(itemsList);
        localStorage.setItem('items', JSON.stringify(itemsList));
    }

    return (
        <>
            <Header 
                deleteFunc  = {deleteFunc}
                add         = {add}
                sub         = {sub}
            />
            <Main 
                store       = {storeItems}
            />
            <Footer />
        </>
    );
}

export default App;



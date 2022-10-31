import { useState } from 'react';
import Footer from './components/footer/Footer';
import Header from "./components/header/Header";
import Main from "./components/main/Main";

function App() {
    const [count, setCount] = useState(0);
    const [items, setItems] = useState([]);
    
    localStorage.setItem('items', JSON.stringify(items));
    
    const storeItems = (id, name, price) => {
        let items = JSON.parse(localStorage.getItem('items'));
        
        function checkId(id) {
            let items = JSON.parse(localStorage.getItem('items'));
            let exist = false;
            items.forEach(item => {
                if (item.id === id) {
                    exist = true;
                    return exist
                }
            })
            return exist;
        }

        console.log(checkId(id));
        console.log(items);
        
        if (checkId(id)) {
            items.forEach(i => {
                if (i.id === id) {
                    i.quantity += 1;
                }
            }) 
        } else {
            items.push({
                id, 
                name,
                price,
                quantity: 1,
            })
        }
        
        setItems(items);
        setCount(prev => prev + 1);
        localStorage.setItem('items', JSON.stringify(items));
    }

    const deleteFunc = () => {
        localStorage.removeItem('items');
        setItems([]);
    }

    return (
        <>
            <Header 
                count={count}
                deleteFunc={deleteFunc}
            />
            <Main 
                store={storeItems}
            />
            <Footer />
        </>
    );
}

export default App;


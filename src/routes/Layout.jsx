import { useState, useEffect, } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from "../components/header/Header";

function Layout() {
    let itemsInCart = [];
    if(localStorage.getItem('items')) {
        itemsInCart = JSON.parse(localStorage.getItem('items'))
    }
    const [items, setItems] = useState(itemsInCart);

    useEffect(() => {updateLocal(items)}, [items]);

    function updateLocal(state) {
        localStorage.setItem('items', JSON.stringify(state));
        console.log('Actualizando localStorage');
    }
    
    const storeItems = (id, name, price, state) => {
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
                quantity: 1,
            })
        }
        setItems(prev => prev = itemsList);
    
    }
    
    const deleteFunc = () => {
        setItems([]);
        localStorage.clear();

    }

    const renderApp = () => {
        return(<>
            <Header 
                deleteFunc  = {deleteFunc}
                setItems    = {setItems}
                items       = {items}
            />
            <Outlet context={[storeItems, items]}/>
            <Footer />
        </>)
    }

    return (
        renderApp()
    );
}

export default Layout;



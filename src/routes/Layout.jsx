import { useState, useEffect, } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from "../components/header/Header";
import storeItems from '../helper/utils/storeItems';

function Layout() {
    const itemsInCart = JSON.parse(localStorage.getItem('items')) ?? [];

    const [items, setItems] = useState(itemsInCart);

    useEffect(() => {
        updateLocal(items)
    }, [items]);

    function updateLocal(state) {
        localStorage.setItem('items', JSON.stringify(state));
    }
    
    const deleteFunc = () => {
        setItems([]);
    }

    const renderApp = () => {
        return(<>
            <Header 
                deleteFunc  = {deleteFunc}
                setItems    = {setItems}
                items       = {items}
            />
            <Outlet context={[storeItems, items, setItems]}/>
            <Footer />
        </>)
    }

    return (
        renderApp()
    );
}

export default Layout;



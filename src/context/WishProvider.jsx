import { useState } from 'react';
import { useEffect } from 'react';
import WishContext from './WishContext';

const WishProvider = ({ children }) => { 
    
    const itemsInWish = JSON.parse(sessionStorage.getItem('wish')) ?? [];
    const [wish, setWish] = useState(itemsInWish);

    useEffect(() => {
        updateStorage(wish)
    }, [wish]);

    function updateStorage(state) {
        sessionStorage.setItem('wish', JSON.stringify(state));
    }
    
    const deleteWish = () => {
        setWish([]);
    }
    const providerValue = {
        wish,
        setWish,
        deleteWish,
    }

    return (
        <WishContext.Provider value={providerValue}>
            { children }
        </WishContext.Provider>
    )
}

export default WishProvider
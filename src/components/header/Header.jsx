import React, { memo } from 'react'
import Hero from './Hero';
import NavBar from './NavBar';

const Header = ({ setItems, deleteFunc, items }) => {
    const style = {
        gridColumn: "1 / span 3",
        boxShadow: "0 1px 5px rgba(0, 0, 0, .7)"
    }

    return (
        <header style={style}>
            <NavBar 
                deleteFunc  = {deleteFunc}
                setItems    = {setItems}
                items       = {items}
            />
            <Hero />
        </header>
    )
}

export default memo(Header)
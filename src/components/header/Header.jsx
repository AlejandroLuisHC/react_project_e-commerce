import React from 'react'
import Hero from './Hero';
import NavBar from './NavBar';

const Header = ({ add, sub, deleteFunc }) => {
    const style = {
        gridColumn: "1 / span 3",
        boxShadow: "0 1px 5px rgba(0, 0, 0, .7)"
    }

    return (
        <header style={style}>
            <NavBar 
                deleteFunc  = {deleteFunc}
                add         = {add}
                sub         = {sub}
            />
            <Hero />
        </header>
    )
}

export default Header
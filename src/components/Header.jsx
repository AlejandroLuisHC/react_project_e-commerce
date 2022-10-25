import React from 'react'
import Hero from './header/Hero';
import NavBar from './header/NavBar';

const Header = () => {
    const style = {
        gridColumn: "1 / span 3",
    }

    return (
        <>
        <header style={style}>
            <NavBar />
            <Hero />
        </header>
        </>
    )
}

export default Header
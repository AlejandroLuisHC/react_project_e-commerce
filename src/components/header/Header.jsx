import { memo } from 'react'
import Hero from './Hero';
import NavBar from './NavBar';
import { HeaderContainer } from '../style/headerStyle';

const Header = ({ setItems, deleteFunc, items }) => {
    return (
        <HeaderContainer>
            <NavBar 
                deleteFunc  = {deleteFunc}
                setItems    = {setItems}
                items       = {items}
            />
            <Hero />
        </HeaderContainer>
    )
}

export default memo(Header)
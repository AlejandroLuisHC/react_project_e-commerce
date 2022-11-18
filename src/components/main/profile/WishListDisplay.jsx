import { useContext, useState } from 'react'
import { HeartFill, CaretDownFill, CaretUpFill } from 'react-bootstrap-icons'
import CartContext from '../../../context/CartContext';
import WishContext from  '../../../context/WishContext';
import AlbumCard from '../album_cards/AlbumCard'
const WishListDisplay = () => {
    const { items, setItems } = useContext(CartContext)
    const { wish, setWish } = useContext(WishContext)
    console.log(wish);
    const [closed, setClosed] = useState(wish.length > 0 ? true : false)
    let wishStyle = closed ? "d-flex mt-5 mb-5 flex-wrap gap-5" : "d-none";
    return (
        <>
        <button type="button" className="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 col-6" 
            onClick={() => {
                document.getElementById("wishlist").classList.toggle("d-none");
                if (closed === true) setClosed(prev => prev = false);
                if (closed === false) setClosed(prev => prev = true);
            }}
        >
            {closed ? <CaretUpFill/> : <CaretDownFill/>} <HeartFill/> My wishlist {closed ? <CaretUpFill/> : <CaretDownFill/>}
        </button>
        <div id="wishlist" className={wishStyle}>
            {(wish.length > 0 && wish.map(w => <AlbumCard key = {w.id}
                id       = {w.id}
                size     = {'150'}
                name     = {w.name}
                img      = {w.img}
                price    = {w.price}
                release  = {w.release}
                desc     = {w.description}
                items    = {items}
                setItems = {setItems}
                wish     = {wish}
                setWish  = {setWish}
            />)) || <p className='text-white'>No items saved</p>}
        </div>
        </>
    )
}

export default WishListDisplay
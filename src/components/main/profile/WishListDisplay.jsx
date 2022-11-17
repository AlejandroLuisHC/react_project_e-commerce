import { useContext } from 'react'
import { HeartFill } from 'react-bootstrap-icons'
import UserContext from '../../../context/UserContext';
import WishContext from  '../../../context/WishContext';
import AlbumCard from '../album_cards/AlbumCard'
const WishListDisplay = () => {
    const {items, setItems} = useContext(UserContext)
    const { wish, setWish } = useContext(WishContext)
    
    setTimeout(() => {
        document.getElementById("wishlist").classList.toggle("d-none")
    }, 1);

    return (
        <>
        <button type="button" className="btn btn-outline-danger d-flex align-items-center justify-content-center gap-2 col-6 dropdown-toggle" onClick={() => {document.getElementById("wishlist").classList.toggle("d-none")}}><HeartFill/> My wishlist</button>
        <div id="wishlist" className='d-flex mt-5 mb-5 flex-wrap gap-5'>
            {wish.map(w => <AlbumCard key = {w.id}
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
            />)}
        </div>
        </>
    )
}

export default WishListDisplay
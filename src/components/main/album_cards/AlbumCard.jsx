import { memo } from "react";
import { Cart, Heart } from "react-bootstrap-icons";
import ModalAlbumDescription from "./ModalAlbumDescription";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../../redux/features/cartData/cartSlice.js'
import { setWish } from '../../../redux/features/wishData/wishSlice.js'
import toast from "react-hot-toast";

const AlbumCard = ({ size = 250, id, name, img, price, release, desc}) => {
    const albumCard = {
        height: `${size}px`,
        width: `${size}px`,
        border: "none",
        borderRadius: "50%",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
        cursor: "pointer",
    }
    const albumPic = {
        height: `${size}px`,
        width: `${size}px`,
        objectFit: "cover",
        borderRadius: "50%",
    }
    const label = {
        fontWeight: "bold",
        fontSize: `${size / 8.9}px`,
        color: "white",
        textShadow: "0 0 20px black"
    }
    const priceTag = {
        fontWeight: "bold",
        borderRadius: `${size / 12.5}px`,
        fontSize: `${size / 11.3}px`,
        boxShadow: "0 0 15px black",
        transform: "rotate(-10deg)"
    }
    const buyBtn = {
        width: `${size / 5}px`,
        height: `${size / 5}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "absolute",
        left: "75%",
        border: "none",
        boxShadow: "0 0 15px black"
    }
    const wishBtn = {
        width: `${size / 8.3}px`,
        height: `${size / 8.3}px`,
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "absolute",
        left: "65%",
        top: "-7%",
    }
    const wish = useSelector((state) => state.wishData.wish)
    const dispatch = useDispatch();

    const setClassWish = () => {
        setTimeout(() => {
            const wishStatus = document.getElementById(`wishStatus${id}`)
            let status = "btn btn-outline-danger btn-sm"
            wish.map(w => {
                if (w.id === id) return status = "btn btn-danger btn-sm";
                return null
            });
            return wishStatus.className = status
        }, 1);
    }

    const handleBuy = () => {
        dispatch(addToCart({id, name, price, img, release, desc}));
        toast.success(`Added ${name} to cart`, {
            style: {
                borderRadius: '10px',
                background: 'rgb(56, 57, 65)',
                color: '#eee',
            }
        }) 
    }
    const handleWish = () => {
        dispatch(setWish({id, name, price, img, release, desc}));
    }
    return (
        <>
        <div id={id} className="card" style={albumCard}>
            <img src={img} data-bs-toggle="modal" data-bs-target={`#description${id}`} style={albumPic} className="card-img-top" alt={name} />
            <div data-bs-toggle="modal" data-bs-target={`#description${id}`} className="position-absolute d-flex flex-column justify-content-between gap-5 card-body" style={{height: "200px"}}>
                <div > 
                    <span className="badge text-bg-warning" style={priceTag}>{price}€</span>
                </div>
                <h3 className="card-title" style={label}>{name}</h3>
            </div>
            <button className="btn btn-primary btn-lg d-flex align-items-center justify" style={buyBtn} onClick={handleBuy}>
                <span style={{fontSize: `${size / 10}px`}}><Cart/></span>
            </button>
            <button id={`wishStatus${id}`} className={setClassWish()} style={wishBtn} onClick={handleWish}>
                <span style={{fontSize: `${size / 16}px`}}><Heart/></span>
            </button>
        </div>

        <ModalAlbumDescription 
            id       = {id}
            name     = {name}
            release  = {release}
            img      = {img}
            desc     = {desc}
            price    = {price}
        />
        </>
    )
}

export default memo(AlbumCard)
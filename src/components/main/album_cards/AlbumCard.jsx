import { memo } from "react";
import { Cart, Heart } from "react-bootstrap-icons";
import ModalAlbumDescription from "./ModalAlbumDescription";
import { useDispatch, useSelector } from "react-redux";
import { addToCart } from '../../../redux/features/cartData/cartSlice.js'
import { setWish } from '../../../redux/features/wishData/wishSlice.js'
import { H2 } from '../../style/H2.js'
import { DivAlbum, ImgAlbum, SpanPriceTag, ButtonBuy } from '../../style/bandsAlbumStyle' 

const AlbumCard = ({ size = 250, id, name, img, price, release, desc, video, stock }) => {
    const albumCard = {
        height: `${size}px`,
        width: `${size}px`,
    }
    const albumPic = {
        height: `${size}px`,
        width: `${size}px`,
    }
    const label = {
        fontSize: `${size / 8.9}px`,
    }
    const priceTag = {
        borderRadius: `${size / 12.5}px`,
        fontSize: `${size / 11.3}px`,
    }
    const buyBtn = {
        width: `${size / 5}px`,
        height: `${size / 5}px`,
    }
    const wishBtn = { // Cannot import styled component due to class changing mid render
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
        dispatch(addToCart({id, name, price, img, release, desc, stock}));
    }
    const handleWish = () => {
        dispatch(setWish({id, name, price, img, release, desc}));
    }
    return (
        <>
        <DivAlbum id={id} className="card" style={albumCard}>
            <ImgAlbum src={img} data-bs-toggle="modal" data-bs-target={`#description${id}`} style={albumPic} className="card-img-top" alt={name} />
            <div data-bs-toggle="modal" data-bs-target={`#description${id}`} className="position-absolute d-flex flex-column justify-content-between gap-5 card-body" style={{height: "200px"}}>
                <div > 
                    <SpanPriceTag className="badge text-bg-warning" style={priceTag}>{price}€</SpanPriceTag>
                </div>
                <H2 className="card-title" style={label}>{name}</H2>
            </div>
            <ButtonBuy className="btn btn-primary btn-lg" style={buyBtn} onClick={handleBuy}>
                <span style={{fontSize: `${size / 10}px`}}><Cart/></span>
            </ButtonBuy>
            <button id={`wishStatus${id}`} className={setClassWish()} style={wishBtn} onClick={handleWish}>
                <span style={{fontSize: `${size / 16}px`}}><Heart/></span>
            </button>
        </DivAlbum>

        <ModalAlbumDescription 
            id       = {id}
            name     = {name}
            release  = {release}
            img      = {img}
            desc     = {desc}
            price    = {price}
            video    = {video}
        />
        </>
    )
}

export default memo(AlbumCard)
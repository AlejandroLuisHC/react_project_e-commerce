import { memo } from "react";
import { Cart, Heart } from "react-bootstrap-icons";
import storeItems from "../../../helper/utils/storeItems";
import storeWish from "../../../helper/utils/storeWish";
import ModalAlbumDescription from "./ModalAlbumDescription";

const AlbumCard = ({ setItems, items, id, name, img, price, release, desc, wish, setWish }) => {
    const albumCard = {
        height: "250px",
        width: "250px",
        border: "none",
        borderRadius: "50%",
        boxShadow: "2px 2px 8px rgba(0, 0, 0, 1)",
        cursor: "pointer",
    }
    const albumPic = {
        height: "250px",
        width: "250px",
        objectFit: "cover",
        borderRadius: "50%",
    }
    const label = {
        fontWeight: "bold",
        fontSize: "28px",
        color: "white",
        textShadow: "0 0 20px black"
    }
    const priceTag = {
        fontWeight: "bold",
        borderRadius: "20px",
        fontSize: "22px",
        boxShadow: "0 0 15px black",
        transform: "rotate(-10deg)"
    }
    const buyBtn = {
        width: "50px",
        height: "50px",
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
        width: "30px",
        height: "30px",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        borderRadius: "50%",
        position: "absolute",
        left: "65%",
        top: "-7%",
    }
    
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
            <button className="btn btn-primary btn-lg" onClick={() => {storeItems(id, name, price, img, items, setItems)}} style={buyBtn}><Cart/></button>
            <button id={`wishStatus${id}`} className={setClassWish()} onClick={() => {storeWish(id, name, price, img, wish, setWish)}} style={wishBtn}><Heart/></button>
        </div>

        <ModalAlbumDescription 
            id       = {id}
            name     = {name}
            release  = {release}
            img      = {img}
            desc     = {desc}
            price    = {price}
            items    = {items}
            setItems = {items}
        />
        </>
    )
}

export default memo(AlbumCard)
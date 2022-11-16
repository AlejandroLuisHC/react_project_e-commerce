import React from 'react'
import storeItems from '../../../helper/utils/storeItems'

const ModalAlbumDescription = ({ id, name, release, img, desc, price, items, setItems }) => {
    const modalImg = {
        borderRadius: "10px",
        marginBottom: "15px",
        opacity: ".3"
    }
    const modalStyle = {
        textAlign: "justify",
        textJustify: "inter-word"
    }
    const modalContent = {
        position: "absolute",
        paddingLeft: "15px",
        paddingRight: "40px",
        fontSize: "1.1em",
        whiteSpace: "pre-line",
        lineHeight: "1.6",
        top: "5%"
    }
    
    return (
        <div className="modal fade" id={`description${id}`} tabIndex="-1" aria-labelledby={`description${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-2" id={`description${id}Label`}>{`${name} (${release})`}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <div className="modal-body p-4" style={modalStyle}>
                        <img src={img} alt={name} style={modalImg} width="100%"/>
                        <p style={modalContent}>{desc}</p>
                    </div>
                    <div className="modal-footer">
                        <button type="button" onClick={() => {storeItems(id, name, price, img, items, setItems)}} className="btn btn-primary btn-lg d-flex align-items-center rounded-5 text-white">Add to cart!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAlbumDescription
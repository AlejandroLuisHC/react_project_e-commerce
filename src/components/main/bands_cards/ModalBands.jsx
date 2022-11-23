import React from 'react'
import { DivModalBody, ImgModalBand } from '../../style/bandsAlbumStyle'

const ModalBands = ({id, img, name, desc}) => {
    return (
        <div className="modal fade" id={`description${id}`} tabIndex="-1" aria-labelledby={`description${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-2" id={`description${id}Label`}>{name}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <DivModalBody className="modal-body p-4">
                        <ImgModalBand src={img} alt={name} width="100%"/>
                        <p>{desc}</p>
                    </DivModalBody>
                </div>
            </div>
        </div>
    )
}

export default ModalBands
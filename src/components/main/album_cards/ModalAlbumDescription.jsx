import React from 'react'
import { useDispatch } from 'react-redux'
import { ADD_TO_CART } from '../../../redux/features/cartData/cartSlice'
import { DivModalBody, IFrameVideoclip, ImgModalAlbum, PModalContent } from '../../style/bandsAlbumStyle'

const ModalAlbumDescription = ({ id, name, release, img, desc, price, video }) => {
    const dispatch = useDispatch();
    
    return (
        <div className="modal fade" id={`description${id}`} tabIndex="-1" aria-labelledby={`description${id}Label`} aria-hidden="true">
            <div className="modal-dialog modal-lg modal-dialog-centered modal-dialog-scrollable">
                <div className="modal-content bg-dark text-white">
                    <div className="modal-header">
                        <h1 className="modal-title fs-2" id={`description${id}Label`}>{`${name} (${release})`}</h1>
                        <button type="button" className="btn-close btn-close-white" data-bs-dismiss="modal" aria-label="Close"></button>
                    </div>
                    <DivModalBody className="modal-body p-4">
                        <ImgModalAlbum src={img} alt={name} width="100%"/>
                        <PModalContent>{desc}</PModalContent>
                        {video && <IFrameVideoclip src={video} frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></IFrameVideoclip>}
                    </DivModalBody>
                    <div className="modal-footer">
                        <button type="button" onClick={() => dispatch(ADD_TO_CART({id, name, price, img}))} className="btn btn-primary btn-lg d-flex align-items-center rounded-5 text-white">Add to cart!</button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ModalAlbumDescription
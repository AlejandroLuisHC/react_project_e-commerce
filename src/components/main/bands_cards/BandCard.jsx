import { memo } from "react"
import { InfoCircleFill } from "react-bootstrap-icons"
import { Link } from "react-router-dom"
import { ButtonInfo, DivBand, ImgBand, H2} from "../../style/bandsAlbumStyle"
import ModalBands from "./ModalBands"

const BandCard = ({ id, name, img, data, desc }) => {
    return (
        <>
        <DivBand id={id} className="card">
            <Link to = {`../${data}`}>
                <ImgBand src={img} className="card-img-top" alt={name} />
                <div className="position-absolute w-100 top-50 d-flex align-items-center justify-content-between card-body">
                    <H2 className="card-title" >{name}</H2>
                </div>
            </Link>
            <ButtonInfo data-bs-toggle="modal" data-bs-target={`#description${id}`}><InfoCircleFill /></ButtonInfo>
        </DivBand>

        <ModalBands 
            id       = {id}
            name     = {name}
            img      = {img}
            desc     = {desc}
        />
        </>
    )
}

export default memo(BandCard)
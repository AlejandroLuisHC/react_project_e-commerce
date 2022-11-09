import { memo } from 'react'
import { House } from 'react-bootstrap-icons'

const  ButtonBack = () => {
    const style = {
        height: "50px",
        width: "200px",
        boxShadow: "inset 5px 5px 10px rgba(0, 0, 0, .4)",
        border: "none",
    }
    return (
        <button className='btn btn-secondary d-flex justify-content-center align-items-center' style={style}><House /></button>
    )
}

export default memo(ButtonBack)


import React, { memo } from 'react'
import { House } from 'react-bootstrap-icons'

const  ButtonBack = () => {
    return (
        <button className='btn btn-secondary w-100 d-flex flex-column justify-content-center align-items-center'><House /><span>Bands</span></button>
    )
}

export default memo(ButtonBack)


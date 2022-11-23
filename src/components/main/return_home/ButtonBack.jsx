import { memo } from 'react'
import { House } from 'react-bootstrap-icons'
import { ButtonHome } from '../../style/backStyle'

const  ButtonBack = () => {
    return (
        <ButtonHome className='btn btn-secondary d-flex justify-content-center align-items-center'><House /></ButtonHome>
    )
}

export default memo(ButtonBack)


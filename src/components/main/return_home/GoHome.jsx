import { LinkBack } from '../../style/backStyle';
import ButtonBack from './ButtonBack'

const GoHome = () => {


    return (
        <div className="d-flex justify-content-center">
            <LinkBack to = {'/'}>
                <ButtonBack />    
            </LinkBack>
        </div>
    )
}

export default GoHome
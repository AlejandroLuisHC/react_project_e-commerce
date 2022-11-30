import accounting from 'accounting';
import { useDispatch } from 'react-redux';
import { ADD_TO_QUANTITY, SUBTRACT_FROM_QUANTITY } from '../../../redux/features/cartData/cartSlice';
import { ButtonQuantity, LiCart } from '../../style/headerStyle';

const PurchaseList = ({ quantity, id, name, price, items }) => {
    const dispatch = useDispatch();

    return (
        <LiCart className="p-3 pt-1 dropdown-item-text">
            <span><ButtonQuantity onClick={() => dispatch(SUBTRACT_FROM_QUANTITY(id))}>-</ButtonQuantity> {quantity} u. <ButtonQuantity onClick={() => dispatch(ADD_TO_QUANTITY(id))}>+</ButtonQuantity> {name} - {accounting.formatMoney(price, {symbol:"€", format:"%v %s"})}</span>
        </LiCart>
    )
}

export default PurchaseList
import toast from "react-hot-toast";
import existId from "../../../../helper/utils/existId";

const setWish = (state, action) => {
    if (state.wish.length > 0) {
        if (existId(action.payload.id, state.wish)) {
            state.wish.map(e => {
                if (e.id === action.payload.id) {
                    const pos = state.wish.indexOf(e);
                    toast(`Item deleted from wishlist`, {
                        icon: '💔',
                        style: {
                            borderRadius: '10px',
                            background: 'rgb(56, 57, 65)',
                            color: '#eee',
                        }
                    })
                    return state.wish.splice(pos, 1);
                }
                return null
            }) 
        } else {
            state.wish.push(action.payload);
            toast(`Item added to wishlist`, {
                icon: '💖',
                style: {
                    borderRadius: '10px',
                    background: 'rgb(56, 57, 65)',
                    color: '#eee',
                }
            })
        }
    } else {
        state.wish.push(action.payload);
        toast(`Item added to wishlist`, {
            icon: '💖',
            style: {
                borderRadius: '10px',
                background: 'rgb(56, 57, 65)',
                color: '#eee',
            }
        })
    }
    sessionStorage.setItem('wish', JSON.stringify(state.wish));
}

export default setWish
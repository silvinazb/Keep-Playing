import {FaShoppingCart} from 'react-icons/fa'
import { Link } from 'react-router-dom'

export const CartWidget = () => {

    return (
        <Link to="/cart">
            <div className="cart-widget">
                    <FaShoppingCart/>
            </div>
        </Link>
    )
}
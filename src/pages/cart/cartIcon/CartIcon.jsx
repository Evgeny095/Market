import cl from './CartIcon.module.css';
import cart from '../../../img/icons/cart.svg'
import LinkIcons from '../../../components/linkIcons/LinkIcons';
import { useSelector, useDispatch } from 'react-redux';



function CartIcon() {
    const elements = useSelector(state => state.cart.onCart)
    return <div className={cl.wrapper}>
        <LinkIcons to='cart' src={cart} alt='cart' />
        {elements.length > 0 && <span className={cl.count}>{elements.length}</span>}
    </div>
}

export { CartIcon }
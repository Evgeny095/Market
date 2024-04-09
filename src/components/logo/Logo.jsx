import { Link } from 'react-router-dom';
import cl from './Logo.module.css'
import l_img from '../../img/logo.png'

function Logo() {

    return <Link to='/'>
        <img className={cl.img} src={l_img} alt='logo' />
    </Link>
}

export default Logo;
// <Logo />
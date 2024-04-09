import { Link } from 'react-router-dom';
import cl from './LinkIcons.module.css'


function LinkIcons({ to, src, alt }) {

    return <Link to={to} className={cl.link}>
        <img className={cl.icon} src={src} alt={alt} />
    </Link>
}

export default LinkIcons;
// <LinkIcons to='/about' src={cart} alt='star' />
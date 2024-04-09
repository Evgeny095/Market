import { Link } from 'react-router-dom';
import cl from './StockLine.module.css';
import s_img from '../../img/stock_line.jpg';

function StockLine() {
    return <Link to='stock' className={cl.link}>
        <img src={s_img} alt="stock" />
    </Link>
}

export default StockLine
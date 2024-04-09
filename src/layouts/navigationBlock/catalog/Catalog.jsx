import cl from './Catalog.module.css';
import burger from '../../../img/icons/burger.svg';
import { Link, NavLink } from 'react-router-dom';
import close from '../../../img/icons/close_white.svg'

function Catalog({ otherCl, setOpenState, state, stateHandler, ...props }) {
    // const [state, setState] = useState(true);

    const classes = `${cl.button} ${otherCl}`;


    const setActive = ({ isActive }) => isActive ? `${cl.active_link}` : ``;
    const setActiveRed = ({ isActive }) => isActive ? `${cl.active_link} text_red` : `text_red`;

    return <div className={cl.wrapper}>
        <button onClick={() => stateHandler()} className={classes}>
            {!state && <img src={burger} alt="burger" />}
            {state && <img src={close} alt="close burger" />}
            <p>Каталог</p>
        </button>
        {state && <ul className={cl.list}>
            <li><NavLink to='products/wall-materials' className={setActive}>Стеновые материалы</NavLink></li>
            <li><NavLink to='products/facade-materials' className={setActive}>Фасадные материалы</NavLink></li>
            <li><NavLink to='products/building-blocks' className={setActive}>Строительные блоки</NavLink></li>
            <li><NavLink to='products/decoration-materials' className={setActive}>Отделочные материалы</NavLink></li>
            <li><NavLink to='products/dry-mixes' className={setActive}>Сухие смеси</NavLink></li>
            <li><NavLink to='products/improvement' className={setActive}>Благоустройство</NavLink></li>
            <li><NavLink to='products/paints-varnishes' className={setActive}>Лако-красочные материалы</NavLink></li>
            {/* <li><NavLink to='products/other' className={setActive}>Прочие услуги</NavLink></li> */}
            <li><NavLink to='products/sale' className={setActiveRed}>Распродажа товаров</NavLink></li>

        </ul>}
    </div>
}

export default Catalog;
import { Link } from 'react-router-dom';
import cl from './Vacancies.module.css';
import MainButton from '../../components/mainButton/MainButton';

function VacanciesItem({ to, orange, blue, children }) {

    return <Link to={to} className={cl.item}>
        {orange && <div className={cl.color_orange}></div>}
        {blue && <div className={cl.color_blue}></div>}
        {(!blue && !orange) && <div className={cl.color_blue}></div>}
        <div className={cl.item__content}>
            <p className={cl.item__header}>{children}</p>
            <MainButton to={to} white={true}>Подробнее</MainButton>
        </div>
    </Link>
}

export { VacanciesItem }
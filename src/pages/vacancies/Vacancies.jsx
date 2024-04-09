import { Link } from 'react-router-dom';
import cl from './Vacancies.module.css';
import LinkButton from '../../components/mainButton/LinkButton';
import MainButton from '../../components/mainButton/MainButton';
import useFocus from '../../hooks/useFocus';



function Vacancies() {
    const pageFocus=useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Вакансии</h2>
        <div className={cl.list}>
            <VacanciesItem orange={true} to='/vacancies/manager-office'>Офис-менеджер</VacanciesItem>
            <VacanciesItem blue={true} to='/vacancies/manager-stock'>Заведующий складом</VacanciesItem>
            <VacanciesItem orange={true} to='/vacancies/manager-office'>Офис-менеджер</VacanciesItem>
        </div>
    </section>
}

function VacanciesItem({ to, orange, blue, children }) {

    return <Link  to={to} className={cl.item}>
        {orange && <div className={cl.color_orange}></div>}
        {blue && <div className={cl.color_blue}></div>}
        {(!blue && !orange) && <div className={cl.color_blue}></div>}
        <div className={cl.item__content}>
            <p className={cl.item__header}>{children}</p>
            <MainButton to={to} white={true}>Подробнее</MainButton>
        </div>
    </Link>
}

export { Vacancies }
import cl from './Vacancies.module.css';
import useFocus from '../../hooks/useFocus';
import { VacanciesItem } from './VacanciesItem';



function Vacancies() {
    const pageFocus = useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Вакансии</h2>
        <div className={cl.list}>
            <VacanciesItem orange={true} to='/vacancies/manager-office'>Офис-менеджер</VacanciesItem>
            <VacanciesItem blue={true} to='/vacancies/manager-stock'>Заведующий складом</VacanciesItem>
            <VacanciesItem orange={true} to='/vacancies/manager-office'>Офис-менеджер</VacanciesItem>
        </div>
    </section>
}



export { Vacancies }
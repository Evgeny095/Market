import cl from './Services.module.css'
import Faq from '../../components/faq/Faq'
import { ServicesList } from '../../components/servicesList/ServicesList'
import useFocus from '../../hooks/useFocus'

function Services() {
    const pageFocus=useFocus();
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Услуги</h2>
        <ServicesList/>
    </section>
}

export { Services }
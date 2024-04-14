import { CompanySwiper } from '../../components/swipers/companySwiper/CompanySwiper'
import { SertificatSwiper } from '../../components/swipers/sertificatSwiper/SertificatSwiper'
import { init_Projects } from '../../data/initProjects';
import { ProjectItem } from '../projects/projectItem/ProjectItem';
import useWindowSize from "../../hooks/useWindowSize";
import cl from './About.module.css'
import { MainSwiper } from '../../components/swipers/mainSwiper/MainSwiper';
import useFocus from '../../hooks/useFocus'

function About() {
    const pageFocus = useFocus();
    const windowSize = useWindowSize();
    function viewProjects() {
        if (windowSize.width <= 650) {
            return viewProjects_swiper();
        }
        let maxCount = 6;
        if (windowSize.width <= 1024) {
            maxCount = 4;
        }
        let count = 0;
        return init_Projects.map(item => {
            if (count >= maxCount) return
            count++
            return <ProjectItem key={item.id} {...item} />
        })
    }

    function viewProjects_swiper() {
        const maxCount = 4;
        let count = 0;
        const arr = init_Projects.map(item => {
            if (count >= maxCount) return
            count++
            return <ProjectItem key={item.id} {...item} />
        })
        const resArr = arr.filter((value) => value !== undefined);
        return <MainSwiper className={cl.project_height} elements={resArr} />

    }

    return <section className={cl.wrapper}>
        <h2 ref={pageFocus} className='h2_header'>О компании</h2>
        <div className={cl.up_container}>
            <div className={cl.slider_container}>
                <CompanySwiper pagination_state={true} />
            </div>
            <div className={cl.up_container__context}>
                <p className='p_header'>Специализируемся на поставках строительных материалов. Работаем по всей России</p>
                <div className={cl.adventages}>
                    <div>
                        <p className={cl.text_blue}>{"> 15"}</p>
                        <p className='p_standart'>лет на рынке</p>
                    </div>
                    <div>
                        <p className={cl.text_blue}>{"> 100"}</p>
                        <p className='p_standart'>товарных направлений</p>
                    </div>
                    <div>
                        <p className={cl.text_blue}>{"> 10 000"}</p>
                        <p className='p_standart'>товарных позиций</p>
                    </div>
                    <div>
                        <p className={cl.text_blue}>{"> 100"}</p>
                        <p className='p_standart'>товарных поставщиков</p>
                    </div>
                </div>
                <p className='p_standart'>Полнотелый кирпич – это популярный строительный материал, который был изобретен столетия назад, но до их пор пользуется большим спросом. До наших времен дошло множество исторических построек, которые служат живым примером прочности и долговечности этого материала. Несмотря на появление новой разновидности кирпича с полостями внутри, полнотелый кирпич до сих пор пользуется большой популярностью.</p>
                <p className='p_standart'>На кирпич и камень керамические общие технические условия и стандарты качества, установленные ГОСТ. Эти материалы обладают высокой прочностью, морозостойкостью, негорючестью, небольшая теплопроводность.</p>
            </div>
        </div>
        <h2 className='h2_header'>Сертификаты</h2>
        <SertificatSwiper count={5} />
        <h2 className='h2_header'>Проект из наших стройматериалов</h2>
        <div className={cl.projects}>
            {viewProjects()}
        </div>
    </section>
}

export { About }
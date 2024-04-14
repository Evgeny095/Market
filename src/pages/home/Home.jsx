import LinkArrow from "../../components/linkArrow/LinkArrow"
import { ServicesItem, ServicesList } from "../../components/servicesList/ServicesList"
import cl from './Home.module.css'
import { init_Projects } from "../../data/initProjects";
import { ProjectItem } from '../projects/projectItem/ProjectItem';
import { init_Articles_preview } from "../../data/initArticles";
import { ArticleIPreview } from "../articles/articleIPreview/ArticleIPreview";
import { SimilarProducts } from "../products/similarProducts/SimilarProducts";
import useWindowSize from "../../hooks/useWindowSize";
import { MainSwiper } from '../../components/swipers/mainSwiper/MainSwiper';
import { initServices } from '../../data/initServices';
import useFocus from "../../hooks/useFocus";



function Home() {
    const pageFocus = useFocus();
    const windowSize = useWindowSize();
    function viewProjects() {
        const maxCount = 3;
        let count = 0;
        if (windowSize.width >= 850) {
            return init_Projects.map(item => {
                if (count >= maxCount) return
                count++
                return <ProjectItem key={item.id} {...item} />
            })
        }
        else {
            const arr = init_Projects.map(item => {
                if (count >= maxCount) return
                count++
                return <ProjectItem key={item.id} {...item} />
            })
            const resArr = arr.filter((value) => value !== undefined);
            return <MainSwiper className={cl.project_height} elements={resArr} />
        }
    }

    function viewArticles() {
        const maxCount = 3;
        let count = 0;
        if (windowSize.width >= 850) {
            return init_Articles_preview.map(el => {
                if (count >= maxCount) return
                count++
                return <ArticleIPreview key={el.id} {...el} />
            })
        }
        else {
            const arr = init_Articles_preview.map(el => {
                if (count >= maxCount) return
                count++
                return <ArticleIPreview key={el.id} {...el} />
            })
            const resArr = arr.filter((value) => value !== undefined);
            return <MainSwiper className={cl.article_height} elements={resArr} />
        }
    }


    return <section className={cl.wrapper}>
        <span className={cl.focus} ref={pageFocus}></span>
        <div className={cl.heading}>
            <h2 className='h2_header'>Спецпредложения</h2>
            <LinkArrow to='products/sale' right={true} className='text_red'>Перейти в раздел скидок</LinkArrow>
        </div>
        {/* ----- спец предложения */}
        {windowSize.width > 1280 && <SimilarProducts category='sale' count={10} className={cl.products} />}
        {windowSize.width <= 1280 && <SimilarProducts category='sale' count={6} className={cl.products} />}
        {/*  */}
        <div className={cl.heading}>
            <h2 className='h2_header'>Проект из наших стройматериалов</h2>
            <LinkArrow to='projects' right={true} >Смотреть все проекты</LinkArrow>
        </div>
        <div className={cl.projects}>
            {viewProjects()}
        </div>
        {/*  */}
        <div className={cl.heading}>
            <h2 className='h2_header'>Дополнительные услуги</h2>
            <LinkArrow to='services' right={true} >Смотреть все услуги</LinkArrow>
        </div>
        {windowSize.width >= 440 && <ServicesList className={cl.services} />}
        {windowSize.width <= 440 && <div className={cl.services}>
            <ServicesItem {...initServices[0]}>{initServices[0].children}</ServicesItem>
        </div>}
        {/*  */}
        <div className={cl.heading}>
            <h2 className='h2_header'>Статьи</h2>
            <LinkArrow to='articles' right={true} >Смотреть все статьи</LinkArrow>
        </div>
        <div className={cl.articles}>
            {viewArticles()}
        </div>
        {/*  */}
    </section>
}

export { Home }
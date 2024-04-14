import cl from './Stock.module.css';
import { Banners } from '../../components/banners/Banners';
import { Banner } from '../../components/banners/Banner';
import { init_banners } from '../../data/initBanners';
import useWindowSize from "../../hooks/useWindowSize";
import { SimilarProducts } from "../products/similarProducts/SimilarProducts";
import useFocus from '../../hooks/useFocus';


function Stock() {
    const pageFocus = useFocus();
    function viewContent() {
        const windowSize = useWindowSize();
        return init_banners.map(el => {
            return <div key={el.Id}>
                <div key={el.Id} className={cl.banner}>
                    <img src={el.img} alt={el.title} className={cl.img} />
                    <div key={el.alt} className={cl.banner_content}>
                        <h2>{el.title}</h2>
                        <p>{el.text}</p>
                    </div>
                </div>
                <div key={el.title}>
                    {/* ----- спец предложения */}
                    {windowSize.width > 1280 && <SimilarProducts category='sale' count={10} className={cl.products} />}
                    {windowSize.width <= 1280 && <SimilarProducts category='sale' count={6} className={cl.products} />}
                    {/*  */}
                </div>
            </div>
        })
    }
    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>Акции</h2>
        {viewContent()}
    </section>
}

export { Stock };
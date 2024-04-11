import { ProductPreviewItem } from '../../../components/productPreviewItem/ProductPreviewItem';
import cl from './SimilarProducts.module.css'
import { memo, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { fetchProducts } from '../../../store/productSlice';
import { Prloader } from '../../../components/preloader/Preloader';



const SimilarProducts=memo(({ category, count, className, ...props }) =>{

    //Достаем данные--
    const { products, loading, error } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(category));
    }, [dispatch, category]);


    function getOtherProduct(arrForBilding) {
        let _count = 0;
        const prodcuts = arrForBilding.map(el => {
            if (_count === count) return;
            _count++;
                if (el.advantages === "lider" || el.advantages === "today" || el.advantages === "sale")
                    return <ProductPreviewItem key={el.id} {...el} />
            
        })
        return prodcuts;
   
    }
    // -- Достаем данные
    return <>
        <div className={cl.products + ` ${className}`}>
            {/* {loading && <div>loading...</div>} */}
            {loading && <Prloader />}
            {error && <div>Error:{error}</div>}
            {!loading && products.length>0&& getOtherProduct(products)}
        </div>
    </>
});
SimilarProducts.displayName = 'SimilarProducts'; 

function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

export { SimilarProducts }
import { memo, useMemo } from 'react';
import { ProductPreviewItem } from '../../components/productPreviewItem/ProductPreviewItem';
import useFocus from '../../hooks/useFocus';
import cl from './Favorite.module.css'
import { useSelector, useDispatch } from 'react-redux';

function Favorite(){
    const pagefocus = useFocus();
    const favoriteArr = useSelector(state => state.favorite.favorite);
    const viewArr = useMemo(()=> favoriteArr.map(el => <ProductPreviewItem key={el.id} {...el} faoviteRemove={true} />),[favoriteArr])
    return <section ref={pagefocus} className={cl.wrapper}>
        <h2 className='h2_header'>Избранное</h2>
        <div className={cl.content_container}>
            {viewArr}
        </div>
        {favoriteArr.length < 1 && <p className={cl.info}>Здесь ничего нет...</p>}
    </section>
}

export { Favorite }
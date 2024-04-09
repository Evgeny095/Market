import cl from './Search.module.css';
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchProducts } from '../../store/productSlice';
import { useEffect, useState } from 'react';
import { ProductPreviewItem } from '../../components/productPreviewItem/ProductPreviewItem';
import { Prloader } from '../../components/preloader/Preloader';
import useFocus from '../../hooks/useFocus';


function Search() {
    const { products, loading, error } = useSelector((state) => state.product);
    const pageFocus = useFocus();
    //Мап данных в компоненет
    const mapArr = (arr) => {
        return arr.map(el => {

            return <ProductPreviewItem key={el.id} {...el} />
        })
    }

    const { searchValue } = useParams();
    return <section ref={pageFocus} className={cl.wrap}>
        <p className='p_header'>Поиск по: {searchValue}</p>
        {loading && <Prloader />}
        {error && <div className={cl.message_container}>Error:{error}</div>}
        {!loading && <div className={cl.content}>{mapArr(products)}</div>}
    </section>
}

export { Search };
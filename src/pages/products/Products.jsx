import { ProductPreviewItem } from '../../components/productPreviewItem/ProductPreviewItem';
import cl from './Products.module.css'
import { useParams } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect, useState } from 'react';
import { fetchProducts } from '../../store/productSlice';
import { sortProducts } from '../../store/productSlice';
import { ProdusctsFiltres } from './produsctsFiltres/ProdusctsFiltres';
import { Prloader } from '../../components/preloader/Preloader';
import useFocus from '../../hooks/useFocus';





function Products() {
    const pageFocus=useFocus();

    //Параметр
    const { category } = useParams();

    //Стйты управления компонентами
    const [selectedOption, setSelectedOption] = useState('');


    //Функции с управления компонентом---
    //Сортировка
    const handleSelectChange = (event) => {
        setSelectedOption(event.target.value);
        dispatch(sortProducts(event.target.value))

    };

    //--- Функции с управления компонентом

    //Достаем данные--
    const { products, loading, error } = useSelector((state) => state.product);
    const dispatch = useDispatch();

    useEffect(() => {
        dispatch(fetchProducts(category));
    }, [dispatch, category]);



    //Мап данных в компоненет
    const mapArr = (arr) => {
        return arr.map(el => {
    
                return <ProductPreviewItem key={el.id} {...el} />
        })
    }
    // -- Достаем данные

    //Отлеживаем изменение и сортируем
    function sortSignal() {
        dispatch(sortProducts(selectedOption))
    }

    return <section ref={pageFocus} className={cl.wrapper}>
        <h2 className='h2_header'>{categoryName(category)}</h2>
        <div className={cl.content}>
            <ProdusctsFiltres sortSignal={sortSignal} />
            <div className={cl.sort}>
                <p>Сортировать:</p>
                <select className={cl.select} value={selectedOption} onChange={handleSelectChange}>
                    <option value="popular" key="popular">по популярности</option>
                    <option value="a-y" key="a-y">а → я</option>
                    <option value="y-a" key="y-a">я → а</option>
                    <option value="chaper" key="chaper">сначала дешевле</option>
                    <option value="expensive" key="expensive">сначала дороже</option>
                </select>
            </div>
            <div className={cl.products_container}>
                {/* {loading && <div className={cl.message_container}>loading...</div>} */}
                {loading && <Prloader />}
                {error && <div className={cl.message_container}>Error:{error}</div>}
                {!loading && products.length>0&& mapArr(products)}
            </div>
        </div>
        {/* <ProductPreviewItem /> */}
        {/* <cartButton /> */}
    </section>
}

function categoryName(category) {
    let res = "";
    switch (category) {
        case "wall-materials":
            res = "Стеновые материалы"
            break;
        case "facade-materials":
            res = "Фасадные материалы"
            break;
        case "building-blocks":
            res = "Строительные блоки"
            break;
        case "decoration-materials":
            res = "Отделочные материалы"
            break;
        case "dry-mixes":
            res = "Сухие смеси"
            break;
        case "improvement":
            res = "Благоустройство"
            break;
        case "paints-varnishes":
            res = "Лако-красочные материалы"
            break;
        case "other":
            res = "Прочие услуги"
            break;
        case "sale":
            res = "Распродажа товаров"
            break;
    }
    return res;
}

export { Products }
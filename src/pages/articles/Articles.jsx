import { useState } from 'react';
import { init_Articles_preview } from '../../data/initArticles';
import cl from './Articles.module.css';
import { ArticleIPreview } from './articleIPreview/ArticleIPreview';
import useFocus from '../../hooks/useFocus';


function Articles() {
    const pageFocus=useFocus();
    const [category, setCategory] = useState(0);
    const handleSelectChange = (event) => {
        setCategory(event.target.value);


    };

    const allItems = init_Articles_preview.map(el => {
        return <ArticleIPreview key={el.id} {...el} />
    })

    const categoryItems = init_Articles_preview.map(el => {
        if (Number(el.category) === Number(category)) return <ArticleIPreview key={el.id} {...el} />
    })

    function clButton(mainCategory) {
        return mainCategory === category ? `${cl.menu_button} ${cl.menu_button_active}`
            : cl.menu_button;
    }

    return <section className={cl.wrapper}>
        <h2 ref={pageFocus} className='h2_header'>Статьи</h2>
        <div className={cl.menu_container}>
            <button onClick={() => setCategory(0)} className={clButton(0)} >Все статьи</button>
            <button onClick={() => setCategory(1)} className={clButton(1)} >Благоустройство</button>
            <button onClick={() => setCategory(2)} className={clButton(2)} >Госты</button>
            <button onClick={() => setCategory(3)} className={clButton(3)} >Кровельные материалы</button>
            <button onClick={() => setCategory(4)} className={clButton(4)} >Стеновые материалы</button>
        </div>
        <div className={cl.menu_container_select}>
            <select className={cl.select} value={category} onChange={handleSelectChange}>
                <option value='0' key="0">Все статьи</option>
                <option value='1' key="1">Благоустройство</option>
                <option value="2" key="2">Госты</option>
                <option value="3" key="3">Кровельные материалы</option>
                <option value="4" key="4">Стеновые материалы</option>
            </select>
        </div>
        <div className={cl.elements_container}>
            {Number(category) === 0 && allItems}
            {Number(category) !== 0 && categoryItems}
        </div>
    </section>
}

export { Articles };
import cl from './Projects.module.css'
import { ProjectItem } from './projectItem/ProjectItem'
import { init_Projects } from '../../data/initProjects'
import { useState } from 'react';
import useFocus from '../../hooks/useFocus';


function Projects() {
    const pagefocus=useFocus();
    const [category, setCategory] = useState(0);

    //select
    const handleSelectChange = (event) => {
        setCategory(event.target.value);


    };

    const allItems = init_Projects.map(el => {
        return <ProjectItem key={el.id} {...el} />
    })

    const categoryItems = init_Projects.map(el => {
        if (Number(el.category) === Number(category)) return <ProjectItem key={el.id} {...el} />
    })

    // Кнопки
    function clButton(mainCategory) {
        return mainCategory === category ? `${cl.menu_button} ${cl.menu_button_active}`
            : cl.menu_button;
    }


    return <section ref={pagefocus} className={cl.wrapper}>
        <h2 className='h2_header'>Проекты</h2>
        <div className={cl.menu_container}>
            <button onClick={() => setCategory(0)} className={clButton(0)} >Все проекты</button>
            <button onClick={() => setCategory(1)} className={clButton(1)} >Административные здания</button>
            <button onClick={() => setCategory(2)} className={clButton(2)} >Загородные дома</button>
            <button onClick={() => setCategory(3)} className={clButton(3)} >Многоэтажные дома</button>
        </div>
        <div className={cl.menu_container_select}>
            <select className={cl.select} value={category} onChange={handleSelectChange}>
                <option value='0' key="0">Все проекты</option>
                <option value='1' key="1">Административные здания</option>
                <option value="2" key="2">Загородные дома</option>
                <option value="3" key="3">Многоэтажные дома</option>
            </select>
        </div>
        <div className={cl.elements_container}>
            {Number(category) == 0 && allItems}
            {Number(category) !== 0 && categoryItems}
        </div>
    </section>
}

export { Projects }
import cl from './Article.module.css';
import { useParams } from 'react-router-dom';
import { init_Articles } from '../../../data/initArticles';
import LinkArrow from '../../../components/linkArrow/LinkArrow';
import useFocus from '../../../hooks/useFocus';

function Article() {
    const pageFocus=useFocus();
    const { id } = useParams();
    return <section ref={pageFocus} className={cl.wrapper}>
        {init_Articles[id - 1].header}
        <img src={init_Articles[id - 1].mainImg} alt="header img" className={cl.img} />
        {init_Articles[id - 1].content}
        <LinkArrow to="/articles" >К другим статьям</LinkArrow>
    </section>
}

export { Article };
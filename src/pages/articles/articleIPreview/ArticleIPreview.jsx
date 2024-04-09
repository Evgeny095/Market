import { Link } from 'react-router-dom'
import cl from './ArticleIPreview.module.css'

function ArticleIPreview({ id, category, previewImg, header, previewText }) {
    return <Link to={`/articles/${id}`} className={cl.container} key={id}>
        <img className={cl.img} src={previewImg} alt={header} />
        <div className={cl.content_container}>
            <h5 className="h3_header">{header}</h5>
            <p className='p_standart'>{previewText}</p>
        </div>
    </Link>
}

export { ArticleIPreview }
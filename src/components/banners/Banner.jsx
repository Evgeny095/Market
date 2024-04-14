import LinkButton from '../mainButton/LinkButton';
import cl from './Banners.module.css';

function Banner({ id, title, text, url, img, alt }) {
    return <div id={`banner_${id}`} className={cl.card}>
        <div className={cl.img_container}>
            <img className={cl.img} src={img} alt={alt} />
        </div>
        <div className={cl.content}>
            <h2 className={cl.title}>{title}</h2>
            <p className={cl.text}>{text}</p>
            <LinkButton white={true} to={url}>Перейти</LinkButton>
        </div>
    </div>
}

export { Banner }
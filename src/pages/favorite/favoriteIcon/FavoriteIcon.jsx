import cl from './FavoriteIcon.module.css';
import favorite_fase from '../../../img/icons/previewProduct/favorite_false.svg';
import favorite_true from '../../../img/icons/previewProduct/favorite_true.svg';
import LinkIcons from '../../../components/linkIcons/LinkIcons';
import { useSelector, useDispatch } from 'react-redux';



function FavoriteIcon() {
    const elements = useSelector(state => state.favorite.onFavorite)
    return <div className={cl.wrapper}>
        {elements.length < 1 && <LinkIcons to='favorite' src={favorite_fase} alt='favorite' />}
        {elements.length > 0 && <LinkIcons to='favorite' src={favorite_true} alt='favorite' />}
        {/* {elements.length > 0 && <span className={cl.count}>{elements.length}</span>} */}
    </div>
}

export { FavoriteIcon }
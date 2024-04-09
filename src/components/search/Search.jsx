import { useState, useEffect } from 'react';
import cl from './Search.module.css';
import icon from '../../img/icons/search.svg';
import { useSelector, useDispatch } from 'react-redux';
import { fetchSearchProducts } from '../../store/productSlice';
import { useNavigate } from "react-router-dom";

function Search() {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const [value, setValue] = useState('');

    const handleKeyPress = (event) => {
        if (event.key === 'Enter') {
            searchHandler();
        }
    };


    // 
    function searchHandler() {
        if (value.length <= 1) return;
        dispatch(fetchSearchProducts(value));
        navigate(`/search/${value}`);
    }

    return <div className={cl.wrapper}>
        <input onKeyDown={handleKeyPress} className={cl.search} type="text" placeholder='Введите название товара' value={value} onChange={e => setValue(e.target.value)} />
        <button onClick={() => searchHandler()} className={cl.button}>
            <img src={icon} alt="search" />
        </button>
    </div>
}
export default Search;
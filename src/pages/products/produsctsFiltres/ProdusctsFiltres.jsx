import cl from './ProdusctsFiltres.module.css';
import { useState, useEffect } from 'react';
import MainButton from '../../../components/mainButton/MainButton';
import { useSelector, useDispatch } from 'react-redux';
import { sortProductsForDevelopments, setProductsFiltres, resetProductsFiltres } from '../../../store/productSlice';
import useWindowSize from '../../../hooks/useWindowSize';




function ProdusctsFiltres({ sortSignal }) {
  const [seeFiltres, SetSeeFiltres] = useState(true);
  const windowSize = useWindowSize();

  useEffect(() => {
    if (windowSize.width <= 900) {
      SetSeeFiltres(false)
    }
    else {
      SetSeeFiltres(true)
    }
  }, [windowSize.width]);

  const dispatch = useDispatch();
  const productsFiltres = useSelector(state => state.product.filterReady_products);
  const [checkboxes, setCheckboxes] = useState({
    Porotherm: false,
    ЛСР: false,
    Тольяттинский: false,
    Unis: false,
    Основит: false,
    Ruflex: false,
    Terka: false,
  })
  const [developments, setDevelopments] = useState([]);


  const handleCheckboxChange = (event) => {
    const { name, checked } = event.target;
    setCheckboxes((prevCheckboxes) => ({
      ...prevCheckboxes,
      [name]: checked,
    }));
    getArrNameDevelopment(name, checked);
  };



  function getArrNameDevelopment(name, value) {
    let resultArr = Array.from(developments);
    if (value === true) {
      resultArr.push(name);
    }
    else if (value === false) {
      resultArr = developments.filter(el => el != name);
    }
    setDevelopments(resultArr);
    return resultArr;
  }

  useEffect(() => {
    dispatch(sortProductsForDevelopments(developments));
  }, [developments, dispatch]);



  function setFiltres() {
    dispatch(setProductsFiltres())
    sortSignal();
  }

  function resetFiltres() {
    const objFalse = checkboxes;
    for (let key in objFalse) {
      objFalse[key] = false;
    }
    setCheckboxes(objFalse);
    setDevelopments([]);
    sortSignal();
  }
  return <>
    {windowSize.width <= 940 && <MainButton onClick={() => SetSeeFiltres(!seeFiltres)}>{seeFiltres ? 'Скрыть фильтры' : 'Показать фильтры'}</MainButton>}
    {seeFiltres && <div className={cl.filters}>
      <h4 className={cl.heading_filtres}>Производители:</h4>
      <label>
        <input
          type="checkbox"
          name="Porotherm"
          checked={checkboxes.Porotherm}
          onChange={handleCheckboxChange}
        />
        Porotherm
      </label>
      <label>
        <input
          type="checkbox"
          name="ЛСР"
          checked={checkboxes.ЛСР}
          onChange={handleCheckboxChange}
        />
        ЛСР
      </label>
      <label>
        <input
          type="checkbox"
          name="Тольяттинский"
          checked={checkboxes.Тольяттинский}
          onChange={handleCheckboxChange}
        />
        Тольяттинский
      </label>
      <label>
        <input
          type="checkbox"
          name="Unis"
          checked={checkboxes.Unis}
          onChange={handleCheckboxChange}
        />
        Unis
      </label>
      <label>
        <input
          type="checkbox"
          name="Основит"
          checked={checkboxes.Основит}
          onChange={handleCheckboxChange}
        />
        Основит
      </label>
      <label>
        <input
          type="checkbox"
          name="Ruflex"
          checked={checkboxes.Ruflex}
          onChange={handleCheckboxChange}
        />
        Ruflex
      </label>
      <label>
        <input
          type="checkbox"
          name="Terka"
          checked={checkboxes.Terka}
          onChange={handleCheckboxChange}
        />
        Terka
      </label>

      <div className={cl.btn_container}>
        {productsFiltres.length > 0 && <MainButton onClick={setFiltres}>Показать ({productsFiltres.length})</MainButton>}
        {Object.values(checkboxes).includes(true) && <button className={cl.resetFiltres} onClick={resetFiltres}>Сбросить фильтры</button>}
      </div>
    </div>}
  </>
}


export { ProdusctsFiltres }
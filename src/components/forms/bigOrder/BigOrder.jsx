import { useState } from 'react';
import cl from './BigOrder.module.css'
import MainButton from '../../mainButton/MainButton';
import axios from 'axios';
import close_img from '../../../img/icons/modal_close.svg'
import IconButton from '../../iconButton/IconButton';
import { API } from '../../../constants/constants';

function BigOrder({ closeFunc }) {
    const [error, setError] = useState('');
    const [succses, setSuccses] = useState('');
    const [formData, setFormData] = useState({
        name: '',
        phone: '',
        adress: ''
    });


    const handleSubmit = (e) => {
        e.preventDefault();
        setError('');
        setSuccses('');
        if (formData.name.length <= 1) {
            setError('Введите имя');
            return
        }
        if (formData.phone.length <= 6) {
            setError('Введите телефон')
            return
        }
        if (formData.adress.length <= 1) {
            setError('Введите адрес')
            return
        }
        postData(formData);
        setSuccses('Сообщение отправлено! скоро наш менеджер свяжется с вами.');

    };

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };


    const postData = async (data) => {
        try {
            const response = await axios.post(`${API}`, {
                action:'bigOrder',
                ...data
            });

            console.log('Ответ от сервера:', response.data);
        } catch (error) {
            console.error('Выполнена попытка отправки post запроса на несуществующую api, данные: ' + `name: ${formData.name} phone: ${formData.phone} adress: ${formData.adress}`);
        }
    };

    return (
        <div>
            <div className={cl.closePanel}>
                <IconButton onClick={closeFunc} src={close_img} />
            </div>
            <form className={cl.form} onSubmit={handleSubmit}>
                {/* <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Email" /> */}
                <h5 className={cl.header}>Оптовый заказ</h5>
                <div className={cl.content}>
                    <input type="text" name='name' value={formData.name} onChange={handleChange} placeholder='Имя' />
                    <input type="tel" name='phone' value={formData.phone} onChange={handleChange} placeholder='Телефон' />
                    <input type="text" name='adress' value={formData.adress} onChange={handleChange} placeholder='куда везти' />
                </div>
                {succses.length < 1 && <MainButton type="submit">Отправить</MainButton>}
                {succses.length > 1 && <MainButton onClick={closeFunc}>Закрыть</MainButton>}
                {error.length > 1 && <p className={cl.error}>{error}</p>}
                {succses.length > 1 && <p className={cl.succses}>{succses}</p>}
            </form>
        </div>
    );

}

export default BigOrder;



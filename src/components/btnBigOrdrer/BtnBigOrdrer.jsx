import { useState } from 'react';
import cl from './BtnBigOrdrer.module.css'
import ModalWindow from '../modalWindows/ModalWindow';
import BigOrder from '../forms/bigOrder/BigOrder';
import MainButton from '../mainButton/MainButton';


function BtnBigOrdrer() {
    const [formOrder, setFormOrder] = useState(false);
    return <>
        <ModalWindow visible={formOrder} setVisible={setFormOrder} noButton={true}>
            <BigOrder closeFunc={() => setFormOrder(false)} />
        </ModalWindow>
        <MainButton onClick={() => setFormOrder(true)}>Оптовый заказ</MainButton>
    </>
}

export default BtnBigOrdrer;
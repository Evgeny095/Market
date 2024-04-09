
import cl from './ModalWindows.module.css'
import img_cl from '../../img/icons/modalCheck.svg'
import IconButton from '../iconButton/IconButton';


function ModalWindow({ children, visible, setVisible, noButton }) {
    function btnVisibler() {
        if (noButton !== undefined && noButton === true) {
            return <></>;
        }
        else {
            return <IconButton onClick={() => setVisible(false)} src={img_cl} />;
        }
    }
    if (visible === false) return null;
    return (
        <div className={[cl.myModal, cl.active].join(' ')} onClick={() => setVisible(false)}>
            <div className={cl.myModelContent} onClick={e => e.stopPropagation()}>
                {children}
                {/* <button onClick={() => setVisible(false)}>Закрыть окно</button> */}
                {btnVisibler()}
            </div>
        </div>
    );
}

export default ModalWindow;
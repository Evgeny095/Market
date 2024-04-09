import cl from './MainButton.module.css';

function MainButton({ children, onClick, white, opacity, ...props }) {
    let mainClass = cl.button;
    if (white !== undefined && white === true) {
        mainClass = cl.button_white;
    }
    else if (opacity !== undefined && opacity === true) {
        mainClass = cl.button_opacity
    }
    return <button onClick={onClick} className={mainClass} {...props}>
        {children}
    </button>
}
export default MainButton;
import cl from './MainButton.module.css';
import { Link } from 'react-router-dom';

function LinkButton({ children, white, opacity, className, ...props }) {
    let mainClass = cl.button;
    if (white !== undefined && white === true) {
        mainClass = cl.button_white;
    }
    else if (opacity !== undefined && opacity === true) {
        mainClass = cl.button_opacity
    }
    return <Link {...props}>
        <button className={mainClass + ` ${className}`}>
            {children}
        </button>
    </Link>
}
export default LinkButton;
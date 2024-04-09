import cl from './LinkArrow.module.css';
import { Link } from 'react-router-dom';

function LinkArrow({to,children,right,className}){

    let classes=cl.link_back+` ${className}`;
    if(right!==undefined && right===true)
    classes=cl.link_next +` ${className}`;
    return  <Link to={to} className={classes}>{children}</Link>
}

export default LinkArrow;
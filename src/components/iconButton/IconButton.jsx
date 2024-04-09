import cl from './IconButoon.module.css'


function IconButton({ src, alt, onClick, className, }) {
    let classes=cl.btn;
    if(className!==undefined) 
    classes=cl.btn+" "+className;
    return <button onClick={onClick} className={classes}>
        <img className={cl.icon} src={src} alt={alt} />
    </button>
}

export default IconButton;
// <LinkIcons to='/about' src={cart} alt='star' />
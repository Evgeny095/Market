import cl from './Prloader.module.css'

function Prloader() {
    return (
        <div className={cl.wrap}>
            <div className={cl.preloader}></div>
        </div>
    );
}

export { Prloader }
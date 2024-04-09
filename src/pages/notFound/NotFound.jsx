import cl from './NotFound.module.css'

function NotFound() {

    return <div className={cl.wrapper}>
        <p className={cl.notFound}>Такой страницы не существует.</p>
    </div>
}

export { NotFound }
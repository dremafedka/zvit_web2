import styles from './styles.module.css'

export const Header = () => {
    return (
        <header className={styles.header_main}>
            <h1>
                ЗВІТИ З ЛАБОРАТОРНИХ РОБІТ
                <br/>
                З ДИСЦИПЛІНИ "WEB-ОРІЄНТОВАНІ ТЕХНОЛОГІЇ.
                <br/>
                ОСНОВИ FRONTEND та BACKEND РОЗРОБОК"
                <br/>
            </h1>
            <span>Студент групи ІС-11 Горбенко Федір Олександрович</span>
        </header>
    )
}

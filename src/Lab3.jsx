import styles from './lab.module.css'
import {useState} from "react";
import myImage from './assets/img.png'
import table from './assets/table.png'
import flexible from './assets/flexible.png'
import flexbox from './assets/flexbox.png'

export const Lab3 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №3":
            content = <div>
                <h1>Тема: Розробка веб-платформи "Rick and Morty Fanpage"</h1>
                <h2>Мета розробки:</h2>
                <ol>
                    <li>Створення веб-платформи для фанатів мультсеріалу "Rick and Morty" з метою надання їм унікального онлайн-досвіду.</li>
                    <li>Представлення детальної інформації про улюблених персонажів та забезпечення можливості швидкого пошуку персонажів за різними критеріями.</li>
                    <li>Створення особистих списків улюблених персонажів для користувачів з можливістю управління та сортування списків.</li>
                    <li>Представлення інформації про артефакти та локації в мультсеріалі.</li>
                    <li>Створення спільноти для обговорення серій, персонажів та інших аспектів мультфільму.</li>
                    <li>Забезпечення високої швидкості роботи та зручного пошуку та сортування інформації.</li>
                    <li>Створення можливості користувачам створювати персональні списки улюблених персонажів для збереження та подальшого використання.</li>
                    <li>Надання актуальної та повної інформації про всі аспекти мультфільму "Rick and Morty".</li>
                    <li>Створення захоплюючого та зацікавлюючого веб-середовища для фанатів мультсеріалу.</li>
                </ol>
                <br/>
                <a href="https://github.com/dremafedka/web_main">Код додатку</a>
            </div>
            ;
            break;
        case "Зовнішній вигляд макету. Код макету":
            content = <div>
                <img style={{ width: "400px", height: "400px" }} src={myImage} alt=""/>
                <br/>
                <a href={"https://github.com/dremafedka/cv_page"}>Код макету</a>
            </div>
            break
        case "Фіксована таблична верстка":
            content = <div>
                <img style={{ width: "600px", height: "400px" }} src={table} alt=""/>
                <br/>
                <a href={"https://github.com/dremafedka/lab3_all"}>Код макету</a>
                </div>
            break
        case "Гумова таблична верстка":
            content = (
                <div>
                    <img style={{ width: "600px", height: "400px" }} src={table} alt=""/>
                    <br/>
                    <a href={"https://github.com/dremafedka/lab3_all"}>Код макету</a>
                </div>
            );
            break;
        case "Фіксована блокова верстка":
            content = (
                <div>
                    <img style={{ width: "400px", height: "400px" }} src={flexible} alt=""/>
                    <br/>
                    <a href={"https://github.com/dremafedka/lab3_all"}>Код макету</a>
                </div>
            );
            break;
        case "Гумова блокова верстка":
            content = (
                <div>
                    <img style={{ width: "400px", height: "400px" }} src={flexible} alt=""/>
                    <br/>
                    <a href={"https://github.com/dremafedka/lab3_all"}>Код макету</a>
                </div>

        );
            break;
        case "Зовнішній вигляд сторінки":
            content = <div>
                <img style={{ width: "600px", height: "400px" }} src={flexbox} alt=""/>
            </div>;
            break;
        case "HTML-код":
            content = <div>
                <a href={"https://github.com/dremafedka/lab3-flexbox"}>Код макету</a>
            </div>;
            break;
        case "CSS-код":
            content = <div>
                <a href={"https://github.com/dremafedka/lab3-flexbox"}>Код макету</a>
            </div>;
            break;
        case "Висновки":
            content = <div>
                Придбав практичні навички роботи верстки сторінок засобами CSS, верстки на основі плаваючих елементів, з’ясував переваги та недоліки типів макетів вебсторінок ⎯ придбав практичні навички роботи верстки сторінок засобами CSS та FLEXBOX
            </div>;
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тема Мета місце розташування лаби №3")}>Тема Мета місце розташування лаби №3</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Зовнішній вигляд макету. Код макету")}>Зовнішній вигляд макету. Код макету</div>
                <div className={styles.menu_item}>
                    Завдання №2
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Фіксована таблична верстка")}>Фіксована таблична верстка</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Гумова таблична верстка")}>Гумова таблична верстка</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Фіксована блокова верстка")}>Фіксована блокова верстка</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Гумова блокова верстка")}>Гумова блокова верстка</div>
                </div>
                <div className={styles.menu_item}>
                    Завдання №3
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Зовнішній вигляд сторінки")}>Зовнішній вигляд сторінки</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("HTML-код")}>HTML-код</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("CSS-код")}>CSS-код</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

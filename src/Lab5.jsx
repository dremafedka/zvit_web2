import styles from './lab.module.css'
import {useState} from "react";
import lab5_1 from './assets/lab5_1.png'
import lab5_2 from './assets/lab5_2.png'
import lab5_3 from './assets/lab5_3.png'
import lab5_4 from './assets/lab5_4.png'
import lab5_5 from './assets/lab5_5.png'
import lab5_6 from './assets/lab5_6.png'
import lab5_7 from './assets/lab5_7.png'


export const Lab5 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №1":
            content = <div><h1>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.</h1>
                <h2>Мета розробки:</h2>
                <span>У ході виконання лабораторної роботи було застосовано декілька сценаріїв використання JavaScript.</span>
                <br/>
                <a href="https://github.com/dremafedka/lab_5">Код додатку</a>
            </div>;
            break;
        case "Робота з масивами (4 пункт)":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab5_1} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab5_2} alt=""/>
                    <br/>
                    <img style={{ width: "600px"}} src={lab5_3} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Обробник подій":
            content = (
                <div>
                    <img style={{ width: "400px" }} src={lab5_4} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Вставка (тег SCRIPT)":
            content = (
                <div>
                    <img style={{ width: "400px" }} src={lab5_5} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Будильник (6 пункт)":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={lab5_7} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={lab5_6} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Висновки":
            content = <div>
                <h1>Висновки по роботі над проєктом</h1>
                <ul>
                    <li>Тепер я можу створювати веб-сторінки, які використовують різні сценарії роботи з JavaScript.</li>
                    <li>Я навчився використовувати слухачі подій та працювати з масивами.</li>
                    <li>Я можу застосовувати сортування масивів методом бульбашки</li>
                </ul>
            </div>;
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тема Мета місце розташування лаби №1")}>Тема Мета місце розташування лаби №1</div>
                <div className={styles.menu_item}>
                    Способи функціонального застосування JavaScript
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Робота з масивами (4 пункт)")}>Робота з масивами (4 пункт)</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Обробник подій")}>Обробник подій</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Вставка (тег SCRIPT)")}>Вставка (тег SCRIPT)</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Будильник (6 пункт)")}>Будильник (6 пункт)</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

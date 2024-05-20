import styles from './lab.module.css'
import {useState} from "react";
import lab7_1 from './assets/lab7_1.png'
import lab7_2 from './assets/lab7_2.png'
import lab7_3 from './assets/lab7_3.png'
import lab7_4 from './assets/lab7_4.png'
import lab7_5 from './assets/lab7_5.png'


export const Lab7 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №7":
            content = <div><h1>ФУНКЦІОНАЛЬНЕ ЗАСТОСУВАННЯ JAVASCRIPT У HTML-ДОКУМЕНТІ.</h1>
                <h2>Мета розробки:</h2>
                <span>У ході виконання лабораторної роботи було застосовано декілька сценаріїв використання JavaScript.</span>
                <br/>
                <a href="https://github.com/dremafedka/lab_7">Код додатку</a>
            </div>;
            break;
        case "Завдання 1":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_1} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_2} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab7_3} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Завдання 2":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_4} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab7_5} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Висновки":
            content = <div>
                <h1>Висновки по роботі над проєктом</h1>
                <ul>
                    <li>Тепер я можу створювати веб-сторінки, які використовують сторонні біліотеки.</li>
                    <li>Я навчився створювати слайдери за допомогою сторонніх бібліотек.</li>
                    <li>Я навчився працювати з формами та обробляти дані.</li>
                </ul>
            </div>;
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тема Мета місце розташування лаби №7")}>Тема Мета місце розташування лаби №7</div>
                <div className={styles.menu_item}>
                    Способи функціонального застосування JavaScript
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 1")}>Завдання 1</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 2")}>Завдання 2</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

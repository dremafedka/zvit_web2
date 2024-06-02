import styles from './lab.module.css'
import {useState} from "react";
import lab5_1 from './assets/lab5_1.png'
import lab5_2 from './assets/lab5_2.png'
import lab5_3 from './assets/lab5_3.png'
import lab5_4 from './assets/lab5_4.png'
import lab5_5 from './assets/lab5_5.png'
import lab5_6 from './assets/lab5_6.png'
import lab5_7 from './assets/lab5_7.png'
import img1 from './assets/lab5/img.png'
import img2 from './assets/lab5/img_1.png'
import img3 from './assets/lab5/img_2.png'
import img4 from './assets/lab5/img_3.png'
import img5 from './assets/lab5/img_4.png'
import img6 from './assets/lab5/img_5.png'
import img7 from './assets/lab5/img_6.png'
import img8 from './assets/lab5/img_7.png'
import img9 from './assets/lab5/img_8.png'
import img10 from './assets/lab5/img_9.png'
import img11 from './assets/lab5/img_10.png'
import img12 from './assets/lab5/img_11.png'


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
        case "Лаба 5.1":
            content = (
                <div>
                    <h1>Завдання 2</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img1} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img2} alt=""/>
                    <br/>
                    <h1>Завдання 4</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img3} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img4} alt=""/>
                    <br/>
                    <h1>Завдання 6</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img5} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img6} alt=""/>
                    <br/>
                    <h1>Завдання 8</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img7} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img8} alt=""/>
                    <br/>
                    <h1>Завдання 9</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img9} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img10} alt=""/>
                    <br/>
                    <h1>Завдання 10</h1>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img11} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "400px" }} src={img12} alt=""/>
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
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Лаба 5.1")}>Лаба 5.1</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

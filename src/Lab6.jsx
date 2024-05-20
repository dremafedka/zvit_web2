import styles from './lab.module.css'
import {useState} from "react";
import lab6_1 from './assets/lab6_1.png'
import lab6_2 from './assets/lab6_2.png'
import lab6_3 from './assets/lab6_3.png'
import lab6_4 from './assets/lab6_4.png'
import lab6_5 from './assets/lab6_5.png'
import lab6_6 from './assets/lab6_6.png'
import lab6_7 from './assets/lab6_7.png'
import lab6_8 from './assets/lab6_8.png'
import lab6_9 from './assets/lab6_9.png'
import lab6_10 from './assets/lab6_10.png'



export const Lab6 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №1":
            content = <div><h1>КЛАСИ. ОБ'ЄКТНА МОДЕЛЬ ДОКУМЕНТА (DOM). </h1>
                <h2>Мета розробки:</h2>
                <span>У ході виконання лабораторної роботи було застосовано декілька сценаріїв використання JavaScript.</span>
                <br/>
                <a href="https://github.com/dremafedka/lab_6">Код додатку</a>
            </div>;
            break;
        case "Завдання 2":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab6_1} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab6_2} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Завдання 4":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab6_3} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab6_4} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Завдання 6":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab6_5} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab6_6} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Завдання 8":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab6_7} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab6_8} alt=""/>
                    <br/>
                </div>
            );
            break;
        case "Завдання 10":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Вигляд програми</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab6_9} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Код програми</span>
                    <br/>
                    <img style={{ width: "600px"}} src={lab6_10} alt=""/>
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
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 2")}>Завдання 2</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 4")}>Завдання 4</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 6")}>Завдання 6</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 8")}>Завдання 8</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Завдання 10")}>Завдання 10</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

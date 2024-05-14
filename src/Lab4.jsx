import styles from './lab.module.css'
import {useState} from "react";
import cv_1 from './assets/cv_1.png'
import cv_2 from './assets/cv_2.png'
import cv_3 from './assets/cv_3.png'
import mf_1 from './assets/mf_1.png'
import mf_2 from './assets/mf_2.png'
import mf_3 from './assets/mf_3.png'
import adaptive_1 from './assets/adaptive_1.png'
import adaptive_2 from './assets/adaptive_2.png'

export const Lab4 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №1":
            content = <div><h1>Адаптивна верстка. Медіа-запити. Метатег Viewport. Стратегія Mobile First.</h1>
                <h2>Мета розробки:</h2>
                <span>У ході виконання лабораторної роботи було застосовано декілька видів адаптивної верстки.
                    Для резюме я використав медіа-запити. Для своєї веб-сторінки використав концепцію Mobile-first</span>
                <br/>
                <a href="https://github.com/dremafedka/web_main">Код додатку</a>
            </div>;
            break;
        case "Адаптивне резюме":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Десктопна версія</span>
                    <br/>
                    <img style={{ width: "600px" }} src={cv_1} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Планшетна версія</span>
                    <br/>
                    <img style={{ width: "600px"}} src={cv_2} alt=""/>
                    <br/>
                    <span style={{fontSize: "40px"}}>Мобільна версія</span>
                    <br/>
                    <img style={{ width: "600px"}} src={cv_3} alt=""/>
                </div>
            );
            break;
        case "Код медіа-запитів":
            content = (
                <div>
                    <img style={{ width: "400px" }} src={adaptive_1} alt=""/>
                    <br/>
                    <img style={{ width: "400px" }} src={adaptive_2} alt=""/>
                </div>
            );
            break;
        case "Mobile-first сторінка":
            content = (
                <div>
                    <img style={{ width: "400px" }} src={mf_1} alt=""/>
                    <br/>
                    <img style={{ width: "400px" }} src={mf_2} alt=""/>
                    <br/>
                    <img src={mf_3} alt=""/>
                </div>
            );
            break;
        case "Висновки":
            content = <div>
                <h1>Висновки по роботі над проєктом</h1>
                <ul>
                    <li>Тепер я можу створювати веб-сторінки, які динамічно змінюють свій макет, щоб оптимально відображатися на різних пристроях, таких як смартфони, планшети та настільні комп'ютери.</li>
                    <li>Я навчився використовувати інструменти розробника браузера для налагодження та тестування веб-сторінок.</li>
                    <li>Я можу застосовувати стратегію Mobile First при розробці веб-сторінок, спочатку розробляючи їх для мобільних пристроїв, а потім розширюючи для настільних комп'ютерів.</li>
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
                    Структура документа
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Адаптивне резюме")}>Адаптивне резюме</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Код медіа-запитів")}>Код медіа-запитів</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Mobile-first сторінка")}>Mobile-first сторінка</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

import styles from './lab.module.css'
import {useState} from "react";

export const Lab2 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Тема Мета місце розташування лаби №2":
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
        case "Способи підключення стилів":
            content = <div>
                Вкладений:
                <br/>
                &lt;p style=&quot;color: red; font-size: 16px;&quot;&gt;Це текст з вбудованими стилями.&lt;/p&gt;
                <br/>
                <br/>
                Внутрішній:
                <br/>
                &lt;style&gt;
                <br/>
                p &#123;
                <br/>
                color: blue;
                <br/>
                font-size: 18px;
                <br/>
                &#125;
                <br/>
                &lt;/style&gt;
                <br/>
                <br/>
                Зовнішній:
                p &#123;
                <br/>
                color: green;
                <br/>
                font-size: 20px;
                <br/>
                &#125;
            </div>
            break
        case "Селектори тегу":
            content =
                <div>
                    p &#123;
                    <br/>
                    color: green;
                    <br/>
                    font-size: 20px;
                    <br/>
                    &#125;
                </div>
            break
        case "Селектори класу":
            content = (
                <div>
                    .menu_item &#123;
                    <br/>
                    color: green;
                    <br/>
                    font-size: 20px;
                    <br/>
                    &#125;
                </div>
            );
            break;
        case "Селектори ідентифікаторів":
            content = (
                <div>
                    #subitem &#123;
                    <br/>
                    color: green;
                    <br/>
                    font-size: 20px;
                    <br/>
                    &#125;
                </div>
            );
            break;
        case "Інші селектори":
            content = (
                <div>
                    Селектор атрибута:
                    <br/>
                        &lt;div data-example="example-value"&gt;Елемент з атрибутом data-example&lt;/div&gt;
                        <br/>
                            <br/>
                                Селектор дочірнього елемента:
                                <br/>
                                    &lt;ul&gt;
                                    <li>Елемент 1</li>
                                    <li>Елемент 2</li>
                                    &lt;/ul&gt;
                                    <br/>
                                        Селектор нащадка:
                                        <br/>
                                            &lt;div&gt;
                                            &lt;p&gt;Текст 1&lt;/p&gt;
                                            &lt;div&gt;
                                            &lt;p&gt;Текст 2&lt;/p&gt;
                                            &lt;/div&gt;
                                            &lt;/div&gt;
                                            <br/>
                                                Селектор псевдокласу:
                                                <br/>
                                                    &lt;a href="#"&gt;Посилання&lt;/a&gt;
                                                    <br/>
                </div>

        );
            break;
        case "CSS":
            content = <div>
                :root &#123;
                <br/>
                font-family: Inter, system-ui, Avenir, Helvetica, Arial, sans-serif;
                <br/>
                line-height: 1.5;
                <br/>
                font-weight: 400;
                <br/>
                <br/>

                font-synthesis: none;
                <br/>
                text-rendering: optimizeLegibility;
                <br/>
                -webkit-font-smoothing: antialiased;
                <br/>
                -moz-osx-font-smoothing: grayscale;
                <br/>
                <br/>

                display: flex;
                <br/>
                justify-content: center;
                <br/>
                &#125;
            </div>;
            break;
        case "Висновки":
            content = <div>
                <h1>Висновки по роботі над проєктом</h1>
                Я придбав практичні навички роботи з селекторами , ідентифікаторами, списками, різноманітними властивостями кольору і фону,
                зовнішними та внутрішними відступами, плаваючими елементами, оформленням текстових елементів
            </div>;
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тема Мета місце розташування лаби №2")}>Тема Мета місце розташування лаби №2</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Способи підключення стилів")}>Способи підключення стилів</div>
                <div className={styles.menu_item}>
                    Селектори
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Селектори тегу")}>Селектори тегу</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Селектори класу")}>Селектори класу</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Селектори ідентифікаторів")}>Селектори ідентифікаторів</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("Інші селектори")}>Інші селектори</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("CSS")}>CSS</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

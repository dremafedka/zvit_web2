import styles from './lab.module.css'
import {useState} from "react";
import form_1 from './assets/form_1.png'
import form_2 from './assets/form_2.png'
import form_3 from './assets/form_3.png'
import image from "./assets/image.png";

export const Lab1 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Опис предметного середовища":
            content = <div>
                <h1>Назва продукту: Rick and Morty Fanpage</h1>
                <h2>Огляд:</h2>
                <p>Rick and Morty Fanpage - це онлайн-платформа, призначена для всіх шанувальників і поціновувачів мультфільму "Rick and Morty". Сайт надає унікальну можливість дізнатися більше про улюблені персонажі, місця та події цього захоплюючого мультсеріалу.</p>

                <h2>Основні функції:</h2>

                <h3>Повна Інформація про Персонажі:</h3>
                <ul>
                    <li>Детальні профілі кожного персонажа з основними характеристиками, історією та фото.</li>
                    <li>Здійснення пошуку персонажів за іменем, категорією чи епізодом.</li>
                </ul>

                <h3>Власний Список Улюблених:</h3>
                <ul>
                    <li>Можливість створювати персональний список улюблених персонажів.</li>
                    <li>Зручна система управління та сортування списку.</li>
                </ul>

                <h3>Артефакти та Локації:</h3>
                <ul>
                    <li>Інформація про артефакти та унікальні місця в мультсеріалі.</li>
                    <li>Зображення та опис кожного артефакту та локації.</li>
                </ul>

                <h3>Спільнота та Обговорення:</h3>
                <p>Ключові переваги:</p>
                <ul>
                    <li>Висока швидкість роботи завдяки SSR та SSG.</li>
                    <li>Зручний пошук та сортування інформації.</li>
                    <li>Можливість створення персонального списку улюблених.</li>
                    <li>Актуальна та повна інформація про всі аспекти мультфільму.</li>
                </ul>
            </div>
            ;
            break;
        case "Тема Мета місце розташування лаби №1":
            content = <div><h1>Тема: Розробка веб-платформи "Rick and Morty Fanpage"</h1>
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
            </div>;
            break;
        case "HTML-код таблиць":
            content = (
                <div>
                    &lt;table border="1"&gt;<br/>
                    &lt;tr&gt;<br/>
                    &lt;td&gt;&lt;h2&gt;Logo&lt;/h2&gt;&lt;/td&gt;<br/>
                    &lt;td colspan="2"&gt;Header&lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                    &lt;tr&gt;<br/>
                    &lt;td&gt;<br/>
                    &lt;p&gt;Menu&lt;/p&gt;<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;Category 1&lt;/li&gt;<br/>
                    &lt;li&gt;Categoty 2&lt;/li&gt;<br/>
                    &lt;li&gt;Category 3&lt;/li&gt;<br/>
                    &lt;li&gt;Category 4<br/>
                    &lt;ul&gt;<br/>
                    &lt;li&gt;Sub category 1&lt;/li&gt;<br/>
                    &lt;li&gt;Sub category 2&lt;/li&gt;<br/>
                    &lt;/ul&gt;<br/>
                    &lt;/li&gt;<br/>
                    &lt;/ul&gt;<br/>
                    &lt;/td&gt;<br/>
                    &lt;td&gt;<br/>
                    &lt;h2&gt;Title Article&lt;/h2&gt;<br/>
                    &lt;p&gt;Lorem ipsum dolor sit amet consectetur adipisicing elit. Eveniet, sed corrupti consectetur alias dolor voluptas repudiandae soluta laborum laudantium quos nisi non quod cum magni cumque asperiores. Esse, excepturi necessitatibus!&lt;/p&gt;<br/>
                    &lt;/td&gt;<br/>
                    &lt;td&gt;<br/>
                    &lt;h3&gt;Advertise&lt;/h3&gt;<br/>
                    &lt;table border="1"&gt;<br/>
                    &lt;tr&gt;<br/>
                    &lt;td&gt;Block 1&lt;/td&gt;<br/>
                    &lt;td&gt;Block 2&lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                    &lt;tr&gt;<br/>
                    &lt;td&gt;Block 3&lt;/td&gt;<br/>
                    &lt;td&gt;Block 4&lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                    &lt;/table&gt;<br/>
                    &lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                    &lt;tr&gt;<br/>
                    &lt;td colspan="3"&gt;Footer&lt;/td&gt;<br/>
                    &lt;/tr&gt;<br/>
                    &lt;/table&gt;<br/>
                </div>
            );
            break;
        case "HTML-код форми":
            content = (
                <div>
                    <img style={{ width: "600px" }} src={form_1} alt=""/>
                    <img style={{ width: "600px" }} src={form_2} alt=""/>
                    <img style={{ width: "600px" }} src={form_3} alt=""/>
                </div>
            );
            break;
        case "HTML-код зображення":
            content = (
                <div>
                    <img style={{ width: "600px" }} src={image} alt=""/>
                </div>
            );
            break;
        case "Висновки":
            content = <div>
                <h1>Висновки по роботі над проєктом</h1>
                <ul>
                    <li>Я навчився створювати інтерактивні веб-сайти з використанням HTML, CSS і JavaScript.</li>
                    <li>Оволодів базовими концепціями HTML для структурування веб-сторінок, CSS для оформлення та стилізації, а також JavaScript для додавання інтерактивності.</li>
                    <li>Навчився працювати з даними про персонажі, артефакти та локації з мультсеріалу "Rick and Morty", включаючи їх зберігання, відображення та обробку на стороні клієнта.</li>
                    <li>Розробив функціонал, який полегшує користувачам знаходити інформацію про персонажі, створювати персональні списки та спілкуватися з іншими шанувальниками мультфільму.</li>
                </ul>
            </div>;
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Опис предметного середовища")}>Опис предметного середовища</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тема Мета місце розташування лаби №1")}>Тема Мета місце розташування лаби №1</div>
                <div className={styles.menu_item}>
                    Структура документа
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("HTML-код таблиць")}>HTML-код таблиць</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("HTML-код форми")}>HTML-код форми</div>
                    <div className={styles.menu_subitem} onClick={() => handleMenuItemClick("HTML-код зображення")}>HTML-код зображення</div>
                </div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Висновки")}>Висновки</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

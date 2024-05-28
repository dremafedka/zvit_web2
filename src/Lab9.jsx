import styles from './lab.module.css'
import {useState} from "react";
import lab9_1 from './assets/lab9_1.png'
import lab9_2 from './assets/lab9_2.png'
import lab9_3 from './assets/lab9/photo_1_2024-05-28_18-52-27.jpg';
import lab9_4 from './assets/lab9/photo_2_2024-05-28_18-52-27.jpg';
import lab9_5 from './assets/lab9/photo_3_2024-05-28_18-52-27.jpg';
import lab9_6 from './assets/lab9/photo_4_2024-05-28_18-52-27.jpg';
import lab9_7 from './assets/lab9/photo_5_2024-05-28_18-52-27.jpg';
import lab9_8 from './assets/lab9/photo_6_2024-05-28_18-52-27.jpg';
import lab9_9 from './assets/lab9/photo_7_2024-05-28_18-52-27.jpg';
import lab9_10 from './assets/lab9/photo_8_2024-05-28_18-52-27.jpg';
import lab9_11 from './assets/lab9/photo_9_2024-05-28_18-52-27.jpg';
import lab9_12 from './assets/lab9/photo_10_2024-05-28_18-52-27.jpg';
import lab9_13 from './assets/lab9/photo_11_2024-05-28_18-52-27.jpg';
import lab9_14 from './assets/lab9/photo_12_2024-05-28_18-52-27.jpg';
import lab9_15 from './assets/lab9/photo_13_2024-05-28_18-52-27.jpg';
import lab9_16 from './assets/lab9/photo_14_2024-05-28_18-52-27.jpg';
import lab9_17 from './assets/lab9/photo_15_2024-05-28_18-52-27.jpg';

export const Lab9 = () => {

    const [selectedMenuItem, setSelectedMenuItem] = useState(null);

    const handleMenuItemClick = (menuItem) => {
        setSelectedMenuItem(menuItem);
    };

    let content = null;
    switch (selectedMenuItem) {
        case "Оцінки":
            content =
                <div>
                    <h1>Оцінки</h1>
                    <img style={{ width: "600px" }} src={lab9_1} alt=""/>
                </div>;
            break;
        case "Сертифікат":
            content = (
                <div>
                    <h1>Сертифікат</h1>
                    <img style={{ width: "600px" }} src={lab9_2} alt=""/>
                </div>
            );
            break;
        case "Тести":
            content = (
                <div>
                    <span style={{fontSize: "40px"}}>Тести</span>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_3} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_4} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_5} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_6} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_7} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_8} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_9} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_10} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_11} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_12} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_13} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_14} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_15} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_16} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab9_17} alt=""/>
                    <br/>
                </div>
            );
            break;
        default:
            content = null;
    }

    return (
        <div className={styles.content_container}>
            <div className={styles.nav_content}>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Оцінки")}>Оцінки</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Сертифікат")}>Сертифікат</div>
                <div className={styles.menu_item} onClick={() => handleMenuItemClick("Тести")}>Тести</div>
            </div>
            <div className={styles.lab_content}>
                {content}
            </div>
        </div>
    )
}

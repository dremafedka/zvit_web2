import styles from './lab.module.css'
import {useState} from "react";
import lab8_1 from './assets/lab8_1.png'
import lab8_2 from './assets/lab8_2.png'
import lab7_6 from './assets/photo_10_2024-05-28_18-37-14.jpg';
import lab7_7 from './assets/photo_2_2024-05-28_18-37-14.jpg';
import lab7_8 from './assets/photo_3_2024-05-28_18-37-14.jpg';
import lab7_9 from './assets/photo_4_2024-05-28_18-37-14.jpg';
import lab7_10 from './assets/photo_5_2024-05-28_18-37-14.jpg';
import lab7_11 from './assets/photo_6_2024-05-28_18-37-14.jpg';
import lab7_12 from './assets/photo_7_2024-05-28_18-37-14.jpg';
import lab7_13 from './assets/photo_8_2024-05-28_18-37-14.jpg';
import lab7_14 from './assets/photo_9_2024-05-28_18-37-14.jpg';
import lab7_15 from './assets/photo_10_2024-05-28_18-37-14.jpg';
import lab7_16 from './assets/photo_11_2024-05-28_18-37-14.jpg';
import lab7_17 from './assets/photo_12_2024-05-28_18-37-14.jpg';
import lab7_18 from './assets/photo_13_2024-05-28_18-37-14.jpg';
import lab7_19 from './assets/photo_14_2024-05-28_18-37-14.jpg';
import lab7_20 from './assets/photo_15_2024-05-28_18-37-14.jpg';
import lab7_21 from './assets/photo_16_2024-05-28_18-37-14.jpg';
import lab7_22 from './assets/photo_17_2024-05-28_18-37-14.jpg';
import lab7_23 from './assets/photo_18_2024-05-28_18-37-14.jpg';
import lab7_24 from './assets/photo_19_2024-05-28_18-37-14.jpg';
import lab7_25 from './assets/photo_20_2024-05-28_18-37-14.jpg';
import lab7_26 from './assets/photo_21_2024-05-28_18-37-14.jpg';
import lab7_27 from './assets/photo_22_2024-05-28_18-37-14.jpg';
import lab7_28 from './assets/photo_23_2024-05-28_18-37-14.jpg';
import lab7_29 from './assets/photo_24_2024-05-28_18-37-14.jpg';
import lab7_30 from './assets/photo_25_2024-05-28_18-37-14.jpg';
import lab7_31 from './assets/photo_26_2024-05-28_18-37-14.jpg';
import lab7_32 from './assets/photo_27_2024-05-28_18-37-14.jpg';
import lab7_33 from './assets/photo_28_2024-05-28_18-37-14.jpg';
import lab7_34 from './assets/photo_29_2024-05-28_18-37-14.jpg';
import lab7_35 from './assets/photo_30_2024-05-28_18-37-14.jpg';
import lab7_36 from './assets/photo_31_2024-05-28_18-37-14.jpg';
import lab7_37 from './assets/photo_32_2024-05-28_18-37-14.jpg';



export const Lab8 = () => {

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
                    <img style={{ width: "600px" }} src={lab8_1} alt=""/>
                </div>
            break;
        case "Сертифікат":
            content = (
                <div>
                    <h1>Сертифікат</h1>
                    <img style={{ width: "600px" }} src={lab8_2} alt=""/>
                </div>
            );
            break;
        case "Тести":
            content = (
                <div>
                    <h1>Сертифікат</h1>
                    <img style={{ width: "600px" }} src={lab7_6} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_7} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_8} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_9} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_10} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_11} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_12} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_13} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_14} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_15} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_16} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_17} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_18} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_19} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_20} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_21} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_22} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_23} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_24} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_25} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_26} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_27} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_28} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_29} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_30} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_31} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_32} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_33} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_34} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_35} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_36} alt=""/>
                    <br/>
                    <img style={{ width: "600px" }} src={lab7_37} alt=""/>
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

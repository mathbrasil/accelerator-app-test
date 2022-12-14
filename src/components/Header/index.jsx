import React from "react";

import * as styles from "./style.module.css";

import acceleratorAppLogo from "../../assets/images/acceleratorAppLogo.svg";
import chatIcon from "../../assets/icons/chatIcon.svg";

const Header = () => {
    return (
        <header className={styles.header}>
            <div className={styles.container}>
                <img src={acceleratorAppLogo} alt="" className={styles.logo} />
                <div className={styles.test}>
                    <div className={styles.button}>
                        <span className={styles.span}></span>
                        <span className={styles.span}></span>
                        <span className={styles.span}></span>
                    </div>
                    <nav className={styles.nav}>
                        <a href="#community">Community</a>
                        <a href="#features">Features</a>
                        <a href="#feedbacks">Feedbacks</a>
                        <a href="#contactUs">Contact Us</a>
                    </nav>
                </div>
            </div>
            <span className={styles.chat}>
                <img src={chatIcon} alt="" className={styles.chatIcon} />
            </span>
        </header>
    );
};

export default Header;

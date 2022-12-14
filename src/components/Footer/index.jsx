import React from "react";

import * as styles from "./style.module.css";

import acceleratorAppLogo from "../../assets/images/acceleratorAppLogo.svg";

const Footer = () => {
    return (
        <footer className={styles.container}>
            <div className={styles.footerContainer}>
                <div className={styles.footerListContainer}>
                    <div className={styles.footerList}>
                        <h4 className={styles.listTitle}>List Title</h4>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply dum
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply dummy text
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is
                        </a>
                    </div>
                    <div className={styles.footerList}>
                        <h4 className={styles.listTitle}>List Title</h4>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simp
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ip
                        </a>
                    </div>
                    <div className={styles.footerList}>
                        <h4 className={styles.listTitle}>List Title</h4>
                        <a href="" className={styles.listItem}>
                            Lorem Ip
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum i
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply du
                        </a>
                    </div>
                    <div className={styles.footerList}>
                        <h4 className={styles.listTitle}>List Title</h4>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply d
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply du
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is sim
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ips
                        </a>
                        <a href="" className={styles.listItem}>
                            Lorem Ipsum is simply dumm
                        </a>
                    </div>
                </div>
                <span className={styles.footerDivision}></span>
                <img src={acceleratorAppLogo} alt="" className={styles.logo} />
                <p className={styles.createdBy}>
                    Created by{" "}
                    <a
                        href="https://www.linkedin.com/in/mathbrasil/"
                        target={"_blank"}
                        rel="noreferrer"
                        className={styles.createdLink}
                    >
                        @mathbrasil
                    </a>{" "}
                    for AcceleratorApp. All rights reserved.
                </p>
            </div>
        </footer>
    );
};

export default Footer;

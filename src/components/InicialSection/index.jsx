import React from "react";

import * as styles from "./style.module.css";

import graphics from "../../assets/images/graphics.svg";

const InicialSection = () => {
    return (
        <section className={styles.container}>
            <p> Join in and connect </p>

            <h1 className={styles.title}>
                To faster your innovation potential
            </h1>

            <p className={styles.description}>
                AcceleratorApp Innovation Community — Tools and community to
                facilitate innovation between all members of our community
            </p>

            <button className={styles.button}>Schedule a Demo</button>

            <img
                src={graphics}
                className={styles.imgContainer}
                draggable="false"
                alt=""
            />
        </section>
    );
};

export default InicialSection;

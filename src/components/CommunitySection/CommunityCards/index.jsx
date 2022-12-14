import React from "react";
import { communityList } from "../../../services/db";

import smallGraphIcon from "../../../assets/icons/smallGraphIcon.svg";
import smallCorpIcon from "../../../assets/icons/smallCorpIcon.svg";
import smallInvestIcon from "../../../assets/icons/smallInvestIcon.svg";
import smallRocketIcon from "../../../assets/icons/smallRocketIcon.svg";
import plusCircleIcon from "../../../assets/icons/plusCircleIcon.svg";
import checkIcon from "../../../assets/icons/checkIcon.svg";

import * as styles from "./style.module.css";

const CommunityCards = () => {
    const icons = [
        smallGraphIcon,
        smallCorpIcon,
        smallInvestIcon,
        smallRocketIcon,
        plusCircleIcon,
    ];

    return (
        <ul className={styles.cardContainer}>
            {communityList.map((item, index) => (
                <li key={index} className={styles.card}>
                    <div className={styles.cardHeader}>
                        <img
                            src={icons[index]}
                            className={styles.icons}
                            alt="icon"
                        />
                        <h3 className={styles.cardTitle}>{item.title}</h3>
                    </div>
                    <div className={styles.cardDescription}>
                        {item.description.map((paragraph, index) => (
                            <p key={index} className={styles.paragraphs}>
                                {paragraph}
                            </p>
                        ))}
                    </div>
                    <h4 className={styles.featuresTitle}>Popular Features</h4>
                    <ul>
                        {item.features.map((feature, index) => (
                            <li key={index} className={styles.featuresList}>
                                <img src={checkIcon} alt="" />
                                {feature}
                            </li>
                        ))}
                    </ul>
                    <button className={styles.button}>Get Started</button>
                </li>
            ))}
        </ul>
    );
};

export default CommunityCards;

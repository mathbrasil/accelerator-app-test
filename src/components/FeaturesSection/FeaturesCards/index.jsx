import React, { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import { featuresList } from "../../../services/db";

import multilingualIcon from "../../../assets/icons/multilingualIcon.svg";
import scheduleToolsIcon from "../../../assets/icons/scheduleToolsIcon.svg";
import smartTaskIcon from "../../../assets/icons/smartTaskIcon.svg";
import trackEmailIcon from "../../../assets/icons/trackEmailIcon.svg";
import autoEmailIcon from "../../../assets/icons/autoEmailIcon.svg";
import calendarIcon from "../../../assets/icons/calendarIcon.svg";
import zapierLogo from "../../../assets/icons/zapierLogo.svg";
import plusIcon from "../../../assets/icons/plusIcon.svg";
import arrowIcon from "../../../assets/icons/arrowIcon.svg";

import * as styles from "./style.module.css";

const FeaturesCards = () => {
    const icons = [
        multilingualIcon,
        scheduleToolsIcon,
        smartTaskIcon,
        trackEmailIcon,
        autoEmailIcon,
        calendarIcon,
        zapierLogo,
        plusIcon,
    ];

    const [pageSize, setPageSize] = useState(591);

    useEffect(() => {
        function handleResize() {
            setPageSize(window.innerWidth);
        }

        window.addEventListener("resize", handleResize);
    });

    return pageSize > 590 ? (
        <ul className={styles.cardContainer}>
            {featuresList.map((item, index) => (
                <li key={index} className={styles.card}>
                    <img src={icons[index]} alt="" />
                    <h3 className={styles.cardTitle}>{item.title}</h3>
                    <p className={styles.cardDescription}>{item.description}</p>
                </li>
            ))}
            <li className={styles.discoverCard}>
                <button className={styles.button}>
                    Discover its functions{" "}
                    <img src={arrowIcon} alt="arrow icon" />
                </button>
            </li>
        </ul>
    ) : (
        <div className={styles.swiperContainer}>
            <Swiper
                pagination={{ clickable: true }}
                modules={[Pagination]}
                className={styles.swiper}
                id = "pagination"
            >
                {featuresList.map((item, index) => (
                    <SwiperSlide key={index} className={styles.swiperSlide}>
                        <div className={styles.slideContent}>
                            <img src={icons[index]} alt="" />
                            <h3 className={styles.cardTitle}>{item.title}</h3>
                            <p className={styles.cardDescription}>
                                {item.description}
                            </p>
                        </div>
                    </SwiperSlide>
                ))}
                <SwiperSlide>
                    <div className={styles.discoverCard}>
                        <button className={styles.button}>
                            Discover its functions{" "}
                            <img src={arrowIcon} alt="arrow icon" />
                        </button>
                    </div>
                </SwiperSlide>
                <div className={styles.bulletsHight}></div>
            </Swiper>
        </div>
    );
};

export default FeaturesCards;

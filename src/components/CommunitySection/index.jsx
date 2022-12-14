import React from "react";

import * as styles from "./style.module.css";

import CommunityCards from "./CommunityCards";

import graphImage from "../../assets/images/graphImage.svg";
import rocketImage from "../../assets/images/rocketImage.svg";
import appsImage from "../../assets/images/appsImage.svg";
import docImage from "../../assets/images/docImage.svg";
import investImage from "../../assets/images/investImage.svg";

const CommunitySection = () => {
    return (
        <section className={styles.container} id="community">
            <div className={styles.imageGroupContainer}>
                <img
                    src={graphImage}
                    alt=""
                    className={[styles.imageGroup, styles.img1].join(" ")}
                />
                <img
                    src={rocketImage}
                    alt=""
                    className={[styles.imageGroup, styles.img2].join(" ")}
                />
                <img src={appsImage} alt="" className={styles.imageGroup} />
                <img
                    src={docImage}
                    alt=""
                    className={[styles.imageGroup, styles.img2].join(" ")}
                />
                <img
                    src={investImage}
                    alt=""
                    className={[styles.imageGroup, styles.img1].join(" ")}
                />
            </div>
            <div className={styles.communityHeader}>
                <h3 className={styles.communityTitle}>Community</h3>
                <h4 className={styles.communitySubTitle}>
                    Lorem ipsum dolor sit amet
                </h4>
                <p className={styles.communityParagraph}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
            </div>
            <CommunityCards />
        </section>
    );
};

export default CommunitySection;

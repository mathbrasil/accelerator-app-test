import React from "react";

import * as styles from "./style.module.css";

import arrowIcon from "../../assets/icons/arrowIcon.svg";
import FeedbackList from "./FeedbackList";

const FeedbackSection = () => {
    return (
        <section className={styles.container} id="feedbacks">
            <div className={styles.feedbackContainer}>
                <div>
                    <h3 className={styles.feedbackTitle}>
                        What our customers say
                    </h3>
                    <button className={styles.feedbackButton}>
                        150 + incubators/accelerators using AcceleratorApp{" "}
                        <img src={arrowIcon} alt="" />
                    </button>
                </div>
                <FeedbackList />
            </div>
            <div className={styles.contactContainer}>
                <p className={styles.contactTitle}>What are you waiting for?</p>
                <h3 className={styles.contactText}>
                    Join +150 companies that already trust us for their growth
                </h3>
                <div className={styles.buttons}>
                    <button className={styles.requestButton}>
                        Request a Demo
                    </button>
                    <button className={styles.contactButton}>Contact Us</button>
                </div>
            </div>
        </section>
    );
};

export default FeedbackSection;

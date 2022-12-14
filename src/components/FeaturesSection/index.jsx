import React from "react";
import FeaturesCards from "./FeaturesCards";

import * as styles from "./style.module.css";

const FeaturesSection = () => {
    return (
        <section className={styles.container}>
            <div className={styles.content} id="features">
                <div className={styles.featuresHeader}>
                    <h3 className={styles.featuresTitle}>
                        Features integrated
                    </h3>
                    <p className={styles.featuresParagraph}>
                        Know all our features that we have for accelerate your
                        business.
                    </p>
                </div>
                <FeaturesCards />
            </div>
        </section>
    );
};

export default FeaturesSection;

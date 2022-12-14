import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";

import * as styles from "./style.module.css";

import germanLogo from "../../../assets/images/germanLogo.svg";
import womanImage from "../../../assets/images/womanImage.svg";

const FeedbackList = () => {
    const feedbacks = [1, 2, 3, 4];
    return (
        <Swiper
            pagination={{
                clickable: true,
            }}
            modules={[Pagination]}
            className={styles.swiperContainer}
        >
            {feedbacks.map((item, index) => (
                <SwiperSlide key={index} className={styles.swiperSlide}>
                    <div>
                        <div className={styles.slide}>
                            <p className={styles.costumerFeedback}>
                                &quot;AcceleratorApp has helped us a lot to
                                accelerate and optimize our application and
                                selection process. We got very positive feedback
                                from our team and applicants. It&lsquo;s a great
                                tool for every company reviewing and processing
                                a large number of applications whilst minimizing
                                manual work. The tool is customizable,
                                user-friendly and the AcceleratorApp team is
                                very responsive and supportive!&quot;
                            </p>
                            <p className={styles.costumerFeedback}>
                                François Jolly, Director of Programs •{" "}
                                <b>Startup lab</b>
                            </p>
                            <div className={styles.slideImages}>
                                <img
                                    src={germanLogo}
                                    alt=""
                                    className={styles.logoImage}
                                />
                            </div>
                        </div>
                        <div className={styles.costumerContainer} id="contactUs">
                            <img
                                src={womanImage}
                                alt=""
                                className={styles.costumerImage}
                            />
                        </div>
                    </div>
                </SwiperSlide>
            ))}
        </Swiper>
    );
};

export default FeedbackList;

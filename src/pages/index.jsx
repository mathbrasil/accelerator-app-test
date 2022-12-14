import * as React from "react";

import Header from "../components/Header";
import InicialSection from "../components/InicialSection";
import CommunitySection from "../components/CommunitySection";
import FeaturesSection from "../components/FeaturesSection";
import FeedbackSection from "../components/FeedbackSection";
import Footer from "../components/Footer";


import "swiper/css/bundle";

export default function Home() {
    return (
        <>
            <Header />
            <main>
                <InicialSection />
                <CommunitySection />
                <FeaturesSection />
                <FeedbackSection />
            </main>
            <Footer />
        </>
    );
}

import * as React from "react";

import Header from "../components/Header";
import InicialSection from "../components/InicialSection";
import CommunitySection from "../components/CommunitySection";
import FeaturesSection from "../components/FeaturesSection";
import FeedbackSection from "../components/FeedbackSection";

import "swiper/css/bundle";
import Footer from "../components/Footer";

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

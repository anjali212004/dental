import React from "react";
import HeroSection from "../components/HeroSection";
import Counter from "../components/counter";
import WebsiteSlider from "../components/WebsiteSlider";
import Abouts from "../components/About";
import Services from "../components/Services";
import CustomCard from "../components/CustomCard";
import Blog from "../components/Blogs";
import ContactUs from "../components/ContactUs";
import Email from "../components/email";
import TeamCarousel from "../components/TeamSlider";

const Home = () => {
    return (
        <div>
            <HeroSection />
            <Counter />
            <WebsiteSlider />
            <Abouts />
            <Services />
            <CustomCard />
            <Blog />
            <ContactUs />
            <Email />
            <TeamCarousel />
        </div>
    );
};

export default Home;

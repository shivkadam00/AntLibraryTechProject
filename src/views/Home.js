import React from "react";
import AppAbout from "../Components/Homee/About";
import AppFaq from "../Components/Homee/Faq";
import AppFeature from "../Components/Homee/Feature";
import AppHero from "../Components/Homee/Hero";
import AppPricing from "../Components/Homee/Pricing";
import AppWorks from "../Components/Homee/Work";

function AppHome(){
    return(
        <div className="main">
    <AppHero/>
    <AppAbout/>
    <AppFeature/>
    <AppWorks/>
    <AppFaq/>
    <AppPricing/>
    </div>
    )
    
}
export default AppHome;
import React, { useRef } from 'react';
import TagLineBox from '../Components/TagLineBox';
import LogoTicker from '../Components/LogoTicker';
import Footer from '../Components/Footer';

function LandingPage() {
    const howItWorksRef = useRef(null);

    const executeScroll = () => howItWorksRef.current.scrollIntoView();

    return (
        <div>
            <TagLineBox onHowItWorksClick={executeScroll} />
            <LogoTicker />
            <Footer />
        </div>
    );
}

export default LandingPage;


import LandingLogin from './welcomeSection/LandingLogin';
import WebWelcome from './welcomeSection/WebWelcome';

const WelcomeSection = () => {
    const styleWelcomeSection = {
        gridColumn: "2",
        display: "flex",
        padding: "10px",
        gap: "100px"
    }

    return (
        <section style={styleWelcomeSection}> 
            <WebWelcome />
            <LandingLogin />
        </section>
    )
}

export default WelcomeSection
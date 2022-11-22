import LandingLogin from './welcomeSection/LandingLogin';
import WebWelcome from './welcomeSection/WebWelcome';

const WelcomeSection = () => {
    const styleWelcomeSection = {
        gridColumn: "2",
        display: "flex",
        justifyContent: "space-evenly",
        gap: "2vw",
        marginBottom: "20px"
    }

    return (
        <section style={styleWelcomeSection}> 
            <WebWelcome />
            <LandingLogin />
        </section>
    )
}

export default WelcomeSection
import LandingLogin from './welcomeSection/LandingLogin';
import WebWelcome from './welcomeSection/WebWelcome';
import { SectionWelcome } from '../style/landingStyle'
const WelcomeSection = () => {
    return (
        <SectionWelcome> 
            <WebWelcome />
            <LandingLogin />
        </SectionWelcome>
    )
}

export default WelcomeSection
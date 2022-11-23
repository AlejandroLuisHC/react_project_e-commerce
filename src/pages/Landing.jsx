import Banner from '../components/landing/Banner';
import WelcomeSection from '../components/landing/WelcomeSection';
import { MainLanding } from '../components/style/landingStyle';

const Landing = () => {
    return (
        <MainLanding>
            <WelcomeSection />
            <Banner />
        </MainLanding>
    )
}

export default Landing
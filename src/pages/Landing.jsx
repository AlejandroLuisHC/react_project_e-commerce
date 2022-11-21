import Banner from '../components/landing/Banner';
import WelcomeSection from '../components/landing/WelcomeSection';

const Landing = () => {
    const styleMain = {
        marginTop: "20px",
        gridColumn: "1 / span 3",
        display: "grid", 
        gridTemplate: "1fr 250px / 1fr 6fr 1fr",
        marginBottom: "-15px"
    }
    
    return (
        <main style={styleMain}>
            <WelcomeSection />
            <Banner />
        </main>
    )
}

export default Landing
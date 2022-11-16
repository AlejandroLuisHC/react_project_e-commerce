import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from "../components/header/Header";

function Layout() {

    const renderApp = () => {
        return(<>
            <Header />
            <Outlet />
            <Footer />
        </>)
    }

    return (
        renderApp()
    );
}

export default Layout;



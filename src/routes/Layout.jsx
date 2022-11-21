import { Toaster } from 'react-hot-toast';
import { Outlet } from 'react-router-dom';
import Footer from '../components/footer/Footer';
import Header from "../components/header/Header";

function Layout() {

    const renderApp = () => {
        return(<>
            <Header />
            <Outlet />
            <Footer />
            <Toaster 
                position="bottom-right"
                reverseOrder={false}
            />
        </>)
    }

    return (
        renderApp()
    );
}

export default Layout;



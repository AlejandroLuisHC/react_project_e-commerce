import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { lazy, Suspense } from 'react';
import Layout from './Layout';
import { Provider } from 'react-redux';
import { store } from '../redux/store';
import Spinner from '../components/spinner/Spinner';
import PrivateRoutes from './PrivateRoutes';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';

const Albums = lazy(() => import('../pages/Albums'));
const Bands = lazy(() => import('../pages/Bands'));
const Checkout = lazy(() => import('../pages/Checkout'));
const Profile = lazy(() => import('../pages/Profile'));
const Login = lazy(() => import('../pages/Login'));
const Register = lazy(() => import('../pages/Register'));
const Search = lazy(() => import('../pages/Search'));
const Landing = lazy(() => import('../pages/Landing'));
const queryClient = new QueryClient();

const router = () => {
    return (
        <QueryClientProvider client={queryClient}>
        <Provider store={store}>
            <BrowserRouter>
                <Suspense fallback={<Spinner />}>
                    <Routes>
                        <Route path="/" element={<Layout />}>
                            <Route index element={<Landing />} />
                            <Route path="/login" element={<Login />} />
                            <Route path="/register" element={<Register />} />
                            <Route path="/profile" element={<PrivateRoutes><Profile /></PrivateRoutes>} />
                            <Route path="/bands" element={<Bands />} />
                            <Route path="/:bandName" element={<Albums />} />
                            <Route path="/search" element={<Search />} />
                            <Route path="/checkout" element={<PrivateRoutes><Checkout /></PrivateRoutes>} />
                            <Route path="/*" element={<Navigate to="/" />} />
                        </Route>
                    </Routes>
                </Suspense> 
            </BrowserRouter>
        </Provider>
        </QueryClientProvider>
    )
}

export default router
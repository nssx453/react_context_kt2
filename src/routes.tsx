import { createBrowserRouter } from 'react-router';
import MainLayout from './pages/MainLayout';
import HomePage from './pages/HomePage';
import ProfilePage from './pages/ProfilePage';

export const router = createBrowserRouter([
    {
        path: '/',
        Component: MainLayout,
        children: [
            {
                index: true,
                Component: HomePage,
            },
            {
                path: 'profile',
                Component: ProfilePage,
            },
        ],
    },
]);
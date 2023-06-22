import { createBrowserRouter } from 'react-router-dom';
import HomePage from './pages/HomePage/HomePage';
import LoginPage from './pages/Auth/LoginPage';
import RegisterPage from './pages/Auth/RegisterPage';
import MainLayout from './pages/Layouts/MainLayout';
import DashboardLayout from './pages/Dashboard/Layouts/DashboardLayout';
import DashboardIndex from './pages/Dashboard/DashboardIndex';
export const router = createBrowserRouter([
    {
        path: '/', element: <MainLayout />, children: [
            { path: '/', element: <HomePage /> },
            { path: 'login', element: <LoginPage /> },
            { path: 'register', element: <RegisterPage /> }
        ]
    },
    {
        path: "/dashboard", element: <DashboardLayout />, children: [
            { path: '', element: <DashboardIndex /> }
        ]
    }
])


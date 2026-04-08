//routes.tsx

import { createBrowserRouter } from 'react-router-dom';
import App from '../App';
import DashboardPage from '../pages/DashboardPage';
import ProductPage from '../pages/ProductPage';
import ProductFormPage from '../pages/ProductFormPage';
import ErrorPage from '../pages/ErrorPage';

const router = createBrowserRouter([
    {
        path: '/',
        element: <App />,
        errorElement: <ErrorPage />,
        children: [
            { index: true,               element: <DashboardPage /> },
            { path: 'products',          element: <ProductPage /> },
            { path: 'products/new',      element: <ProductFormPage /> },
            { path: 'products/:id/edit', element: <ProductFormPage /> },
        ]
    },
]);

export default router;



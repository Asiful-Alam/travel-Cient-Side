import React from 'react';
import ReactDOM from 'react-dom';
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import ErrorPage from './Pages/ErrorPage.jsx';
import Root from './layout/Root.jsx';
import AddTouristsSpot from './Pages/AddTouristsSpot.jsx';
import Home from './Home.jsx'; 
import './index.css'
import BookingForm from './Pages/BookingForm.jsx';
import Login from './Pages/Login.jsx';
import Register from './Pages/Register.jsx';
import AuthProvider from './provider/AuthProvider.jsx';
import PrivateRoute from './Route/PrivateRoute.jsx';
const router = createBrowserRouter([
  {
    path: '/',
    element: <Root />,
    
    errorElement: <ErrorPage />,
    children: [
      {
        path: '/',
        element: <Home />,
        loader: () => fetch('http://localhost:5000/location').then(res => res.json()), 
        
      },
      {
        path: '/location',
        element: <PrivateRoute>
          <AddTouristsSpot />
        </PrivateRoute>,
      },
      {
      path:'/booking',
      element:<BookingForm></BookingForm>,
      },
      {
        path: '/login',
        element: <Login></Login>
      },
      {
        path: '/register',
        element: <Register></Register>,
      }
    ],
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
  <AuthProvider>
  <RouterProvider router={router} />
  </AuthProvider>
  </React.StrictMode>
);

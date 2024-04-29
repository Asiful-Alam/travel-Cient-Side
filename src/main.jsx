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
import TouristSpot from './Pages/TouristsSpot.jsx';
import MyList from './Pages/MyList.jsx';
import Details from './Pages/Details.jsx';
import BookingSystem from './Pages/BookingSystem.jsx';
import TouristsSpot from './Pages/TouristsSpot.jsx';
import Update from './Pages/Update.jsx';
import CountryDetails from './Pages/CountryDetails.jsx';

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
        element: <PrivateRoute><AddTouristsSpot /></PrivateRoute>,
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
      },
      {
        path: '/spot',
        element: <TouristsSpot></TouristsSpot>,
        loader: () => fetch('http://localhost:5000/location').then(res => res.json()),
      },
      {
        path: '/mylist',
        element:<MyList></MyList>,
      },
      {
        path: '/details/:_id',
        element: <Details />,
        
      },
      {
        path: '/countrydetails',
        element:<CountryDetails></CountryDetails>,
        
      },
      {
        path: '/bookingsystem',
        element: <PrivateRoute>
          <BookingSystem></BookingSystem>
        </PrivateRoute>,
      },
      {
        path: '/update/:id',
        element: <PrivateRoute>
          <Update></Update>
        </PrivateRoute>,
        loader: (params) => fetch(`http://localhost:5000/location/${params.id}`)
      },
    ],
  },
]);

const App = () => (
  <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={router} />
    </AuthProvider>
  </React.StrictMode>
);

ReactDOM.createRoot(document.getElementById('root')).render(<App />);

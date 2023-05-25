import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const data = localStorage.getItem('loggedIn');
    const user = { loggedIn: data };
    return user && user.loggedIn;
  };

const PrivateRoutes = () => {

    // const isAuth = useAuth()
    const isAuth = true
  return (
    isAuth ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoutes
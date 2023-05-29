import React from 'react'
import { Navigate, Outlet } from 'react-router-dom';

const useAuth = () => {
    const data = localStorage.getItem('loggedIn');
    const user = { loggedIn: data };
    return user && user.loggedIn;
  };

const PrivateRoutes = (props) => {

  return (
    props?.isAuth ? <Outlet /> : <Navigate to="/" />
  )
}

export default PrivateRoutes
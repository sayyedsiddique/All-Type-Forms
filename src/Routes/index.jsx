import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import SignUp from '../Pages/SignUp/SignUp'
import ForgetPassword from "../Pages/ForgotPasssword/ForgetPassword";

const Routing = () => {

  let isAuth = true
  return (
    <BrowserRouter>
      <Routes>
        {isAuth ? <Route element={<PublicRoutes />}>
          <Route path="/signup" element={<SignUp />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
        </Route> 
        : 
        <Route element={<PrivateRoutes />}>
        </Route>}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

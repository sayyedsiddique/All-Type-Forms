import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import SignUp from '../Pages/SignUp/SignUp'
import ForgetPassword from "../Pages/ForgotPasssword/ForgetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import ForgetPasswordVerification from "../Pages/ForgotPassVerification/ForgetPasswordVerification";
import OtpPage from "../Pages/Otp/OtpPage";

const Routing = () => {

  let isAuth = true

  return (
    <BrowserRouter>
      <Routes>
        {!isAuth ? <Route element={<PublicRoutes />}>
          
        </Route> 
        : 
        <Route element={<PrivateRoutes />}>
          <Route path="/" element={<SignUp />} />
          <Route path="/sign-in" element={<SignIn />} />
          <Route path="/forgot-password" element={<ForgetPassword />} />
          <Route path="/forgot-password-verification" element={<ForgetPasswordVerification />} />
          <Route path="/otp-verification" element={<OtpPage />} />
        </Route>}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

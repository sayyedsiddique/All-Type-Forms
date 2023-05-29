import React, { useState } from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import PrivateRoutes from "./PrivateRoutes";
import PublicRoutes from "./PublicRoutes";
import SignUp from "../Pages/SignUp/SignUp";
import ForgetPassword from "../Pages/ForgotPasssword/ForgetPassword";
import SignIn from "../Pages/SignIn/SignIn";
import ForgetPasswordVerification from "../Pages/ForgotPassVerification/ForgetPasswordVerification";
import OtpPage from "../Pages/Otp/OtpPage";
import HomePage from "../Pages/HomePage/HomePage";

const Routing = () => {
  const [isAuth, setIsAuth] = useState(false)
  console.log("isAuth ", isAuth)

  return (  
    <BrowserRouter>
      <Routes>
        {!isAuth ? (
          <Route element={<PublicRoutes />}>
            <Route path="/" element={<SignUp />} />
            <Route path="/sign-in" element={<SignIn />} />
            <Route path="/forgot-password" element={<ForgetPassword />} />
            <Route
              path="/forgot-password-verification"
              element={<ForgetPasswordVerification />}
            />
            <Route path="/otp-verification" element={<OtpPage  setIsAuth={setIsAuth}/>} />
          </Route>
        ) : (
          <Route element={<PrivateRoutes isAuth={isAuth}/>}>
             <Route path="/" element={<HomePage />} />
          </Route>
        )}
      </Routes>
    </BrowserRouter>
  );
};

export default Routing;

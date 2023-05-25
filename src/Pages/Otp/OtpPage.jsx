import { AccountCircle } from "@material-ui/icons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  TextField,
} from "@mui/material";
import React, { useState } from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";
import OtpInput from "react-otp-input";

const OtpPage = () => {
  const navigate = useNavigate();
  const [showPassword, seShowPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(true);

  const [fields, setFields] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  //   Register with Email or Mobile handle
  const registerWithHandler = () => {
    setIsEmail(!isEmail);
  };

  //   Sign up handler navigate to registration page
  const signUpHandler = () => {
    navigate("/registration");
  };

  // Forgot user password handler to navigate user on forgot password page
  const forgotUserPassHandler = () => {
    console.log("chala");
    navigate("/forgotpassword");
  };

  const showPasswordHandler = () => {
    seShowPassword(!showPassword);
  };

  return (
    <CardWithTwoSection>
      <div className="registration_leftside">
        <img
          src={"https://i.postimg.cc/DfbqKvdv/OTPImg.jpg"}
          alt="signin leftside image"
        />
      </div>
      <div className="registration_right">
        <h1 className="heading_h1">Verification</h1>
        <h5 className="heading_h5">
          Please enter the OTP received on your email/phone.
        </h5>

        <div className="input_container mb-3">
          <OtpInput
            numInputs={6}
            containerStyle={{ width: "auto" }}
            inputStyle={{
              width: "70%",
              border: "1px solid gray",
              borderRadius: "5px",
              height: "60px",
              fontSize: "x-large",
            }}
            // value={Otp}
            // onChange={(otp)=>handleOtp(otp)}
            separator={<span style={{ width: 8 }}></span>}
          />
        </div>

        <div className="mt-2" style={{ textAlign: "right" }}>
          <Button
            variant="contained"
            style={{
              backgroundColor: "var(--button-bg-color)",
              color: "var(--button-color)",
              width: "100%",
              fontSize: "1.1rem",
              letterSpacing: "1px",
            }}
            // onClick={submitHandler}
          >
            Submit OTP
          </Button>
        </div>
      </div>
    </CardWithTwoSection>
  );
};

export default OtpPage;

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


const ForgetPasswordVerification = () => {
  const navigate = useNavigate();
  const [showPassword, seShowPassword] = useState(false);
  const [showConfirmPassword, seShowConfirmPassword] = useState(false);
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

  const showPasswordHandler = () => {
    seShowPassword(!showPassword);
  };

  const confirmPasswordHandler = () => {
    seShowConfirmPassword(!showConfirmPassword)
  }

  // Forgot user password handler to navigate user on forgot password page
  const forgotUserPassHandler = () => {
    console.log("chala");
    navigate("/forgotpassword");
  };

  return (
    <CardWithTwoSection>
      <div className="registration_leftside">
        {/* <h1>LEFT SIDE</h1> */}
        <img
          src={"https://i.postimg.cc/903qHsv1/forgetpass2.jpg"}
          alt="forgot pass verification image"
        />
      </div>
      <div className="registration_right">
        <h1 className="heading_h1">Set new password</h1>
        {/* <h5 className="heading_h5">Sign in to your account</h5> */}
        <p className="heading_para">
          Please enter the verification code sent to your email address below,
          your email address and a new password.
        </p>

        <div className="input_container mb-3">
          <InputLabel style={{ color: "var(--product-text-color)" }}>
            Verification code
            <span className="text-danger">*</span>
          </InputLabel>
          <TextField
            style={{ backgroundColor: "var( --light-gray-color)" }}
            placeholder={"Enter your verification code"}
            id="outlined-size-small"
            size="small"
            name="verification"
            // inputRef={prodNameInputRef}
            // onChange={productInputHanlder}
          />
          {/* {error && error?.productName && (
              <span className="text-danger">{error?.productName}</span>
            )} */}
        </div>

        <div className="input_container mb-3">
            <InputLabel style={{ color: "var(--product-text-color)" }}>
              New password
              <span className="text-danger">*</span>
            </InputLabel>
            <TextField
              style={{ backgroundColor: "var( --light-gray-color)" }}
              placeholder={"Enter your password"}
              id="outlined-size-small"
              size="small"
              name="newPassword"
              type={ showPassword ? "text" : "password"}
              InputProps={{
                endAdornment: showPassword ? (
                  <VisibilityOff
                    style={{ cursor: "pointer", color: "var(--gray-color)" }}
                    position="end"
                    onClick={showPasswordHandler}
                  />
                ) : (
                  <Visibility
                    style={{ cursor: "pointer", color: "var(--gray-color)" }}
                    position="end"
                    onClick={showPasswordHandler}
                  />
                ),
              }}
              // inputRef={prodNameInputRef}
              // onChange={productInputHanlder}
            />
            {/* {error && error?.productName && (
                <span className="text-danger">{error?.productName}</span>
              )} */}
          </div>

          <div className="input_container mb-3">
            <InputLabel style={{ color: "var(--product-text-color)" }}>
              Confirm password
              <span className="text-danger">*</span>
            </InputLabel>
            <TextField
              style={{ backgroundColor: "var( --light-gray-color)" }}
              placeholder={"Enter your password"}
              id="outlined-size-small"
              size="small"
              name="confirmPassword"
              type={ showConfirmPassword ? "text" : "password"}
              InputProps={{
                endAdornment: showConfirmPassword ? (
                  <VisibilityOff
                    style={{ cursor: "pointer" }}
                    position="end"
                    onClick={confirmPasswordHandler}
                  />
                ) : (
                  <Visibility
                    style={{ cursor: "pointer" }}
                    position="end"
                    onClick={confirmPasswordHandler}
                  />
                ),
              }}
              // inputRef={prodNameInputRef}
              // onChange={productInputHanlder}
            />
            {/* {error && error?.productName && (
                <span className="text-danger">{error?.productName}</span>
              )} */}
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
            Submit
          </Button>
        </div>
      </div>
    </CardWithTwoSection>
  );
};

export default ForgetPasswordVerification;

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
import "./SignIn.css";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";
// import UserUsingLaptopImg from '../../assets/images/person-using-laptop.png'

const SignIn = () => {
const navigate = useNavigate()
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
    navigate("/registration")
  }

  // Forgot user password handler to navigate user on forgot password page
  const forgotUserPassHandler = () => {
    console.log("chala")
    navigate("/forgotpassword")
  }

  const showPasswordHandler = () => {
    seShowPassword(!showPassword);
  };

  return (
    <CardWithTwoSection>
      <div className="registration_leftside">
          {/* <h1>LEFT SIDE</h1> */}
          <img src={"https://i.postimg.cc/Nj3LHpzd/person-using-laptop.png"} alt="signin leftside image" />
        </div>
        <div className="registration_right">
        <h1 className="heading_h1">Welcome back</h1>
          <h5 className="heading_h5">Sign in to your account</h5>

          <div className="login_with_container" onClick={registerWithHandler}>
            <p className="pe-2">Register with</p>
            {isEmail ? (
              <HiOutlineMail size={25} />
            ) : (
              <HiOutlineDevicePhoneMobile size={25} />
            )}
          </div>
          {isEmail ? (
            <div className="input_container mb-3">
              <InputLabel style={{ color: "var(--product-text-color)" }}>
                Email
                <span className="text-danger">*</span>
              </InputLabel>
              <TextField
                style={{ backgroundColor: "var( --light-gray-color)" }}
                placeholder={"Enter your email"}
                id="outlined-size-small"
                size="small"
                name="productName"
                // inputRef={prodNameInputRef}
                // onChange={productInputHanlder}
              />
              {/* {error && error?.productName && (
                <span className="text-danger">{error?.productName}</span>
              )} */}
            </div>
          ) : (
            <div className="input_container mb-3">
            <InputLabel style={{ color: "var(--product-text-color)" }}>
              Mobile no
              <span className="text-danger">*</span>
            </InputLabel>
            <TextField
              style={{ backgroundColor: "var( --light-gray-color)" }}
              placeholder={"Enter your mobile no"}
              id="outlined-size-small"
              size="small"
              name="mobile"
              // inputRef={prodNameInputRef}
              // onChange={productInputHanlder}
            />
            {/* {error && error?.productName && (
              <span className="text-danger">{error?.productName}</span>
            )} */}
          </div>
          )}
          <div className="input_container mb-3">
            <InputLabel style={{ color: "var(--product-text-color)" }}>
              Password
              <span className="text-danger">*</span>
            </InputLabel>
            <TextField
              style={{ backgroundColor: "var( --light-gray-color)" }}
              placeholder={"Enter your password"}
              id="outlined-size-small"
              size="small"
              name="password"
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
          
          <div className="forget_password text-right" onClick={() => navigate("/forgot-password")}>
            <p className="heading_para">Forget password?</p>
          </div>
          
          <div className="mt-2" style={{ textAlign: "right" }}>
            <Button
              variant="contained"
              style={{
                backgroundColor: "var(--button-bg-color)",
                color: "var(--button-color)",
                width: "100%",
                fontSize: "1.1rem",
                letterSpacing:"1px"
              }}
              // onClick={submitHandler}
            >
              Sign in
            </Button>
            <div className="orDIvider">
              <hr />
              <p>OR</p>
              <hr />
            </div>
            <div className="login_container">
              <p className="heading_para">
                You don't have an account? <span onClick={signUpHandler}>Sign up</span>
              </p>
            </div>
          </div>
        </div>
    </CardWithTwoSection>
  );
};

export default SignIn;

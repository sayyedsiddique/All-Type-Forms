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
import { BiArrowBack } from "react-icons/bi";
// import ForgetPass1 from '../../assets/images/forgetpass1.jpg'

const ForgetPassword = () => {
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

  return (
    <CardWithTwoSection>
      <div className="registration_leftside">
        {/* <h1>LEFT SIDE</h1> */}
        <img
          src={"https://i.postimg.cc/CMkVh93D/forgetpass1.jpg"}
          alt="forgot password image"
        />
      </div>
      <div className="registration_right">
        <h1 className="heading_h1">Forgot your password</h1>
        {/* <h5 className="heading_h5">Sign in to your account</h5> */}

        <div className="login_with_container" onClick={registerWithHandler}>
          <p className="pe-2">Set password with</p>
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
        {/* <div className="input_container mb-3">
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
              inputRef={prodNameInputRef}
              onChange={productInputHanlder}
            />
          </div> */}

        {/* <div className="forget_password text-right">
            <p className="heading_para">Forget password?</p>
          </div> */}
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
          {/* <div className="orDIvider">
              <hr />
              <p>OR</p>
              <hr />
            </div> */}
          <div className="login_container" style={{ marginTop: "2rem" }}>
            <p
              className="heading_para"
              style={{ cursor: "pointer" }}
              onClick={() => navigate(-1)}
            >
              <BiArrowBack /> Go back to sign in page
            </p>
          </div>
        </div>
      </div>
    </CardWithTwoSection>
  );
};

export default ForgetPassword;

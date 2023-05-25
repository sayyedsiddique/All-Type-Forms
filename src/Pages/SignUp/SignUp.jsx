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
import "./SignUp.css";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";

const Registration = () => {
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

  //   Sign in handler navigate to login page
  const signInHandler = () => {
    navigate("/signin");
  };

  const showPasswordHandler = () => {
    seShowPassword(!showPassword);
  };

  const confirmPasswordHandler = () => {
    seShowConfirmPassword(!showConfirmPassword)
  }

  return (
    <CardWithTwoSection>
      <>
        <div className="card_leftside">
          <img src={"https://i.postimg.cc/Nj3LHpzd/person-using-laptop.png"} alt="" />
        </div>
        <div className="card_rightside">
          <h1 className="heading_h1">Create Account</h1>

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
            <div className="input_container phone_container mb-3">
              <InputLabel style={{ color: "var(--product-text-color)" }}>
                Mobile no
                <span className="text-danger">*</span>
              </InputLabel>
              <PhoneInput
                country="in"
                containerStyle={{ height: 45, width: "100%" }}
                inputStyle={{ height: 45, width: "100%" }}
                searchClass="search-class"
                enableSearch
                disableSearchIcon
                countryCodeEditable={false}
                value={fields.phone}
                //   onChange={(phone) => validate(phone, "phone")}
              />
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
                    style={{ cursor: "pointer", color: "var(--gray-color)"  }}
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
                    style={{ cursor: "pointer", color: "var(--gray-color)" }}
                    position="end"
                    onClick={confirmPasswordHandler}
                  />
                ) : (
                  <Visibility
                    style={{ cursor: "pointer", color: "var(--gray-color)" }}
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
          {/* <div
            className="forget_password text-right"
          >
            <p className="heading_para" style={{ display: "inline", float: "right" }} onClick={() => navigate("/forgot-password")}>Forget password?</p>
          </div> */}
          <div className="mt-4" style={{ textAlign: "right" }}>
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
              Register
            </Button>
            <div className="orDIvider">
              <hr />
              <p>OR</p>
              <hr />
            </div>
            <div className="login_container">
              <p className="heading_para">
                Already a user? <span onClick={signInHandler}>Login</span>
              </p>
            </div>
          </div>
        </div>
      </>
    </CardWithTwoSection>
  );
};

export default Registration;

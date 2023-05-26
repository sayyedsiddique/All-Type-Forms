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
import { AiOutlineCheckCircle } from "react-icons/ai";

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

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  // console.log("fields ", fields);
  console.log("errors ", errors);

  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    if (name === "email") {
      setErrors({ ...errors, email: "" });
      setFields({ ...fields, email: value });
    } else if (name === "phone") {
      setErrors({ ...errors, phone: "" });
      setFields({ ...fields, phone: value });
    } else if (name === "password") {
      setErrors({ ...errors, password: "" });
      setFields({ ...fields, password: value });
    } else if (name === "confirmPassword") {
      setErrors({ ...errors, confirmPassword: "" });
      setFields({ ...fields, confirmPassword: value });
    }
  };

  const validation = () => {
    // Perform email validation
    const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;  

    if (fields.email === "") {
      setErrors({ ...errors, email: "Please enter your email" });
      return false;
    }
    else if (isEmail === false && fields.phone === "") {
      setErrors({ ...errors, phone: "Please enter your phone" });
      return false;
    } else if (fields.password === "") {
      setErrors({ ...errors, password: "Please enter your password" });
      return false;
    } else if (!isValidPass) {
      setErrors({ ...errors, password: "Please enter a valid password" });
      return false;
    } else if (fields.confirmPassword === "") {
      setErrors({
        ...errors,
        confirmPassword: "Please enter your confirmPassword",
      });
      return false;
    }

    return true;
  };

  //   Register with Email or Mobile handle
  const registerWithHandler = () => {
    setFields({ ...fields, email: "", phone: "" });
    setIsEmail(!isEmail);
  };

  //   Sign in handler navigate to login page
  const signInHandler = () => {
    navigate("/sign-in");
  };

  const showPasswordHandler = () => {
    seShowPassword(!showPassword);
  };

  const confirmPasswordHandler = () => {
    seShowConfirmPassword(!showConfirmPassword);
  };

  const submitHandler = () => {
    const val = validation();

    if (val) {
      navigate("/sign-up");
    }
  };

  return (
    <CardWithTwoSection>
      <>
        <div className="card_leftside">
          <img
            src={"https://i.postimg.cc/Nj3LHpzd/person-using-laptop.png"}
            alt=""
          />
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
                name="email"
                // inputRef={prodNameInputRef}
                onChange={inputHandler}
                value={fields.email}
              />
              {errors && errors?.email && (
                <span className="text-danger">{errors?.email}</span>
              )}
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
                name="phone"
                // inputRef={prodNameInputRef}
                onChange={inputHandler}
                value={fields.phone}
              />
              {errors && errors?.phone && (
                <span className="text-danger">{errors?.phone}</span>
              )}
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
              type={showPassword ? "text" : "password"}
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
              onChange={inputHandler}
            />
            {errors && errors?.password && (
              <span className="text-danger">{errors?.password}</span>
            )}
          </div>
          <div className="pass_must_have_container">
            <p className="heading_para font-weight-bold mb-0">
              Your password must have
            </p>
            <ul>
              <li>
                <AiOutlineCheckCircle />
                <span>At least 1 lowercase letter</span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>At least 1 uppercase letter</span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>
                  At least 1 number or special characters(! @ # $) letter
                </span>
              </li>
              <li>
                <AiOutlineCheckCircle />
                <span>At least 1 lowercase letter</span>
              </li>
            </ul>
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
              type={showConfirmPassword ? "text" : "password"}
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
              onChange={inputHandler}
            />
            {errors && errors?.confirmPassword && (
              <span className="text-danger">{errors?.confirmPassword}</span>
            )}
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
              onClick={submitHandler}
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

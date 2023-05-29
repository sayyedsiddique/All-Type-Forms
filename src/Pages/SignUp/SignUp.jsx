import { AccountCircle } from "@material-ui/icons";
import Visibility from "@mui/icons-material/Visibility";
import VisibilityOff from "@mui/icons-material/VisibilityOff";
import {
  Alert,
  Box,
  Button,
  FormControl,
  IconButton,
  Input,
  InputAdornment,
  InputLabel,
  Snackbar,
  TextField,
} from "@mui/material";
import React, { useRef, useState } from "react";
import "./SignUp.css";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";
import { AiOutlineCheckCircle } from "react-icons/ai";
import LoadingSpinner from "../../Components/LoadingSpinner/LoadingSpinner";
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';      

const Registration = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef(null)
  const mobilenputRef = useRef(null)
  const passInputRef = useRef(null)
  const confirmPassInputRef = useRef(null)
  const [showPassword, seShowPassword] = useState(false);
  const [showConfirmPassword, seShowConfirmPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);
  console.log("isEmail ",  isEmail)

  const [fields, setFields] = useState({
    email: "",
    phone: null,
    password: "",
    confirmPassword: "",
  });
  console.log("fields ", fields)

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
    console.log("value ", value)

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
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;

    const isEmailValid = regexEmail.test(fields.email);
    const isPassValid = regexPass.test(fields.password);

    if (isEmail === true && fields.email === "") {
      setErrors({ ...errors, email: "Please enter your email" });
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
      return false;
    } else if (isEmail === true && isEmailValid === false) {
      setErrors({ ...errors, email: "Please enter valid email" });
      if (emailInputRef.current) {
        emailInputRef.current.focus();
      }
      return false;
    } else if (isEmail === false && fields.phone === "") {
      setErrors({ ...errors, phone: "Please enter your phone" });
      if(mobilenputRef.current){
        mobilenputRef.current.focus()
      }
      return false;
    } else if (fields.password === "") {
      setErrors({ ...errors, password: "Please enter your password" });
      if(passInputRef.current){
        passInputRef.current.focus()
      }
      return false;
    } else if (isPassValid === false) {
      setErrors({
        ...errors,
        password:
          "At least one uppercase, one lowercase, one number, one symbol and it should be 8 characters",
      });
      if(passInputRef.current){
        passInputRef.current.focus()
      }
      return false;
    } else if (fields.confirmPassword === "") {
      setErrors({
        ...errors,
        confirmPassword: "Please enter your confirmPassword",
      });
      if(confirmPassInputRef.current){
        confirmPassInputRef.current.focus()
      }
      return false;
    } else if (fields.password !== fields.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "it's not match with password",
      });
      if(confirmPassInputRef.current){
        confirmPassInputRef.current.focus()
      }
      return false;
    }

    return true;
  };

  //   Register with Email or Mobile handle
  const registerWithHandler = () => {
    setErrors({ ...errors, email:  "", phone:  "" })
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

  // Popup alert close handler
  const popUpCloseHandler = () => {
    setOpenPopUp(false);
  };

  const submitHandler = () => {
    const val = validation();

    if (val) {
      setOpenPopUp(true);
      setBtnLoading(true);

      setTimeout(() => {
        // setOpenPopUp(true);
        setBtnLoading(false);
        navigate("/sign-in");
      }, 3000);
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
                inputRef={emailInputRef}
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
                inputRef={mobilenputRef}
                type={"number"}
                inputProps={{ maxLength: 7 }}
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
              inputRef={passInputRef}
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
              onChange={inputHandler}
            />
            {errors && errors?.password && (
              <span className="text-danger">{errors?.password}</span>
            )}
          </div>
          {/* <div className="pass_must_have_container">
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
          </div> */}
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
              inputRef={confirmPassInputRef}
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
            {/* <Button
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
              {loading ? <div className="button_inner"><LoadingSpinner /> Register  </div> : "Register"}
            </Button>  */}
            <LoadingButton
              loading={btnLoading}
              loadingPosition="start"
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
            </LoadingButton>
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
          <Snackbar
            open={openPopUp}
            autoHideDuration={3000}
            onClose={popUpCloseHandler}
            anchorOrigin={{ vertical: "top", horizontal: "right" }}
          >
            <Alert
              onClose={popUpCloseHandler}
              severity="success"
              sx={{ width: "100%" }}
            >
              This is a success message!
            </Alert>
          </Snackbar>
        </div>
      </>
    </CardWithTwoSection>
  );
};

export default Registration;

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
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";
import { LoadingButton } from "@mui/lab";


const ForgetPasswordVerification = () => {
  const navigate = useNavigate();
  const verificatioinInputRef = useRef(null);
  const newPassInputRef = useRef(null);
  const confirmPassInpuRef = useRef(null);
  const [showPassword, seShowPassword] = useState(false);
  const [showConfirmPassword, seShowConfirmPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [fields, setFields] = useState({
    verificationCode: "",
    newPassword: "",
    confirmPassword: "",
  });

  const [errors, setErrors] = useState({
    verificationCode: "",
    newPassword: "",
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

    // Popup alert close handler
    const popUpCloseHandler = () => {
      setOpenPopUp(false);
    };

    // set new password  form input fields handle
    const inputHandler = (e) => {
      const name = e.target.name;
      const value = e.target.value;
      console.log("value ", value);
  
      if (name === "vefiCode") {
        setErrors({ ...errors, verificationCode: "" });
        setFields({ ...fields, verificationCode: value });
      } else if (name === "newPassword") {
        setErrors({ ...errors, newPassword: "" });
        setFields({ ...fields, newPassword: value });
      } else if (name === "confirmPassword") {
        setErrors({ ...errors, confirmPassword: "" });
        setFields({ ...fields, confirmPassword: value });
      }
    };

    // set new password form validation check handle
  const validation = () => {
    const regexPass = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*()]).{8,}$/;
    const isPassValid = regexPass.test(fields.newPassword);

    if (fields.verificationCode === "") {
      setErrors({ ...errors, verificationCode: "Please enter verification code" });
      if (verificatioinInputRef.current) {
        verificatioinInputRef.current.focus();
      }
      return false;
    } else if (fields.newPassword === "") {
      setErrors({ ...errors, newPassword: "Please enter new password" });
      if (newPassInputRef.current) {
        newPassInputRef.current.focus();
      }
      return false;
    } else if (isPassValid === false) {
      setErrors({
        ...errors,
        newPassword:
          "At least one uppercase, one lowercase, one number, one symbol and it should be 8 characters",
      });
      if (newPassInputRef.current) {
        newPassInputRef.current.focus();
      }
      return false;
    } else if (fields.confirmPassword === "") {
      setErrors({
        ...errors,
        confirmPassword: "Please enter your confirmPassword",
      });
      if (confirmPassInputRef.current) {
        confirmPassInputRef.current.focus();
      }
      return false;
    } else if (fields.newPassword !== fields.confirmPassword) {
      setErrors({
        ...errors,
        confirmPassword: "it's not match with new password",
      });
      if (confirmPassInpuRef.current) {
        confirmPassInpuRef.current.focus();
      }
      return false;
    }

    return true;
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
            name="vefiCode"
            inputRef={verificatioinInputRef}
            onChange={inputHandler}
          />
            {errors && errors?.verificationCode && (
              <span className="text-danger">{errors?.verificationCode}</span>
            )}
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
              inputRef={newPassInputRef}
              onChange={inputHandler}
            />
            {errors && errors?.newPassword && (
              <span className="text-danger">{errors?.newPassword}</span>
            )}
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
              inputRef={confirmPassInpuRef}
              onChange={inputHandler}
            />
             {errors && errors?.confirmPassword && (
              <span className="text-danger">{errors?.confirmPassword}</span>
            )}
          </div>
        <div className="mt-2" style={{ textAlign: "right" }}>
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
            Submit
          </Button> */}
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
              Submit
            </LoadingButton>
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
              Your new password set successfully.
            </Alert>
          </Snackbar>
      </div>
    </CardWithTwoSection>
  );
};

export default ForgetPasswordVerification;

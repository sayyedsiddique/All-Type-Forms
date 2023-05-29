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
import { BiArrowBack } from "react-icons/bi";
import { LoadingButton } from "@mui/lab";
// import ForgetPass1 from '../../assets/images/forgetpass1.jpg'

const ForgetPassword = () => {
  const navigate = useNavigate();
  const emailInputRef = useRef(null);
  const mobilenputRef = useRef(null);
  const [isEmail, setIsEmail] = useState(true);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [fields, setFields] = useState({
    email: "",
    phone: "",
  });

  const [errors, setErrors] = useState({
    email: "",
    phone: "",
  });

  //   Register with Email or Mobile handle
  const registerWithHandler = () => {
    setErrors({ ...errors, email: "", phone: "" });
    setFields({ ...fields, email: "", phone: "" });
    setIsEmail(!isEmail);
  };

    // Popup alert close handler
    const popUpCloseHandler = () => {
      setOpenPopUp(false);
    };
  

  //   Sign up handler navigate to registration page
  const signUpHandler = () => {
    navigate("/registration");
  };

  // forgot password form input fields handle
  const inputHandler = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    console.log("value ", value);

    if (name === "email") {
      setErrors({ ...errors, email: "" });
      setFields({ ...fields, email: value });
    } else if (name === "phone") {
      setErrors({ ...errors, phone: "" });
      setFields({ ...fields, phone: value });
    }
  };

    // forgot password form validation check handle
    const validation = () => {
      // Perform email validation
      const regexEmail = /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/;
      const isEmailValid = regexEmail.test(fields.email);
  
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
        if (mobilenputRef.current) {
          mobilenputRef.current.focus();
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
          navigate("/forgot-password-verification");
        }, 3000);
      }
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
            // onClick={submitHandler}
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
              Sign in
            </LoadingButton>
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
              Verification code sent to your email.
            </Alert>
          </Snackbar>
      </div>
    </CardWithTwoSection>
  );
};

export default ForgetPassword;

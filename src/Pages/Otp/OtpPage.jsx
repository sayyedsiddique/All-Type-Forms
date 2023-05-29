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
import React, { useState } from "react";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { HiOutlineMail } from "react-icons/hi";
import PhoneInput from "react-phone-input-2";
import { useNavigate } from "react-router-dom";
import CardWithTwoSection from "../../Components/CardBox/CardWithTwoSection";
import OtpInput from "react-otp-input";
import { LoadingButton } from "@mui/lab";

const OtpPage = (props) => {
  const navigate = useNavigate();
  const [showPassword, seShowPassword] = useState(false);
  const [isEmail, setIsEmail] = useState(true);
  const [openPopUp, setOpenPopUp] = useState(false);
  const [btnLoading, setBtnLoading] = useState(false);

  const [fields, setFields] = useState({
    otp: "",
  });

  const [errors, setErrors] = useState({
    otp: "",
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

  // Popup alert close handler
  const popUpCloseHandler = () => {
    setOpenPopUp(false);
  };

  // OTP input fields handle
  const OTPHandler = (otp) => {
    setErrors({ ...errors, otp: "" });
    setFields({ ...fields, otp: otp });
  };

  const validation = () => {
    if (fields?.otp === "") {
      setErrors({ ...errors, otp: "Please enter OTP" });
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
        props.setIsAuth(true)
        navigate("/");
      }, 3000);
    }
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
            value={fields?.otp}
            onChange={(otp) => OTPHandler(otp)}
            separator={<span style={{ width: 8 }}></span>}
          />
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
            // onClick={submitHandler}
          >
            Submit OTP
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
            Submit OTP
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

export default OtpPage;

import React from "react";
import { makeStyles } from "@mui/styles";
import PropTypes from "prop-types";
import { styled } from "@mui/material/styles";
import Dialog from "@mui/material/Dialog";
import DialogTitle from "@mui/material/DialogTitle";
import DialogContent from "@mui/material/DialogContent";
import DialogActions from "@mui/material/DialogActions";
import IconButton from "@mui/material/IconButton";
import CloseIcon from "@mui/icons-material/Close";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControlLabel from "@mui/material/FormControlLabel";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";

// import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

import DatePicker from ".././components/DatePicker";
import { useDispatch } from "react-redux";

const BootstrapDialog = styled(Dialog)(({ theme }) => ({
  "& .MuiDialogContent-root": {
    padding: theme.spacing(2),
  },
  "& .MuiDialogActions-root": {
    padding: theme.spacing(1),
  },
}));



const BootstrapDialogTitle = (props) => {
  
  const { children, onClose, ...other } = props;

  return (
    <DialogTitle sx={{ m: 0, p: 2 }} {...other}>
      {children}
      {onClose ? (
        <IconButton
          aria-label="close"
          onClick={onClose}
          sx={{
            position: "absolute",
            right: 8,
            top: 8,
            color: (theme) => theme.palette.grey[500],
          }}
        >
          <CloseIcon />
        </IconButton>
      ) : null}
    </DialogTitle>
  );
};

BootstrapDialogTitle.propTypes = {
  children: PropTypes.node,
  onClose: PropTypes.func.isRequired,
};

// import { firebase } from "../Firebase/firebase";

const useStyle = makeStyles({
  loginWrapper: {
    backgroundColor: "#f0f2f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    margin: "-7px",
  },

  loginBox: {
    marginTop: "72px",
    width: "980px",
    height: "536px",
    display: "flex",
    alignItems: "center",
    justifyContent: "space-between",
    // marginTop: "176px",
  },

  motto: {
    fontFamily: "Helvetica",
    fontWeight: "400",
    fontSize: "26px",
    marginLeft: "10px",
    marginTop: "-10px",
  },

  fbLogo: {
    marginLeft: "-20px",
    marginTop: "-100px",
    objectFit: "contain",
    height: "106px",
    width: "301px",
  },

  rightSide: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    width: "396px",
    height: "350px",
    backgroundColor: "white",
    borderRadius: "10px",
    padding: "10px",
  },

  commonRight: {
    borderRadius: "10px",
    width: "364px",
    height: "52px",
    border: "1px solid #dddfe2",
    margin: "6px",
  },

  userInput: {
    fontSize: "14px",
    paddingLeft: "10px",
  },

  userInputClicked: {
    border: "1px solid #1877f2",
  },

  passwordInput: {
    fontSize: "14px",
    paddingLeft: "10px",
  },

  loginBtn: {
    width: "364px",
    height: "52px",
    border: "none",
    backgroundColor: "#1877f2",
    color: "#fff",
    fontSize: "22px",
    fontWeight: "600",
    borderRadius: "10px",
    margin: "6px",
  },

  forgottenPass: {
    color: "#1877f2",
    textDecoration: "none",
    margin: "6px",
  },

  hr: {
    width: "360px",
    color: "#dddfe2",
    margin: "6px",
  },

  createRegisterBtn: {
    width: "257px",
    height: "48px",
    backgroundColor: "#42b72a",
    color: "#fff",
    fontSize: "16px",
    fontWeight: "600",
    borderRadius: "10px",
    margin: "16px",
    border: "none",
  },
  loginWithGoogle: {
    width: "157px",
    height: "48px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
  },

  registerWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  topText: {
    height:"100px",
    fontFamily: "Helvetica",
    marginLeft:"4%",
  },

  namesWrapper: {
    display: "flex",
    gap: "10px",
  },

  makeRegButtonWrapper: {
    display: "flex",
    justifyContent: "center",
  },
  genderWrapperBox: {
    width: "133px",
    height: "30px",
    border: "1px solid #c4c4c4",
    borderRadius: "5px",
    color: "black",
  },
  genderWrapper: {
    width: "96%",
    marginLeft: "4%",
    display: "flex",
    justifyContent: "space-around",
  },
  regBtnFormCreate: {
    backgroundColor: "#42b72a",
    color: "white",
    margin: "20px",
    width: "190px",
    height: "36px",
    border:"none",
    borderRadius: "5px",
    fontSize: "18px"
  },
});

export default function Login() {

  const dispatch = useDispatch();

  const handleLogin = () => {
    console.log("hi");
    dispatch({ type: "LOGIN" });
  };


  const [open, setOpen] = React.useState(false);
  const handleClickOpen = () => {
    setOpen(true);
  };
  const handleClose = () => {
    setOpen(false);
  };
  const style = useStyle();

  // const signInWithFirebase = () => {
  //     let google_provider = firebase.auth.GoogleAuthProvider();
  //     firebase.auth().signInWithPopup(google_provider)
  //         .then((res) => {

  //         })
  //         .catch((err) => {
  //         console.log(err);
  //     })

  // }

  return (
    <div className={style.loginWrapper}>
      <div className={style.loginBox}>
        <div className={style.leftSide}>
          <img
            className={style.fbLogo}
            src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
            alt="fb-logo"
          ></img>
          <p className={style.motto}>
            Fakebook Ви помага да се свързвате
            <br />и споделяте с хората в живота Ви.
          </p>
        </div>

        <div className={style.rightSide}>
          <input
            className={`${style.userInput} ${style.commonRight}`}
            placeholder="Имейл или телефонен номер"
          />
          <input
            type="password"
            className={`${style.passwordInput} ${style.commonRight}`}
            placeholder="Парола"
          />
          <button
            className={style.loginBtn}
            variant="contained"
            onClick={handleLogin}
          >
            Вход
          </button>
          <a
            className={style.forgottenPass}
            href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ0NTk1MjE2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login"
          >
            Забравена парола?
          </a>
          <hr className={style.hr} />
          <button className={style.createRegisterBtn} onClick={handleClickOpen}>
            Създаване на нов профил
          </button>

          <button className={style.loginWithGoogle}>Вход с Google</button>
        </div>
      </div>

      {/* Register form  */}
      <BootstrapDialog
        onClose={handleClose}
        aria-labelledby="customized-dialog-title"
        open={open}
      >
        <div
          className={style.topText}
          id="customized-dialog-title"
          onClose={handleClose}
        >
          <h1>Регистрация</h1>
          <p>Бързо и лесно е</p>
        </div>

        <DialogContent dividers className={style.registerWrapper}>
          <div className={style.namesWrapper}>
            <TextField
              required
              id="outlined-required"
              placeholder="Собствено име"
            />
            <TextField
              required
              id="outlined-required"
              placeholder="Фамилно име"
            />
            {/* <input
              type="text"
              className={style.nameReg}
              placeholder="Собствено име"
            />
            <input
              type="text"
              className={style.nameReg}
              placeholder="Фамилно име"
            /> */}
          </div>
          <TextField
            required
            id="outlined-required"
            placeholder="Имейл или телефон"
          />
          {/* <input
            type="text"
            className={style.mobileNumberOrMail}
            placeholder="Мобилен номер или емейл"
          /> */}
          <TextField
            id="outlined-password-input"
            type="password"
            autoComplete="current-password"
            placeholder="Парола"
          />
          {/* <input
            type="password"
            className={style.newPass}
            placeholder="Нова парола"
          /> */}

          <div className="datesWrapper">
            <DatePicker />
          </div>

          <FormControl>
            <FormLabel id="demo-row-radio-buttons-group-label">Пол</FormLabel>
            <RadioGroup
              row
              className={style.genderWrapper}
              aria-labelledby="demo-row-radio-buttons-group-label"
              defaultValue="female"
              name="row-radio-buttons-group"
            >
              <FormControlLabel
                className={style.genderWrapperBox}
                value="female"
                control={<Radio />}
                label="Жена"
              />

              <FormControlLabel
                className={style.genderWrapperBox}
                value="male"
                control={<Radio />}
                label="Мъж"
              />

              <FormControlLabel
                className={style.genderWrapperBox}
                value="other"
                control={<Radio />}
                label="Друг"
              />
            </RadioGroup>
          </FormControl>
        </DialogContent>
        <DialogActions class={style.makeRegButtonWrapper}>
          <button
            className={style.regBtnFormCreate}
            autoFocus
            onClick={handleClose}
          >
            Регистрация
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

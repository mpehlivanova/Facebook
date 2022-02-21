import React, { useState } from "react";
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
import TextField from "@mui/material/TextField";
import DatePicker from ".././components/DatePicker";
import { useDispatch, useSelector } from "react-redux";
import registeredUsers from "../server/registeredUsers";
import userReducer from "../redux/reducers/userReducer"


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
    cursor: "pointer",
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
    cursor: "pointer",
  },
  loginWithGoogle: {
    width: "157px",
    height: "48px",
    borderRadius: "10px",
    border: "none",
    fontSize: "16px",
    cursor: "pointer",
  },

  registerWrapper: {
    display: "flex",
    flexDirection: "column",
    gap: "10px",
  },
  topText: {
    height: "100px",
    fontFamily: "Helvetica",
    marginLeft: "4%",
  },

  namesWrapper: {
    display: "flex",
    gap: "10px",
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
  makeRegButtonWrapper: {
    display: "flex",
    justifyContent: "center",
    width: "96%",
  },
  regBtnFormCreate: {
    backgroundColor: "#42b72a",
    color: "white",
    margin: "20px",
    width: "190px",
    height: "36px",
    border: "none",
    borderRadius: "5px",
    fontSize: "18px",
    marginRight: "30%",
    cursor: "pointer",
  },
  error: {
    fontFamily: "Helvetica",
  },
});

export default function Login() {
  var validator = require("email-validator");

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  //login form functions
  const setHandlerInputEmail = (e) => {
    setEmail(e.target.value);
  };

  const setHandlerInputPassword = (e) => {
    setPassword(e.target.value);
  };

  const dispatch = useDispatch();
  const regUsers = useSelector(state => state.userData.registered);

  const handleLogin = () => {
    console.log(regUsers);
    const user = regUsers.filter((u) => u.email === email);
    if (validator.validate(email)) {
      if (user && password === user[0].password) {
        console.log("login");
        dispatch({ type: "LOGIN" });
        setError(false);
      } else {
        setError(true);
      }
    } else {
      setError(true);
    }
  };
  //register form functions
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [emailReg, setEmailReg] = useState("");
  const [passwordReg, setPasswordReg] = useState("");
  const [dayOfBirth, setDayOfBirth] = useState("");
  const [monthOfBirth, setMonthOfBirth] = useState("");
  const [yearOfBirth, setYearOfBirth] = useState("");
  const [gender, setGender] = useState("");

  const setHandlerInputFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const setHandlerInputLastName = (e) => {
    setLastName(e.target.value);
  };
  const setHandlerInputEmailReg = (e) => {
    setEmailReg(e.target.value);
  };
  const setHandlerInputPasswordReg = (e) => {
    setPasswordReg(e.target.value);
  };
  const setHandlerInputDayOfBirth = (e) => {
    setDayOfBirth(e.target.value);
  };
  const setHandlerInputMonthOfBirth = (e) => {
    setMonthOfBirth(e.target.value);
  };
  const setHandlerInputYearOfBirth = (e) => {
    setYearOfBirth(e.target.value);
  };
  const setHandlerInputGender = (e) => {
    setGender(e.target.value);
  };

  const handleRegister = () => {
    if (validator.validate(emailReg)) {
      console.log(regUsers);
      // console.log(regUsers.filter(u => u.email === emailReg));
      if ((regUsers.filter(u => u.email === emailReg))===null) {
      // console.log("reg");   
        dispatch({ type: "REGISTER", payload: regUsers.push({emailReg, passwordReg})})
       }
    } else {
      console.log("mail- ko");
    }
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
            id="email"
            value={email}
            required
            className={`${style.userInput} ${style.commonRight}`}
            placeholder="Имейл или телефонен номер"
            onChange={(e) => setHandlerInputEmail(e)}
          />
          <input
            id="password"
            value={password}
            required
            type="password"
            className={`${style.passwordInput} ${style.commonRight}`}
            placeholder="Парола"
            onChange={(e) => setHandlerInputPassword(e)}
          />
          {error ? (
            <span className={style.error}>
              Невалиден имейл адрес или парола
            </span>
          ) : (
            " "
          )}
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
              onChange={setHandlerInputFirstName}
              required
              id="outlined-required3"
              placeholder="Собствено име"
            />
            <TextField
              required
              id="outlined-required2"
              onChange={setHandlerInputLastName}
              placeholder="Фамилно име"
            />
          </div>
          <TextField
            required
            id="outlined-required1"
            onChange={setHandlerInputEmailReg}
            placeholder="Имейл или телефон"
          />

          <TextField
            id="outlined-password-input"
            type="password"
            onChange={setHandlerInputPasswordReg}
            autoComplete="current-password"
            placeholder="Парола"
          />

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
              onChange={setHandlerInputGender}
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
        <DialogActions className={style.makeRegButtonWrapper}>
          <button
            className={style.regBtnFormCreate}
            autoFocus
            onClick={handleClose}
            onClick={handleRegister}
          >
            Регистрация
          </button>
        </DialogActions>
      </BootstrapDialog>
    </div>
  );
}

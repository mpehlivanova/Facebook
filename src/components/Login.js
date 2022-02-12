import React from "react";
import "../components-css/Login.module.css";
// import Button from "@mui/material/Button";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
    loginWrapper: {
    backgroundColor: "#f0f2f5",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    margin: "-10px",
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
    marginTop: "16px",
    border: "none",
  },
});

export default function Login() {
  const style = useStyle();

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
            className={`${style.passwordInput} ${style.commonRight}`}
            placeholder="Парола"
          />
          <button className={style.loginBtn} variant="contained">
            Вход
          </button>
          <a
            className={style.forgottenPass}
            href="https://www.facebook.com/recover/initiate/?privacy_mutation_token=eyJ0eXBlIjowLCJjcmVhdGlvbl90aW1lIjoxNjQ0NTk1MjE2LCJjYWxsc2l0ZV9pZCI6MzgxMjI5MDc5NTc1OTQ2fQ%3D%3D&amp;ars=facebook_login"
          >
            Забравена парола?
          </a>
          <hr className={style.hr} />
          <button className={style.createRegisterBtn}>
            Създаване на нов профил
          </button>
        </div>
      </div>
    </div>
  );
}

import React from 'react';
import "../components-css/Login.module.css";
import Button from '@mui/material/Button';

export default function Login() {

    const signIn = () => {

    }
  return (
    <div className="login">
      <div className="login__logo">
        <img src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="logo" />
        <img
          src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg"
          alt="fb-logo"
        />
        <h2>
          Fakebook Ви помага да се свързвате и споделяте <br/> с хората в живота Ви.
        </h2>
      </div>

      <Button type="submit" onClick={signIn}>
        Sign In
      </Button>
    </div>
  );
}

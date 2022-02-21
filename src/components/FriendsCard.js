import * as React from "react";
// import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import UserDisny from "./userDisny.js"
import { grey } from "@mui/material/colors";

const useStyles = makeStyles({

  oneFriend: {
    width: "210px",
    height: "360px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    boxShadow: "5px 5px 5px 5px rgb(0,0,0,0.15)",
    borderRadius: "10px",
    justifyContent: "space-between",
    
  },
  text: {
    fontSize: "large",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 20px",
    fontWeight: "bold",
  },
  conrainerBtn: {
    width: "90%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    fontWeight: "bold",
    borderRadius: "10px",
    margin:"0% 5% 5% 5%"
 
  
  },
  imgUser: {
    width: "210px",
    height: "210px",
    borderRadius: "10px 10px 0px 0px",
  },
  palette: {
    neutral: {
      main: "#fff",
      contrastText: "#64748B",
    },
  },
  textbtn: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    textDecoration: "none",
    color:"black",
    margin: "0px 20px",
    
    
  },

});

export default function FriendsCard(img, name) {
  const friends = useStyles();

  return (
    <>
      {
        UserDisny.map((user) => {

          return (
            <>
              <div className={friends.oneFriend}>
                <img
                  className={friends.imgUser}
                  src={user.avatar}
                  alt="user img">
                  </img>
                <p className={friends.text}>{user.name}</p>
                <div className={friends.conrainerBtn}>
                  <Button variant="contained">
                  Добавяне
                  </Button>
                  <Button sx={{ bgcolor: grey[200] }} >
                  <p className={friends.textbtn}>Изтриване</p>
                  </Button>
                </div>
              </div>
            </>

          )

        })
      }

    </>
  );
}
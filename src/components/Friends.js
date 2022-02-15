import * as React from "react";
// import Box from '@mui/material/Box';
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const useStyles = makeStyles({
  page: {
    width: "100%",
    height: "100px",
  },
  leftSideBar: {
    width: "28%",
    height: "100vh",
    background: "white",
    padding: "20px",
    marginLeft: "-30px",
  },

  conatinerFiends: {
    width: "72%",
    height: "100vh",
    background: "#F2F3F5",
    paddingTop: "30px",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
    alignItems: "center",
    gap: "20px",
    flexWrap: "wrap",
  },

  oneFriend: {
    width: "240px",
    height: "380px",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: " 3px 3px 8px -9px rgb(0,0,0,0.75)",
    borderRadius: "10px",
    justifyContent: "space-between",
    // alignItems: "center",
  },
  text: {
    fontSize: "large",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 20px",
    fontWeight: "bold",
  },
  conrainerBtn: {
    width: "100%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "5px",
    fontWeight: "bold",
  },
  imgUser: {
    width: "240px",
    height: "240px",
    borderRadius: "10px",
  },
  palette: {
    neutral: {
      main: "#fff",
      contrastText: "#64748B",
    },
  },
});

const theme = createTheme({
  palette: {
    neutral: {
      main: "#616161",
      contrastText: "#cfd0d1",
    },
  },
});

export default function FriendsCard(img, name) {
  const friends = useStyles();

  return (
    <>
      <div className={friends.page}>
        <div className={friends.leftSideBar}></div>
        <div className={friends.conatinerFiends}>

          <div className={friends.oneFriend}>
            <img
              className={friends.imgUser}
              src="https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_QL75_UX500_CR0,47,500,281_.jpg"
              alt="user img"
            ></img>
            <p className={friends.text}>user.name</p>
            <div className={friends.conrainerBtn}>
              <Button variant="contained">Добавяне</Button>
              <ThemeProvider theme={theme}>
                <Button color="contained" variant="neutral">
                  Премахване
                </Button>
              </ThemeProvider>
            </div>
          </div>

          <div className={friends.oneFriend}>
            <img
              className={friends.imgUser}
              src="https://m.media-amazon.com/images/M/MV5BMjMwMDYxNTUyMl5BMl5BanBnXkFtZTcwNTIwMjQ4Nw@@._V1_QL75_UX500_CR0,47,500,281_.jpg"
              alt="user img"
            ></img>
            <p className={friends.text}>user.name</p>
            <div className={friends.conrainerBtn}>
              <Button variant="contained">Добавяне</Button>
              <ThemeProvider theme={theme}>
                <Button color="contained" variant="neutral">
                  Премахване
                </Button>
              </ThemeProvider>
            </div>
          </div>

        </div>
      </div>

      
    </>
  );
}
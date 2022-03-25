import * as React from "react";
import { makeStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";
import { Button,Link } from "@mui/material";
import Avatar from "@mui/material/Avatar";
import { blue, grey } from "@mui/material/colors";
import FeedRoundedIcon from "@mui/icons-material/FeedRounded";
import DomainDisabledRoundedIcon from "@mui/icons-material/DomainDisabledRounded";
import NotificationsRoundedIcon from "@mui/icons-material/NotificationsRounded";
import SettingsIcon from "@mui/icons-material/Settings";
import SearchIcon from "@mui/icons-material/Search";
import Post from "../components/Post/Post";
import grups from "../components-css/grups.PNG"

const useStyles = makeStyles({
  page: {
    marginTop: "50px",
    width: "100%",
    height: "100px",
    display: "flex",
  },
  leftSideBar: {
    width: "25%",
    height: "100vh",
    background: "white",
    marginLeft: "-30px",
    paddingLeft: "20px",
    paddingRight: "10px",
  },
  conatinerGrup: {
    width: "100%",
    height: "35%",
    background: "#F2F3F5",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
    justifyContent: "center",
  },

  conatiner: {
    width: "50%",
    height: "150vh",
    background: "#F2F3F5",
    display: "flex",
    gap: "20px",
    flexWrap: "wrap",
    padding: "20px",
    justifyContent: "center",
  },
  text: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    textDecoration: "none",
    color: "black",
  },
  textbtn: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    color: "dark blue",
    margin: "0px 20px",
    fontWeight: "600",
    textTransform: "none",
  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  inputDiv: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    borderRadius: "10px",
    width: "340px",
    height: "35px",
    margin: "10px",
    backgroundColor: " #eff2f5",
    // alignItems: "center",
    paddingLeft: "10px",
  },
  input: {
    width: "200px",
    height: "30px",
    border: "none",
    backgroundColor: " #eff2f5",
  },
  textH1: {
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft: "10px",
    fontWeight: "bold",
  },
  setting: {
    display: "flex",
    flexDirection: "row",
    alignItems: "baseline",
    justifyContent: "space-between",
  },
});

export default function Grups() {
  const groupPage = useStyles();
  return (
    <>
      <div className={groupPage.page}>
        <div className={groupPage.leftSideBar}>
          <div className={groupPage.setting}>
            <h2 className={groupPage.textH1}>Group</h2>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <SettingsIcon  color="action" />
            </Avatar>
          </div>
          <div>
            <form>
              <div className={groupPage.inputDiv}>
                <SearchIcon color="action" />
                <input
                  className={groupPage.input}
                  type="text"
                  placeholder="Търсене на група"
                ></input>
              </div>
            </form>
          </div>

          <Link to="/">
            <ListItemButton>
              <Avatar sx={{ bgcolor: blue[600] }}>
                <FeedRoundedIcon />
              </Avatar>
              <p className={groupPage.text}>Вашите канали</p>
            </ListItemButton>
          </Link>

          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <DomainDisabledRoundedIcon color="action" />
            </Avatar>
            <p className={groupPage.text}>Откриване</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <NotificationsRoundedIcon color="action" />
            </Avatar>
            <p className={groupPage.text}>Вашите известия</p>
          </ListItemButton>
          <ListItemButton>
            <Button sx={{ width: "100%", bgcolor: blue[100], opacity: ".5" }}>
              <h3 className={groupPage.textbtn}>+ Създаване на нова група</h3>
            </Button>
          </ListItemButton>
        </div>
        <div className={groupPage.conatiner}>
        <div className={groupPage.conatinerGrup}>
        <Post 
        storyImg={grups}  
        text="Предлагаме ремонтни дейности на достъпни цени" 
        img={grups} />
        </div>
          
        </div>
      </div>
    </>
  );
}

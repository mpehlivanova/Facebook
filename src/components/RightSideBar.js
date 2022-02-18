import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import iconRd from "../components-css/imgLeftBar/rd.png";
import CardAd from "./CardAd.js";
import BadgeAvatars from "./Avatar.js";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";


//    {/* scroll */}
// // import EmployeeList, { IEmployee } from "./EmployeeList";
// // import { Paper } from "@material-ui/core";
//    {/* scroll */}

import { makeStyles } from "@mui/styles";
import { IFrame } from './IFrame';

const useStyles = makeStyles({
  conrainerRight: {
    
    width: "20%",
    background: "#F2F3F5",
    height: "120vh",
    padding: "20px",
    margin:"0px"
  },
  ad: {
    height: "200px",
    background: "#F2F3F5",

    display: "flex",
    flexDirection: "column",
    gap: "5px",
  },

  imgUser: {
    width: "200px",
    borderRadius: "50%",
  },
  list: {
    borderRadius: "10px",
    display: "flex",
    gap: "10px",
    height: "40px",
  },

  text: {
    color: " #4d4e4e",
    marginLeft: "10px",
    marginTop: "5px",
    marginBottom: "5px",
    // fontSize: "small",
    fontFamily: "Helvetica",
    fontSize: "16px"
  },
  textMedium: {
    fontSize: "medium",
  },
  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },
  margin: {
    marginLeft: "8px",
  },
  containerCard: {
    display: "flex",
    flexDirection: "row",
  },

  textAd: {
    color: " #4d4e4e",
    marginLeft: "10px",
  },
  imgAd: {
    width: "80",
    height: "80px",
    borderRadius: "10px",
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },
  headerContact: {
    display: "flex",
    justifyContent: "space-between",
  },
});

// const user ={{},{}} // all user

export default function RightSideBar() {
  const classes = useStyles();

  return (
    <div className={classes.conrainerRight}>
      <h3 className={classes.text}>Спонсорирано</h3>
      <hr/>
      <IFrame />
      <div className={classes.ad}>
        <CardAd />
        <CardAd />
      </div>
      <div className={classes.border}>
        <ListItemButton className={classes.textSmall}>
          <img width="30px" src={iconRd} alt="icon rd"></img>
          <p className={classes.margin}>
            <strong>user name's </strong> end <strong> user name's </strong>{" "}
            birthday is today.
            <strong>your name's</strong>have hteir birthdays today.
          </p>
        </ListItemButton>
      </div>

      <div>
        <List>
          <div className={classes.headerContact}>
            <h3 className={classes.text}>Contacts</h3>
            <div>
              <IconButton size="small">
                <VideoCallIcon className={classes.iconContact} />
              </IconButton>
              <IconButton size="small">
                <SearchIcon className={classes.iconContact} />
              </IconButton>
              <IconButton size="small">
                <MoreHorizIcon className={classes.iconContact} />
              </IconButton>
            </div>
          </div>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>userName</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>userName</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>userName</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>userName</p>
          </ListItemButton>

          <div className={classes.border}>
            <h3 className={classes.text}>Group conversations</h3>

            <ListItemButton className={classes.list}>
              <BadgeAvatars />
              <p className={classes.textSmall}>group</p>
            </ListItemButton>

            <ListItemButton className={classes.list}>
              <BadgeAvatars />
              <p className={classes.textSmall}>group</p>
            </ListItemButton>
          </div>
        </List>

        {/* scroll */}
        {/* <Paper>
          <EmployeeList employees={rows} showAdmin={false} />
        </Paper>
 */}
        {/* scroll */}
      </div>
    </div>
  );
}

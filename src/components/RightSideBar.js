import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import iconRd from "../components-css/imgLeftBar/rd.png";
// import CardAd from "./CardAd.js";
import BadgeAvatars from "./Avatar.js";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import users from "../server/users";

//    {/* scroll */}
// // import EmployeeList, { IEmployee } from "./EmployeeList";
// // import { Paper } from "@material-ui/core";
//    {/* scroll */}

import { makeStyles } from "@mui/styles";
import { IFrame } from "./IFrame";

const useStyles = makeStyles({
  conrainerRight: {
    width: "20%",
    background: "#F2F3F5",
    height: "1300vh",
    padding: "20px",
    margin: "0px",
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
    fontSize: "16px",
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

export default function RightSideBar(props) {
  const classes = useStyles();

  return (
    <div className={classes.conrainerRight}>
      <h3 className={classes.text}>Спонсорирано</h3>

      <IFrame />
      {/* <div className={classes.ad}>
        <CardAd />
        <CardAd />
      </div> */}
      {/* <div className={classes.border}>
        <ListItemButton className={classes.textSmall}>
          <img width="30px" src={props.name} alt="icon rd"></img>
          <p className={classes.margin}>
            <strong>user name's </strong> end <strong> user name's </strong>{" "}
            birthday is today.
            <strong>your name's</strong>have hteir birthdays today.
          </p>
        </ListItemButton>
      </div> */}

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

          {users.map((u) => (
            <ListItemButton key={u.name} className={classes.list}>
              <BadgeAvatars image={u.image} />
              <p className={classes.textSmall}>{u.name}</p>
            </ListItemButton>
          ))}
        </List>
      </div>

      {/* <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>Калоян Игнатов</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars />
            <p className={classes.textSmall}>Кирил Страхилов</p>
          </ListItemButton>

          <ListItemButton className={classes.list}>
            <BadgeAvatars src="https://d33wubrfki0l68.cloudfront.net/1fa5d5db38d24786b36e58bf0562f1d821b12ef6/e61d8/static/inviteyourownheader1-878b5db230ca8e78e1451814ba07a834.jpg" />
            <p className={classes.textSmall}>Мадлена Христова</p>
          </ListItemButton>

          <div className={classes.border}>
            <h3 className={classes.text}>Групови разговори</h3>

            <ListItemButton className={classes.list}>
              <BadgeAvatars />
              <p className={classes.textSmall}>Дом и градина</p>
            </ListItemButton>

            <ListItemButton className={classes.list}>
              <BadgeAvatars img="https://www.gravatar.com/avatar/1b8fabaa8d66250a7049bdb9ecf44397?s=250&d=mm&r=x" />
              <p className={classes.textSmall}>Всичко за котките</p>
            </ListItemButton> */}

      {/* scroll */}
      {/* <Paper>
          <EmployeeList employees={rows} showAdmin={false} />
        </Paper>
 */}
      {/* scroll */}
    </div>
    // </div>
  );
}

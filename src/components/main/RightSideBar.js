import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import BadgeAvatars from "../Avatar.js";
import SearchIcon from "@mui/icons-material/Search";
import VideoCallIcon from "@mui/icons-material/VideoCall";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import IconButton from "@mui/material/IconButton";
import users from "../../server/users";
import { makeStyles } from "@mui/styles";
import { IFrame } from "../video/IFrame";
import friends from "../../components-css/imgLeftBar/friends.png"
import { useSelector } from "react-redux";
import RequestsCard from "../friends/RequestsCard";

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
  conteinerRequest:{
    display:"flex",
    flexDirection: "column",
    gap: "10px",  
  },
  styleOfText:{
    fontFamily: "Segoe UI",
    fontSize: "16px",
    fontWeight: "500",
  },
  img:{
    width: "30px",
    height: "30px",
    borderRadius: "50%",
    objectFit: "cover",
    margin:"10px"
  },
  textFromRequest:{
    display:"flex",
    justifyContent:"center",
    textAlign:"center",
  }
});

export default function RightSideBar(props) {

  function uuidv4() {
    return (Math.random() * 1000 + Math.random() * 1000)
  }
  const classes = useStyles();
  const listOfRequests = useSelector((state) => state.userData.currLogged);
  const allUsersReg = useSelector((state) => state.userData.registered);
  const dataOfCurrentUser = allUsersReg.filter(e => e.email === listOfRequests[0].email)
  const isEmpty = dataOfCurrentUser[0].requests.length > 0
  
  return (
    <div className={classes.conrainerRight}>
      {
      isEmpty ? 
      <div className={classes.conteinerRequest}>
      <div className={classes.textFromRequest}>
      <img
                className={classes.img}
                src={friends}
                alt="icon friends"
              ></img>
      <p className={classes.styleOfText}>Предложение за приятелство</p>
      </div>
        <RequestsCard />
      </div> 
      : 
      <div>
      <h3 className={classes.text}>Спонсорирано</h3>
      <IFrame></IFrame>
      </div>
      }
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
            <ListItemButton className={classes.list} key={uuidv4}>
              <BadgeAvatars image={u.image} key={uuidv4} />
              <p className={classes.textSmall} key={uuidv4}>
                {u.name}
              </p>
            </ListItemButton>
          ))}
        </List>
      </div>
    </div>
    
  );
}

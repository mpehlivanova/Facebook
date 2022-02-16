import * as React from "react";
import { makeStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";
import FriendsCard from "../components/FriendsCard";
import { Link } from "@mui/material";
import PeopleIcon from "@mui/icons-material/People";
import PersonAddAlt1Icon from "@mui/icons-material/PersonAddAlt1";
import Avatar from "@mui/material/Avatar";
import CakeIcon from "@mui/icons-material/Cake";
import PeopleAltRoundedIcon from "@mui/icons-material/PeopleAltRounded";
import { blue, grey } from "@mui/material/colors";

const useStyles = makeStyles({
  page: {
    width: "100%",
    height: "100px",
    display: "flex",
    
 
  },
  leftSideBar: {
    width: "25%",
    height: "100vh",
    background: "white",
    marginLeft: "-30px",
    paddingLeft:"20px"
  },

  conatinerFiends: {
    width: "75%",
    height: "150vh",
    background: "#F2F3F5",
    display: "flex",
    gap: "10px",
    flexWrap: "wrap",
    padding:"20px",
    

  },
  text: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft:"10px",
    textDecoration: "none",
    color:"black",
    
  },
});

export default function Friends() {
  const pageFriends = useStyles();
  return (
    <>
      <div className={pageFriends.page}>
        <div className={pageFriends.leftSideBar}>

        <Link  to="/">
          <ListItemButton >
            <Avatar sx={{ bgcolor: blue[600] }}>
              <PeopleAltRoundedIcon />
            </Avatar>
           <p className={pageFriends.text}> Home</p>
          </ListItemButton>
          </Link>
          
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <PersonAddAlt1Icon color="action" />
            </Avatar>
            <p className={pageFriends.text}>Friends recuest</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <PeopleIcon color="action" />
             
            </Avatar>
            <p className={pageFriends.text}>Suggestion</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <PeopleIcon color="action" />
            </Avatar>
            <p className={pageFriends.text}>All friends</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <CakeIcon color="action" />
            </Avatar>
            <p className={pageFriends.text}>Birthdays</p>
          </ListItemButton>
          <ListItemButton>
            <Avatar sx={{ bgcolor: grey[200] }}>
              <PeopleIcon color="action" />
            </Avatar>
            <p className={pageFriends.text}>Costom list</p>
          </ListItemButton>
        </div>
        <div className={pageFriends.conatinerFiends}>
          <FriendsCard />
        </div>
      </div>
    </>
  );
}

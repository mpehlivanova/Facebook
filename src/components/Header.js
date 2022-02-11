import React from "react";
import "../components-css/Header.css"
import { makeStyles } from "@mui/styles";
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
// import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import IconButton from '@mui/material/IconButton';


const useStyles = makeStyles({
    iconCentrum: {
        color: "#777",
    
    },
    iconRight: {
        scale:"1.1"
      
      },
      centrum:{
          display:"flex",
          gap:"80px"
      }

  
  });

function Header(){

    const classes = useStyles();

    return <div className="header">
        <div className="left_header"> 
        <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="logo_of_Facebook"></img>

        <div className="header_input">
            <SearchIcon/>
        <input type="text" placeholder="Search Facebook"></input>
        </div>
        </div>

        <div className="central_header"> 
            <div className={classes.centrum}>
            <IconButton ><HomeIcon className={classes.iconCentrum} fontSize = "large"/></IconButton>
            <IconButton><StorefrontOutlinedIcon className={classes.iconCentrum} /></IconButton>
           <IconButton><PeopleAltOutlinedIcon className={classes.iconCentrum} /></IconButton>
           <IconButton><SmartDisplayOutlinedIcon className={classes.iconCentrum}  /></IconButton>
           {/* <IconButton><SupervisedUserCircleOutlinedIcon className={classes.iconCentrum} /></IconButton> */}
      

            </div>
        </div>

        <div className="right_header">
            <IconButton><AccountCircleOutlinedIcon className={classes.iconRight}  /></IconButton>
            <IconButton><AddCircleOutlineOutlinedIcon className={classes.iconRight}  /></IconButton>
            <IconButton><CircleNotificationsOutlinedIcon className={classes.iconRight}  /></IconButton>
            <IconButton><ArrowDropDownCircleOutlinedIcon className={classes.iconRight}  /></IconButton>
        <div></div>
        </div>

    </div>
}

export default Header
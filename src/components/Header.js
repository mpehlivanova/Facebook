import React from "react";

import { makeStyles } from "@mui/styles";

import "../components-css/header.modules.css"
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
// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'



const useStyles = makeStyles({
    iconCentrum: {
      scale:"1.2",
      
    
    },
    iconRight: {
        scale:"1.1"
      
      },
      centrum:{
          display:"flex",
          gap:"80px"
      },
      opasy:{
        opacity:"0.5",
    },
  });
;
function Header(){

    const classes = useStyles();

    return <div className="header">
        <div className="left_header"> 
        <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="logo_of_Facebook"></img>

        <div className="header_input">
            <SearchIcon/>
        <input type="text"></input>
        </div>
        </div>

        <div className="central_header"> 
            <div className={classes.centrum}>
            <Button className={classes.opasy}  color="inherit"  ><HomeIcon className={classes.iconCentrum} /></Button>
            <Button className={classes.opasy}  color="inherit" ><StorefrontOutlinedIcon className={classes.iconCentrum} /></Button>
           <Button className={classes.opasy}  color="inherit" ><PeopleAltOutlinedIcon className={classes.iconCentrum} /></Button>
           <Button className={classes.opasy}  color="inherit" ><SmartDisplayOutlinedIcon className={classes.iconCentrum}  /></Button>
           {/* <IconButton><SupervisedUserCircleOutlinedIcon className={classes.iconCentrum} /></IconButton> */}
      

            </div>
        </div>

        <div className="right_header">
            <Button className={classes.opasy}  color="inherit"><AccountCircleOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><AddCircleOutlineOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><CircleNotificationsOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><ArrowDropDownCircleOutlinedIcon className={classes.iconRight}  /></Button>
        <div></div>
        </div>

    </div>
}

export default Header
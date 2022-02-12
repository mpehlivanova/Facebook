import React from "react";

import { makeStyles } from "@mui/styles";
import "../components-css/Header.css"

import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
// import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';

import IconButton from '@mui/material/IconButton';
import { hover } from "@testing-library/user-event/dist/hover";
import { blue } from "@mui/material/colors";
import myProfil from "../components-css/imgLeftBar/guest.png";

// import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button'




const useStyles = makeStyles({
    iconCentrum: {

      scale:"1.2",
      borderBottom : "4px solid white"
    },
    iconRight: {
        scale:"1.1"
      
      },
      centrum:{
          display:"flex",
          gap:"80px"
      },

    left_header_img:{
        height: "40px"
        
    } ,
    header:{
        height: "50px",
        display: "flex",
        justifyContent: "space-between",
        position: "sticky",
        backgroundColor: "white",
        zIndex: "100",
        top: "0",
        boxShadow: "0px 5px 8px -9px rgb(0,0,0,0.75)",
        alignItems: "baseline",
        alignItems:"center",
    },
    left_header:{
        display: "flex",
        justifyContent: "space-evenly"
    },   
    header_input:{
        display: "flex",
        alignItems: "center",
        backgroundColor: "#eff2f5",
        padding: "10px",
        marginLeft: "10px",
        borderRadius: "33px",
        marginBottom: "10px",
        width:"250px"
     
    },
    header_input_value:{
        border: "none",
        backgroundColor: "#eff2f5",
        outlineWidth: "0",
    },
    profile_image:{
        height: "35px",
        borderRadius: "33px"
    }

  });
;
function Header(){

    const classes = useStyles();

    return <div className={classes.header}>
        <div className={classes.left_header}> 
        <img className = {classes.left_header_img} src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="logo_of_Facebook"></img>

        <div className={classes.header_input}>
            <SearchIcon/>

        <input className={classes.header_input_value}type="text"></input>

        </div>
        </div>

        <div className="central_header"> 
            <div className={classes.centrum}>

                <div className="options "><Button><HomeIcon className={classes.iconCentrum} fontSize = "large"/></Button></div>
                <div className="options "><Button><StorefrontOutlinedIcon className={classes.iconCentrum} fontSize = "large"/></Button></div>
                <div className="options "><Button><PeopleAltOutlinedIcon className={classes.iconCentrum} fontSize = "large"/></Button></div>
                <div className="options "><Button><SmartDisplayOutlinedIcon className={classes.iconCentrum}  fontSize = "large"/></Button></div>

            </div>
        </div>

        <div className="right_header">


        

            <IconButton>
            <img className={classes.profile_image} src = {myProfil} alt="icon my profil"></img>
            <h6>Name</h6> 
            </IconButton>
            <IconButton><AddCircleOutlineOutlinedIcon className={classes.iconRight}  fontSize = "large"/></IconButton>
            <IconButton><CircleNotificationsOutlinedIcon className={classes.iconRight}  fontSize = "large"/></IconButton>
            <IconButton><ArrowDropDownCircleOutlinedIcon className={classes.iconRight} fontSize = "large" /></IconButton>

            {/* <Button className={classes.opasy}  color="inherit"><AccountCircleOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><AddCircleOutlineOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><CircleNotificationsOutlinedIcon className={classes.iconRight}  /></Button>
            <Button className={classes.opasy}  color="inherit"><ArrowDropDownCircleOutlinedIcon className={classes.iconRight}  /></Button> */}

        <div></div>
        </div>

    </div>
}

export default Header
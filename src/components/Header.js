import React from "react";
import "../components-css/header.modules.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home'
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import SupervisedUserCircleOutlinedIcon from '@mui/icons-material/SupervisedUserCircleOutlined';
import AccountCircleOutlinedIcon from '@mui/icons-material/AccountCircleOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import IconButton from '@mui/material/IconButton';


function Header(){
    return <div className="header">
        <div className="left_header"> 
        <img src = "https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png" alt="logo_of_Facebook"></img>

        <div className="header_input">
            <SearchIcon/>
        <input type="text"></input>
        </div>
        </div>

        <div className="central_header"> 
            <div className="header_inst">
                <IconButton>
                <HomeIcon fontSize="large" />
                </IconButton>
           <IconButton><PeopleAltOutlinedIcon fontSize="large" /></IconButton>
           <IconButton><SmartDisplayOutlinedIcon fontSize="large" /></IconButton>
           <IconButton><StorefrontOutlinedIcon fontSize="large" /></IconButton>
           <IconButton><SupervisedUserCircleOutlinedIcon fontSize="large" /></IconButton>

            </div>
        </div>

        <div className="right_header">
            <IconButton><AccountCircleOutlinedIcon fontSize="large" /></IconButton>
            <IconButton><AddCircleOutlineOutlinedIcon fontSize="large" /></IconButton>
            <IconButton><CircleNotificationsOutlinedIcon fontSize="large" /></IconButton>
            <IconButton><ArrowDropDownCircleOutlinedIcon fontSize="large" /></IconButton>
        <div></div>
        </div>

    </div>
}

export default Header
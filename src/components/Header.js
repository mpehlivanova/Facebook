import React from "react";
import { makeStyles } from "@mui/styles";
import "../components-css/Header.css"
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';
import SmartDisplayOutlinedIcon from '@mui/icons-material/SmartDisplayOutlined';
import StorefrontOutlinedIcon from '@mui/icons-material/StorefrontOutlined';
import AddCircleOutlineOutlinedIcon from '@mui/icons-material/AddCircleOutlineOutlined';
import CircleNotificationsOutlinedIcon from '@mui/icons-material/CircleNotificationsOutlined';
import ArrowDropDownCircleOutlinedIcon from '@mui/icons-material/ArrowDropDownCircleOutlined';
import IconButton from '@mui/material/IconButton';
import myProfil from "../components-css/imgLeftBar/guest.png";
import Button from '@mui/material/Button'
import ListItemIcon from "@mui/material/ListItemIcon";
import { Link } from "react-router-dom";
import { Avatar } from "@mui/material";
import MessageRoundedIcon from '@mui/icons-material/MessageRounded';
import AppsRoundedIcon from '@mui/icons-material/AppsRounded';
import { grey } from "@mui/material/colors";
import NotificationsRoundedIcon from '@mui/icons-material/NotificationsRounded';
import ArrowDropDownRoundedIcon from '@mui/icons-material/ArrowDropDownRounded';





const useStyles = makeStyles({
    iconCentrum: {

      scale:"0.9", // small icon header -Mariela
      borderBottom : "4px solid white"
    },
    iconRight: {
        scale:"0.9"// small icon header -Mariela
      
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
        // alignItems: "baseline",
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
    },
    right_header:{
        display: "flex",
        alignItems: "center",
    },
    homeIcon:{
      color:"action"
    }

  });
;
function Header(){

    const classes = useStyles();

    return (
      <div className={classes.header}>
        <div className={classes.left_header}>
          
           
              <Link to="/">
                <img
                  className={classes.left_header_img}
                  src="https://upload.wikimedia.org/wikipedia/en/thumb/0/04/Facebook_f_logo_%282021%29.svg/2048px-Facebook_f_logo_%282021%29.svg.png"
                  alt="logo_of_Facebook"
                />
              </Link>
           
          

          <div className={classes.header_input}>
            <SearchIcon />

            <input
              className={classes.header_input_value}
              type="text"
              placeholder="Search Facebook"
            ></input>
          </div>
        </div>

        <div className="central_header">
          <div className={classes.centrum}>
            <div className="options">
           <Link to="/">  {/*  added link and buttum color gre Mariela*/}
              <Button>
                <HomeIcon  color="action" className={classes.iconCentrum} fontSize="large" /> 
              </Button>
              </Link>
            </div>
            <div className="options">
              <Button>
                <StorefrontOutlinedIcon
                 color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
            </div>
            <div className="options">
            <Link to="/friends">  {/*  added link Mariela */}
              <Button>
                <PeopleAltOutlinedIcon
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"/>
              </Button>
              </Link>
            </div>
            <div className="options">
            <Link to="/video">  {/*  added link Mariela */}
              <Button>
                <SmartDisplayOutlinedIcon
                  color="action"
                  className={classes.iconCentrum}
                  fontSize="large"
                />
              </Button>
              </Link>
            </div>
          </div>
        </div>

        <div className={classes.right_header}>
          <ListItemIcon>

            
              <Link to="/user">
                <img
                  className={classes.profile_image}
                  src={myProfil}
                  alt="icon my profil"
                />
              </Link>
           

          </ListItemIcon>

          <Link to="/">{/*  added new style btn Mariela */}
          <IconButton>
          <Avatar sx={{ bgcolor: grey[200] }}>
              <AppsRoundedIcon color="action"/>
            </Avatar>
          </IconButton>
          </Link>
          
          <Link to="/">{/*  added new style btn Mariela */}
          <IconButton>
          <Avatar sx={{ bgcolor: grey[200] }}>
              <MessageRoundedIcon color="action"/>
            </Avatar>
          </IconButton>
          </Link>
          
          <Link to="/">{/*  added new style btn Mariela */}
          <IconButton>
          <Avatar  sx={{ bgcolor: grey[200] }}>
              <NotificationsRoundedIcon color="action"/>
            </Avatar>
          </IconButton>
          </Link>
           
          <Link to="/">{/*  added new style btn Mariela */}
          <IconButton>
          <Avatar className="homeIcon" sx={{ bgcolor: grey[200] }}>
              <ArrowDropDownRoundedIcon color="action"/>
            </Avatar>
          </IconButton>
          </Link>

{/* 
          <IconButton>
            <CircleNotificationsOutlinedIcon
              className={classes.iconRight}
              fontSize="large"
            />
          </IconButton>
          <IconButton>
            <ArrowDropDownCircleOutlinedIcon
              className={classes.iconRight}
              fontSize="large"
            />
          </IconButton> */}
        </div>
      </div>
    );
}

export default Header
import React from "react";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ArrowDropDownIcon from '@mui/icons-material/ArrowDropDown';
import Collapse from "@mui/material/Collapse";
import { makeStyles } from "@mui/styles";
import ExpandLess from "@mui/icons-material/ExpandLess";
import ExpandMore from "@mui/icons-material/ExpandMore";
import myProfil from "../components-css/imgLeftBar/guest.png";
import memories from "../components-css/imgLeftBar/memoirs.png";
import friends from "../components-css/imgLeftBar/friends.png"
import save from "../components-css/imgLeftBar/reserved.png";
import grups from "../components-css/imgLeftBar/grups.png";
import publicity from "../components-css/imgLeftBar/publicity.png";
import pages from "../components-css/imgLeftBar/pages.png";
import clima from '../components-css/imgLeftBar/clima.png'
import adMasanger from "../components-css/imgLeftBar/dispatcher.png";
import comminity from "../components-css/imgLeftBar/helpAll.png";
import covid from "../components-css/imgLeftBar/covid.png";
import health from "../components-css/imgLeftBar/helper.png";
import events from "../components-css/imgLeftBar/events.png";
import pay from "../components-css/imgLeftBar/pay.png";
import favorites from "../components-css/imgLeftBar/like.png";
import fundraisers from "../components-css/imgLeftBar/company fundraising.png";
import video from "../components-css/imgLeftBar/video.png";
import liveVideo from "../components-css/imgLeftBar/liveVideo.png";
import marketPlace from "../components-css/imgLeftBar/marketPlace.png";
import masanger from "../components-css/imgLeftBar/masanger.png";
import recent from "../components-css/imgLeftBar/recent.png";
import game from "../components-css/imgLeftBar/game.png";
import recentAd from "../components-css/imgLeftBar/recentAd.png";
import translate from "../components-css/imgLeftBar/translation.png";
import watch from "../components-css/imgLeftBar/watch.png";
import wather from "../components-css/imgLeftBar/wather.png";
import "../components-css/LeftSidebar.css";



const useStyles = makeStyles({
  container: {
    width: "28%",
    background: "#F2F3F5",
    padding: "20px",
    marginLeft: "-30px",
  },
  img: {
    width: "30px",
    borderRadius: "50%",
  },

  text: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    paddingLeft:"10px"
  },
  list: {
    borderBottom: "1px solid #cfd0d1",
    
  },
  shortcuts: {
    width: "50px",
    borderRadius: "5px",
    marginRight: "20px",
  },
});

export default function LeftSidebar() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.container}>

      <List className={classes.list}>
        <ListItemButton className={classes.text}>
          <ListItemIcon >
            <img className={classes.img} src = {myProfil} alt="icon my profil" ></img>
          </ListItemIcon>
          Your name
        </ListItemButton>
        <ListItemButton className={classes.text}>
          <ListItemIcon >
          <img className={classes.img} src = {friends} alt="icon friends" ></img>
          </ListItemIcon>
          Friends

        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
          <img width="30px" src = {memories} alt="icon memories" ></img>
          </ListItemIcon>
          Memories
        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
          <img width="30px" src = {save} alt="icon save" ></img>
          </ListItemIcon>
          Saved
        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
          <img width="30px" src = {grups} alt="icon grups" ></img>
          </ListItemIcon>
          Groups
        </ListItemButton>

        <ListItemButton className={classes.text}>
          <ListItemIcon>
          <img width="30px"  src = {pages} alt="icon pages" ></img>
          </ListItemIcon>
          Pages
        </ListItemButton>

        <ListItemButton className={classes.text} onClick={handleClick}>
          <ListItemIcon>
          <ArrowDropDownIcon/>
          </ListItemIcon>
          See more
          {open ? <ExpandLess /> :<ExpandMore/>}
        </ListItemButton>

        <Collapse in={open}>
          <List>
            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {publicity} alt="icon public" ></img>
              </ListItemIcon>
              Ad Centre
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {adMasanger} alt="icon ads masanger" ></img>
              </ListItemIcon>
              Ads Messenger
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {clima} alt="icon clima centre" ></img>
              </ListItemIcon>
              Clima Science Centre
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {comminity} alt="icon community help" ></img>
              </ListItemIcon>
              Community Help
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {covid} alt="icon COVID-19 " ></img>
              </ListItemIcon>
              COVID-19 Information Centre
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {health} alt="icon health" ></img>
              </ListItemIcon>
              Emotion Health
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {events} alt="icon events" ></img>
              </ListItemIcon>
              Events
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {pay} alt="icon pay" ></img>
              </ListItemIcon>
              Facebook Pay
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {favorites} alt="icon favorites" ></img>
              </ListItemIcon>
              Favorites
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {fundraisers} alt="icon fundraisers" ></img>
              </ListItemIcon>
              Fundraisers
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {video} alt="icon video" ></img>
              </ListItemIcon>
              Gaming Video
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {liveVideo} alt="icon live video" ></img>
              </ListItemIcon>
              Live videos
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {marketPlace} alt="icon market place" ></img>
              </ListItemIcon>
              Marketplace
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {masanger} alt="icon masanger" ></img>
              </ListItemIcon>
              Messenger
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {recent} alt="icon recent" ></img>
              </ListItemIcon>
              Most recent
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {game} alt="icon game" ></img>
              </ListItemIcon>
              Play games
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {recentAd} alt="icon ad activity" ></img>
              </ListItemIcon>
              Recent ad activity
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {translate} alt="icon translate" ></img>
              </ListItemIcon>
              Translate Facebook
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
              <img width="30px"  src = {watch} alt="icon watch" ></img>
              </ListItemIcon>
              Watch
            </ListItemButton>

            <ListItemButton className={classes.text}>
              <ListItemIcon>
                <img width="30px"  src={wather} alt="icon for wather"></img>
              </ListItemIcon>
              Wether
            </ListItemButton>
          </List>
        </Collapse>
      </List>
      <div >
      <p  className={classes.text} >Your shortcuts</p>
      <ListItemButton >
      <img className={classes.shortcuts}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM01N479KkBK_s89MUT0XhuGjWSnNcwkybCfGZnFOwkjRWhb6_7sc-Qyg_CIvd-k67Ahw&usqp=CAU" alt="kozi"></img>
      <p className={classes.text}>Lorem ipsum dolor sit amet consectetur </p>
      </ListItemButton>
      
      <ListItemButton >
      <img className={classes.shortcuts}  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM01N479KkBK_s89MUT0XhuGjWSnNcwkybCfGZnFOwkjRWhb6_7sc-Qyg_CIvd-k67Ahw&usqp=CAU" alt="kozi"></img>
      <p className={classes.text}> Lorem ipsum dolor sit amet consectetur</p>
      </ListItemButton>
     
      </div>
      
    </div>
  );
}

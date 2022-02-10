import React from "react";

import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
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



const useStyles = makeStyles({
  divFon: {
    width: "300px",
    background: "#F2F3F5",
    padding: "20px",
    marginTop:"1px",
    borderBottom: "1px solid #a1a1a1",
  
  },
  img: {
    width: "50px",
    borderRadius:"50%",

  },
  list:{
    borderRadius:'10px'
    
  },
  // text:{
  //   fontSize: '0.5rem',
    
  // }
  text: {
    fontSize: 'xx-small',
  }

});

export default function LeftSideBar() {
  const [open, setOpen] = React.useState(false);
  const classes = useStyles();
  const handleClick = () => {
    setOpen(!open);
  };
  return (
    <div className={classes.divFon}>
      <List>
        <ListItemButton className={classes.list}>
          <ListItemIcon >
            <img className={classes.img} src = {myProfil} alt="icon my profil" ></img>
          </ListItemIcon>
          <ListItemText  primary="{your name}" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
          <img src = {friends} alt="icon friends" ></img>
          </ListItemIcon>
          <ListItemText  primary="Friends" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
          <img src = {memories} alt="icon memories" ></img>
          </ListItemIcon>
          <ListItemText primary="Memories" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
          <img src = {save} alt="icon save" ></img>
          </ListItemIcon>
          <ListItemText primary="Saved" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
          <img src = {grups} alt="icon grups" ></img>
          </ListItemIcon>
          <ListItemText primary="Grups" />
        </ListItemButton>

        <ListItemButton>
          <ListItemIcon>
          <img src = {pages} alt="icon pages" ></img>
          </ListItemIcon>
          <ListItemText primary="Pages" />
        </ListItemButton>

        <ListItemButton onClick={handleClick}>
          <ListItemIcon>
          </ListItemIcon>
          <ListItemText primary="See more" />
          {open ? <ExpandLess /> :<ExpandMore/>}
        </ListItemButton>

        <Collapse in={open}>
          <List>
            <ListItemButton>
              <ListItemIcon>
              <img src = {publicity} alt="icon public" ></img>
              </ListItemIcon>
              <ListItemText primary="Ad Centre" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {adMasanger} alt="icon ads masanger" ></img>
              </ListItemIcon>
              <ListItemText primary="Ads Masanger" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {clima} alt="icon clima centre" ></img>
              </ListItemIcon>
              <ListItemText primary="Clima Soience Centre" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {comminity} alt="icon community help" ></img>
              </ListItemIcon>
              <ListItemText primary="Community Help" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {covid} alt="icon COVID-19 " ></img>
              </ListItemIcon>
              <ListItemText primary="COVID-19 Information Centre" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {health} alt="icon health" ></img>
              </ListItemIcon>
              <ListItemText primary="Emotion Health" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {events} alt="icon events" ></img>
              </ListItemIcon>
              <ListItemText primary="Events" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {pay} alt="icon pay" ></img>
              </ListItemIcon>
              <ListItemText primary="Facebook Pay" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {favorites} alt="icon favorites" ></img>
              </ListItemIcon>
              <ListItemText primary="Favorites" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {fundraisers} alt="icon fundraisers" ></img>
              </ListItemIcon>
              <ListItemText primary="Fundraisers" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {video} alt="icon video" ></img>
              </ListItemIcon>
              <ListItemText primary="Caming Video" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {liveVideo} alt="icon live video" ></img>
              </ListItemIcon>
              <ListItemText primary="Live videos" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {marketPlace} alt="icon market place" ></img>
              </ListItemIcon>
              <ListItemText primary="Marketplace" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {masanger} alt="icon masanger" ></img>
              </ListItemIcon>
              <ListItemText primary="Masanger" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {recent} alt="icon recent" ></img>
              </ListItemIcon>
              <ListItemText primary="Most recent" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {game} alt="icon game" ></img>
              </ListItemIcon>
              <ListItemText primary="Play games" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {recentAd} alt="icon ad activity" ></img>
              </ListItemIcon>
              <ListItemText primary="Recent ad activity" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {translate} alt="icon translate" ></img>
              </ListItemIcon>
              <ListItemText primary="Translate Facebook" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
              <img src = {watch} alt="icon watch" ></img>
              </ListItemIcon>
              <ListItemText primary="Watch" />
            </ListItemButton>

            <ListItemButton>
              <ListItemIcon>
                <img src={wather} alt="icon for wather"></img>
              </ListItemIcon>
              <ListItemText primary="Wather" />
            </ListItemButton>
          </List>
        </Collapse>
      </List>
    </div>
  );
}

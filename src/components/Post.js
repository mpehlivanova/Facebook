import * as React from "react";
// import Box from '@mui/material/Box';
import BadgeAvatars from "./Avatar.js";
import PublicIcon from "@mui/icons-material/Public";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import { grey} from "@mui/material/colors";
import { makeStyles } from "@mui/styles";
import { Button } from "@mui/material";
import ThumbUpOutlinedIcon from '@mui/icons-material/ThumbUpOutlined';
import RecommendRoundedIcon from '@mui/icons-material/RecommendRounded';
import ModeCommentOutlinedIcon from '@mui/icons-material/ModeCommentOutlined';
import GifBoxOutlinedIcon from '@mui/icons-material/GifBoxOutlined';
import SentimentSatisfiedOutlinedIcon from '@mui/icons-material/SentimentSatisfiedOutlined';
import PhotoCameraOutlinedIcon from '@mui/icons-material/PhotoCameraOutlined';
import StickyNote2OutlinedIcon from '@mui/icons-material/StickyNote2Outlined';
import IconButton from "@mui/material/IconButton";
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';



const useStyles = makeStyles({
  conrainerPost: {
    width: "75%",
    background: "white",
    display: "flex",
    flexDirection: "column",
    gap: "10px",
    boxShadow: " 3px 3px 8px -9px rgb(0,0,0,0.75)",
    borderRadius: "10px",
    paddingBottom:"20px"
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
    height: "20px",
    padding: "20px",
  },
  row: {
    display: "flex",
    flexDirection: "row",
    alignItems:"center",
    paddingLeft:"2px",
  },
  textSmall: {
    fontSize: "small",
    margin: "2px 0px 0px 5px",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textXsmall: {
    fontSize: "x-small",
    margin: "0px 0px 0px 5px",
    color: "action",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
  },
  textImput: {
    fontSize: "medium",
    fontFamily: "Segoe UI Historic, Helvetica, Arial",
    margin: "0px 0px 0px 5px",
  },
  border: {
    borderTop: "1px solid #cfd0d1",
    borderBottom: "1px solid #cfd0d1",
  },
  buttonBox: {
    display: "flex",
    justifyContent: "space-around",
    padding: "4px",


  },
  addComment: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    gap: "10px"


  },
  form: {
    display: "flex",
    alignItems: "center",
    flexDirection: "row",
    borderRadius: "20px",
    backgroundColor: " #eff2f5",
  },
  input: {
    borderRadius: "20px",
    width: "450px",
    height: "30px",
    margin: "6px",
    border: "none",
    backgroundColor: " #eff2f5",
  },
  iconContact: {
    opacity: "0.5",
    scale: "0.7",
  },
  like:{
    width: "20px", 
    height: "20px",
    borderRadius: "50%",
    backgroundColor:"red",
    display: "flex",
    justifyContent:"center",
    alignItems:"center",
    margin:"2px 0px"
  }
  // btn:{
  //   textTransform: 'none',
  //   '&:hover': {
  //     boxShadow: 'none',
  //     width:"250px"
  //   },
  //   color:"inherit",
  // }

});

export default function Post(text, img) {
  const post = useStyles();

  return (
    <>
      <div className={post.conrainerPost}>
        <div className={post.header}>
          <div className={post.row}>
            <BadgeAvatars />
            <div height="8px">
              <p className={post.textImput}>
                <strong>{"{userName}"} </strong> is with <strong>{"{friend}"}</strong> at <strong>{"{Hotel}"}</strong>
              </p>
              <p className={post.textXsmall}>
                15h *
                <PublicIcon
                  sx={{ fontSize: 12, color: grey[600], marginLeft: "2px" }} />
              </p>
            </div>
          </div>
          <div>
            <IconButton size="small">
              <MoreHorizIcon color="disabled" />
            </IconButton>
          </div>
        </div>

        <p className={post.textImput}>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus aliquid
          amet sunt? Voluptate, incidunt recusandae inventore ducimus obcaecati
          harum enim natus commodi labore? Voluptatum facilis omnis, fugit
          aspernatur quam consequuntur?
        </p>
        <div >
          <img
            className={post.border}
            width="100%"
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM01N479KkBK_s89MUT0XhuGjWSnNcwkybCfGZnFOwkjRWhb6_7sc-Qyg_CIvd-k67Ahw&usqp=CAU"
            alt="user img"
          ></img>
        </div>
        <div className={post.row}>
            <div className={post.like}><FavoriteRoundedIcon sx={{ width: 15, height: 15, color: grey["A100"]}}/></div>
            <RecommendRoundedIcon color="primary"/>
            <p >10</p>
           
        </div>

        <div className={`${post.border} ${post.buttonBox}`}>
          <Button sx={{ '&:hover': { width: "40%" }, textTransform: "none" }} color="inherit"
            startIcon={<ThumbUpOutlinedIcon color="action" />} >Like</Button>
          <Button sx={{ '&:hover': { width: "40%" }, textTransform: "none" }} color="inherit"
            startIcon={<ModeCommentOutlinedIcon color="action" />}>
            Comment
          </Button>
        </div>

        <div>
        <p  className={post.textSmall}>View previouse comments</p>
        <div  className={post.row}>   
        <div  ><BadgeAvatars /></div>
        <div className={post.input}>
          <p></p>
        </div>
        <IconButton size="small">
            <MoreHorizIcon color="disabled" />
        </IconButton>
        </div>
        </div>

        <div className={post.addComment}>
          <BadgeAvatars />
          <div className={post.form}>
            <input className={post.input} type="text" placeholder="White a comment"></input>
            <div>
              <IconButton size="small"><SentimentSatisfiedOutlinedIcon className={post.iconContact} /></IconButton>
              <IconButton size="small"><PhotoCameraOutlinedIcon className={post.iconContact} /></IconButton>
              <IconButton size="small"><GifBoxOutlinedIcon className={post.iconContact} /></IconButton>
              <IconButton size="small"><StickyNote2OutlinedIcon className={post.iconContact} /></IconButton>
            </div>
          </div>

        </div>


      </div>
    </>
  );
}

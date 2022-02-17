import React from "react";
import { makeStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";

const useStyles = makeStyles({

  containerCard:{
    display: "flex",
    flexDirection: "row",
  
  },

  text: {
    color: " #4d4e4e",
    marginLeft:"10px"
    
  },
  imgAd: {
    width:"80",
    height:"80px",
    borderRadius: "10px",
    
  },
 
});


export default function CardAd(img, text) {
  const card = useStyles();
  
  return (
    <ListItemButton >
        <div className={card.containerCard}>
          <img className={card.imgAd}
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSM01N479KkBK_s89MUT0XhuGjWSnNcwkybCfGZnFOwkjRWhb6_7sc-Qyg_CIvd-k67Ahw&usqp=CAU" alt="photoAd">
            </img>
          <p className={card.text}>Nemo.com</p>
        </div>
      </ListItemButton>

  );
}

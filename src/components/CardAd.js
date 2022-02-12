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
            src="https://www.capitan.bg/wp-content/uploads/2018/09/koza.jpg" alt="photoAd">
            </img>
          <p className={card.text}>Kozi.com</p>
        </div>
      </ListItemButton>

  );
}

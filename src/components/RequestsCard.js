import * as React from "react";
import { useDispatch, useSelector } from "react-redux";
import { makeStyles } from "@mui/styles";
import ListItemButton from "@mui/material/ListItemButton";
import BadgeAvatars from "./Avatar.js";



const useStyles = makeStyles({
    conrainerRight: {
      width: "20%",
      background: "#F2F3F5",
      height: "1300vh",
      padding: "20px",
      margin: "0px",
    },
    ad: {
      height: "200px",
      background: "#F2F3F5",
  
      display: "flex",
      flexDirection: "column",
      gap: "5px",
    },
  
    imgUser: {
      width: "200px",
      borderRadius: "50%",
    },
    list: {
      borderRadius: "10px",
      display: "flex",
      gap: "10px",
      height: "40px",
    },
  
    text: {
      color: " #4d4e4e",
      marginLeft: "10px",
      marginTop: "5px",
      marginBottom: "5px",
      // fontSize: "small",
      fontFamily: "Helvetica",
      fontSize: "16px",
    },
    textMedium: {
      fontSize: "medium",
    },
    border: {
      borderTop: "1px solid #cfd0d1",
      borderBottom: "1px solid #cfd0d1",
    },
    margin: {
      marginLeft: "8px",
    },
    containerCard: {
      display: "flex",
      flexDirection: "row",
    },
  
    textAd: {
      color: " #4d4e4e",
      marginLeft: "10px",
    },
    imgAd: {
      
      height: "40px",
      borderRadius: "33.33px",
    },
    iconContact: {
      opacity: "0.5",
      scale: "0.7",
    },
    headerContact: {
      display: "flex",
      
    },
  });

function RequestsCard() {
    const classes = useStyles();
    const list = useSelector((state) => state.userData.currLogged);
    const dispatch = useDispatch();

    const addFriends = (ev) =>{
    dispatch({type:"ADD", payload : ev.target.value});
   
  }

 

    return (
        <>
            {
                list[0].requests.map(e => {
                    console.log(e.firstName)
                    return (
                   
                        <div>
                            <div >
                            <ListItemButton className={classes.list}>
                            <BadgeAvatars image={e.avatar} />
                            <p className={classes.textSmall}>{e.firstName}</p>
                            </ListItemButton>
                            </div>
                            <div>
                            <button onClick={addFriends} value={e.email}>Приеми</button>
                            <button value={e.email}>Откажи</button>
                            </div>
                        </div>
                    )

                })
            }
        </>
    )
}

export default RequestsCard
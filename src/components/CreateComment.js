import React from "react";
import ListItemIcon from "@mui/material/ListItemIcon";
import myProfil from "../components-css/imgLeftBar/guest.png";
import { makeStyles } from "@mui/styles";
import { borderRadius, display } from "@mui/system";
import VideocamIcon from '@mui/icons-material/Videocam';
import InsertPhotoIcon from '@mui/icons-material/InsertPhoto';
import EmojiEmotionsIcon from '@mui/icons-material/EmojiEmotions';


const cssStyle = makeStyles({
    topComment:{
        
        display:"flex",
        height:"50%",
        borderBottom:"1px solid #eff2f5",
        paddingBottom:"15px",
        padding:"15px",
    },
    img:{
        width:"30px",
        borderRadius:"33px",

    },
    input:{
        border:"none",
        outlineWidth: "0",
        padding:"5px 20px",
        margin:"0 10px",
        borderRadius:"33px",
        backgroundColor:"#eff2f5",
        flex:"1"
    },
    conteiner:{
        width:"75%",
        height:"130px",
        display:"flex",
        marginTop:"20px",
        flexDirection:"column",
        backgroundColor:"white",
        borderRadius:"15px",
        boxShadow:"0px 5px 7px -7px rgba(0,0,0,0.75)"
         
    },
    bottomComment:{
        display:"flex",
        padding:" 0px 20px 0px 20px",
        alignItems:"center",
        margin:"5px",
        height:"50%"
    },
    camera:{
        color:"red",
        
    },
    photo:{
        color:"green",
        
    },
    emoji:{
        color:"orange"
    },
    textInfo:{
        color:"grey",
        fontFamily:"Arial", 
        fontSize:"medium",
        marginLeft:"10px",
    },
    conteiner_option:{
        display:"flex",
        textAlign:"center", // да сложа *hover
        padding:" 0px 20px 0px 20px",
        alignItems:"center",
        margin:"5px",
        cursor:"pointer",
    }
    
})

function CreatePost() {

    const style = cssStyle()
    

    return (
        <div className={style.conteiner}>


            <div className={style.topComment}>
                <ListItemIcon >
                    <img className={style.img} src={myProfil} alt="icon my profil" ></img>
                </ListItemIcon>
                <input className={style.input} placeholder="Какво мислите,king Julien"></input>     {/*!!!!!!!!!!смяна на име*/}
            </div>


            <div className={style.bottomComment}>
                <div className={style.conteiner_option}>
                <VideocamIcon className={style.camera} fontSize = "large"/>
                <h3 className={style.textInfo}>Видео на живо</h3>
                </div>


                <div className={style.conteiner_option}>
                <InsertPhotoIcon className={style.photo} fontSize = "large"/>
                <h3 className={style.textInfo}>Снимка/видеоклип</h3>
                </div>


                <div className={style.conteiner_option}>
                <EmojiEmotionsIcon className={style.emoji} fontSize = "large"/>
                <h3 className={style.textInfo}>Чувство/Дейност</h3>
                </div>

            </div>



        </div>
    )
}

export default CreatePost
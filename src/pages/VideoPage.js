import React from "react";
import { makeStyles } from "@mui/styles";
const useStyle = makeStyles({
    container: {
        marginTop: "50px",
        backgroundColor: "pink",
        width: "100%",
        height: "100vh",
        
    }

})


export default function Video() {
    const style = useStyle();
    return(
        <div className={style.container}>
        </div>
    )
}

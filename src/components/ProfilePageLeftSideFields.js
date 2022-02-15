import React from "react";
import { makeStyles } from "@mui/styles";

const useStyle = makeStyles({
  field: {
    width: "90%",
    height: "50px",
    fontSize: "16px",
    backgroundColor: "#e4e6eb",
    marginBottom: "10px",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: "5px",
    fontWeight: "500",
    cursor: "pointer",
    "&:hover": {
      backgroundColor: "#d8d8d8",
    },
  },
});

export default function ProfilePageLeftSideFields(props) {
  const style = useStyle();

  return <div className={style.field}>{props.name}</div>;
}

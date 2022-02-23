import React from 'react'
import { makeStyles } from '@mui/styles';
import { useSelector } from 'react-redux';
const useStyles = makeStyles({
    biographyWrapper: {
        width: "366px",
        height: "60px",
        fontFamily:"Helvetica",
    }
});

export default function Biography() {
    const style = useStyles();

    const biography = useSelector((state) => state.actionPost.addedBiography); 

  return (
    <p className={style.biographyWrapper}>{biography}</p>
  )
}

import * as React from "react";
import { styled } from "@mui/material/styles";
import Badge from "@mui/material/Badge";
import Avatar from "@mui/material/Avatar";
import Stack from "@mui/material/Stack";
import myProfil from "../components-css/imgLeftBar/guest.png";

const StyledBadge = styled(Badge)(({ theme }) => ({
  "& .MuiBadge-badge": {
    backgroundColor: "#44b700",
    color: "#44b700",
    boxShadow: `0 0 0 2px ${theme.palette.background.paper}`,
    "&::after": {
    
    }
   
  }
}));

export default function BadgeAvatars(props) {
  return (
    <Stack style={{fontSize:2}}  direction="row" scale=".2" spacing={1}>
      <StyledBadge 
        overlap="circular"
        anchorOrigin={{ vertical: "bottom", horizontal: "right" }}
        variant="dot">
        <Avatar style={{ width: 25, height: 25 }} alt="Remy Sharp" src={myProfil} /> 
      </StyledBadge>
    </Stack>
  );
}

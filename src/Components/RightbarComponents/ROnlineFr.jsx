import { Avatar, AvatarGroup, Typography } from "@mui/material";
import React from "react";

const ROnlineFr = () => {
  return (
    <>
      <Typography mt={2} mb={2} variant="h6" fontWeight={100}>
        Online friends
      </Typography>
      <AvatarGroup max={7}>
        <Avatar
          alt="Remy Sharp"
          src="https://mui.com/static/images/avatar/1.jpg"
        />
        <Avatar
          alt="Travis Howard"
          src="https://mui.com/static/images/avatar/2.jpg"
        />
        <Avatar
          alt="Cindy Baker"
          src="https://mui.com/static/images/avatar/3.jpg"
        />
        <Avatar
          alt="Agnes Walker"
          src="https://mui.com/static/images/avatar/4.jpg"
        />
        <Avatar
          alt="Trevor Henderson"
          src="https://mui.com/static/images/avatar/5.jpg"
        />
      </AvatarGroup>
    </>
  );
};

export default ROnlineFr;

import { Card,ListItemButton,ListItemAvatar,Avatar,ListItemText } from "@mui/material";
import React from "react";

function CardFriend({value,labelId}) {
  return (
    <Card key={value} p={2}>
      <ListItemButton>
        <ListItemAvatar>
          <Avatar
            alt={`Avatar n°${value + 1}`}
            src={`https://mui.com/static/images/avatar/${value + 1}.jpg`}
          />
        </ListItemAvatar>
        <ListItemText id={labelId} primary={`Friends ${value + 1}`} />
      </ListItemButton>
    </Card>
  );
}

export default CardFriend;

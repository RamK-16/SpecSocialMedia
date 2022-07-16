import {
  Box,
  List,
  Typography,
} from "@mui/material";
import React from "react";
import CardFriend from "./CardFriend";

function Friends() {
  return (
    <Box flex={5} p={2}>
      <Typography variant="h6" mt={2} mb={1}>My Friends</Typography>
      <List  sx={{ width: "100%", bgcolor: "background.paper" }}>
        {[0, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3, 1, 2, 3].map((value) => {
          const labelId = `checkbox-list-secondary-label-${value}`;
          return (
            <CardFriend {...{value, labelId}}/>
          );
        })}
      </List>
    </Box>
  );
}

export default Friends;

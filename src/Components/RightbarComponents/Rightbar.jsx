import {
  Box,
} from "@mui/material";
import React from "react";
import RLatestConversation from "./RLatestConversation";
import RLatestPhoto from "./RLatestPhoto";
import ROnlineFr from "./ROnlineFr";


function Rightbar() {
  return (
    <Box flex={2} p={2} sx={{ display: { xs: "none", sm: "none", md: "block"  } }}>
      <Box  variant="quilted" maxWidth="300px">
        <ROnlineFr />
        <RLatestPhoto />
        <RLatestConversation />
      </Box>
    </Box>
  );
}

export default Rightbar;

import styled from "@emotion/styled";
import {
  AppBar,
  Avatar,
  Badge,
  Box,
  InputBase,
  Menu,
  MenuItem,
  Toolbar,
  Typography,
} from "@mui/material";
import React, { useState } from "react";
import { Mail, MenuOpen, Notifications } from "@mui/icons-material";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Search = styled("div")((theme) => ({
  backgroundColor: "white",
  borderRadius: "8px",
  width: "40%",
}));
const Icons = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display: "none",
  gap: "15px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "flex",
  },
}));
const UserBox = styled(Box)(({ theme }) => ({
  padding: "0 10px",
  display: "flex",
  gap: "10px",
  alignItems: "center",
  [theme.breakpoints.up("sm")]: {
    display: "none",
  },
}));
function Navbar() {
  const [open, setOpen ] = useState(false);
  return (
    <AppBar position="sticky">
      <StyledToolbar>
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          MUIDEV1
        </Typography>
        <MenuOpen sx={{ display: { xs: "block", sm: "none" } }} />
        <Search>
          <InputBase placeholder=" Search..." />
        </Search>
        <Icons>
          <Badge badgeContent={4} color="error">
            <Mail />
          </Badge>
          <Badge badgeContent={4} color="error">
            <Notifications />
          </Badge>
          <Avatar
            sx={{ width: 30, heigth: 30 }}
            src="https://sun1-89.userapi.com/s/v1/if1/Ryi3NKpu6gpM0veiA_wt9CqEmZy4MRcEfwBQw52wyuc8J4R1D_BcHB56PIdF-kMltC0pi1GC.jpg?size=200x200&quality=96&crop=420,1,1079,1079&ava=1"
            onClick={(e) => setOpen(true)}
          />
        </Icons>
        <UserBox onClick={e => setOpen(true)}>
          <Avatar
            sx={{ width: 30, heigth: 30 }}
            src="https://sun1-89.userapi.com/s/v1/if1/Ryi3NKpu6gpM0veiA_wt9CqEmZy4MRcEfwBQw52wyuc8J4R1D_BcHB56PIdF-kMltC0pi1GC.jpg?size=200x200&quality=96&crop=420,1,1079,1079&ava=1"
          />
          <Typography variant="span">Ram</Typography>
        </UserBox>
      </StyledToolbar>
      <Menu
        id="demo-positioned-menu"
        aria-labelledby="demo-positioned-button"
        open={open}
        onClose={(e) => setOpen(false)}
        anchorOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
        transformOrigin={{
          vertical: "top",
          horizontal: "right",
        }}
      >
        <MenuItem >Profile</MenuItem>
        <MenuItem >My account</MenuItem>
        <MenuItem >Logout</MenuItem>
      </Menu>
    </AppBar>
  );
}

export default Navbar;

import React, { useState } from "react";
import { Box, createTheme, Stack, ThemeProvider } from "@mui/material";
import Add from "./Components/Modals/Add";
import Feed from "./Pages/HomePage/Feed";
import Navbar from "./Components/Navbar/Navbar";
import Rightbar from "./Components/RightbarComponents/Rightbar";
import Sidebar from "./Components/Sidebar/Sidebar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Pages from "./Pages/FeedPages/Pages";
import Groups from "./Pages/Groups/Groups";
import Video from "./Pages/Video/Video";
import Friends from "./Pages/Friends/Friends";

// import theme from "./Theme";

function App() {
  const [mode, setMode] = useState("light");
  const [statesOfPages, setStatesOfPages] = useState({
    feed: true,
    friends: false,
    video: false,
  });
  const darkTheme = createTheme({
    palette: {
      mode: mode,
    },
  });
  return (
    <BrowserRouter>
      <ThemeProvider theme={darkTheme}>
        <Box bgcolor={"background.default"} color={"text.primary"}>
          <Navbar />
          <Stack direction="row" spacing={2} justifyContent="space-between">
            <Sidebar
              mode={mode}
              setMode={setMode}
              {...{ statesOfPages, setStatesOfPages }}
            />
            <Routes>
              <Route path="*" element={<Feed />} />
              <Route path="/pages" element={<Pages />} />
              <Route path="/groups" element={<Groups />} />
              <Route path="/video" element={<Video />} />
              <Route path="/friends" element={<Friends />} />
              <Route path="/2" element={<Feed />} />
            </Routes>
            <Rightbar />
          </Stack>
          <Add />
        </Box>
      </ThemeProvider>
    </BrowserRouter>
  );
}

export default App;

// {{
//   statesOfPages.feed && <Feed />;
// }
// {
//   statesOfPages.friends && <Friends />;
// }
// {
//   statesOfPages.video && <Video />;
// }}

import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Marquee from "react-fast-marquee";
import Typography from "@mui/material/Typography";
import Box from "@mui/material/Box";
import MusicNoteIcon from "@mui/icons-material/MusicNote";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return (
    <Box
      component="div"
      sx={{
        p: 2,
        borderTopRightRadius: "70px",
        borderTopLeftRadius: "70px",
        backgroundColor: "#FFD07F",
        borderBottom: "1px solid black",
      }}
    >
      <Marquee
        speed="100"
        gradient="true"
        gradientColor="rgba(255, 255, 255, 0.)"
      >
        <Typography sx={{ fontSize: "0.75rem" }}>
          <MusicNoteIcon fontSize="small" />
          {currentTrackName || "Click & Play"}
        </Typography>
      </Marquee>
    </Box>
  );
}

export default Header;

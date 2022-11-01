import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import PlayCircleFilledIcon from "@mui/icons-material/PlayCircleFilled";
import SkipPreviousIcon from "@mui/icons-material/SkipPrevious";
import SkipNextIcon from "@mui/icons-material/SkipNext";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

function Controller() {
  const {
    isPlaying,
    currentTrackIndex,
    playTrack,
    playPreviousTrack,
    playNextTrack,
  } = useMusicPlayer();

  const handlePlayPrevTrack = () => {
    playPreviousTrack();
  };

  const handleTogglePlay = () => {
    if (currentTrackIndex) {
      playTrack(currentTrackIndex);
    } else {
      playTrack(0);
    }
  };

  const handlePlayNextTrack = () => {
    playNextTrack();
  };

  return (
    <Box
      component="div"
      sx={{
        display: "flex",
        justifyContent: "center",
        p: 2,
        borderTop: "1px solid black",
        borderBottomRightRadius: "70px",
        borderBottomLeftRadius: "70px",
        backgroundColor: "#FFD07F",
      }}
    >
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="play previous track"
          onClick={handlePlayPrevTrack}
        >
          <SkipPreviousIcon sx={{ fontSize: 40 }} />
        </IconButton>
        <IconButton aria-label="play track" onClick={handleTogglePlay}>
          {isPlaying ? (
            <PauseCircleIcon sx={{ fontSize: 40 }} />
          ) : (
            <PlayCircleFilledIcon sx={{ fontSize: 40 }} />
          )}
        </IconButton>
        <IconButton aria-label="play next track" onClick={handlePlayNextTrack}>
          <SkipNextIcon sx={{ fontSize: 40 }} />
        </IconButton>
      </Stack>
    </Box>
  );
}

export default Controller;

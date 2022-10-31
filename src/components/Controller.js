import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import IconButton from "@mui/material/IconButton";
import Stack from "@mui/material/Stack";
import Grid from "@mui/material/Grid";
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
    <Grid>
      <Stack direction="row" spacing={1}>
        <IconButton
          aria-label="play previous track"
          onClick={handlePlayPrevTrack}
        >
          <SkipPreviousIcon />
        </IconButton>
        <IconButton aria-label="play track" onClick={handleTogglePlay}>
          {isPlaying ? <PauseCircleIcon /> : <PlayCircleFilledIcon />}
        </IconButton>
        <IconButton aria-label="play next track" onClick={handlePlayNextTrack}>
          <SkipNextIcon />
        </IconButton>
      </Stack>
    </Grid>
  );
}

export default Controller;

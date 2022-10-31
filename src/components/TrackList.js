import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import HeadsetIcon from "@mui/icons-material/Headset";
import PauseCircleIcon from "@mui/icons-material/PauseCircle";

function TrackList() {
  const { isPlaying, trackList, playTrack, currentTrackIndex } =
    useMusicPlayer();

  const handlePlayTrack = (index) => {
    playTrack(index);
  };

  return (
    <>
      <List
        sx={{
          width: "100%",
          bgcolor: "orange",
        }}
      >
        {trackList.map((track, index) => (
          <ListItemButton key={index} onClick={() => handlePlayTrack(index)}>
            <ListItemIcon>
              {currentTrackIndex === index ? (
                isPlaying ? (
                  <HeadsetIcon />
                ) : (
                  <PauseCircleIcon />
                )
              ) : (
                <PauseCircleIcon />
              )}
            </ListItemIcon>
            <ListItemText primary={track.name} />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default TrackList;

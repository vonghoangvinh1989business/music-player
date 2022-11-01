import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import List from "@mui/material/List";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemIcon from "@mui/material/ListItemIcon";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
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
          backgroundColor: "#FFD07F",
          border: "1px solid #FFD07F",
          height: "250px",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
        }}
      >
        {trackList.map((track, index) => (
          <ListItemButton
            key={index}
            onClick={() => handlePlayTrack(index)}
            sx={{
              backgroundColor: "hsla(0,0%,100%,.5)",
              borderRadius: "5px",
              m: 2,
              p: 1,
            }}
          >
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
            <ListItemText
              primary={
                <Typography style={{ fontSize: "0.7rem" }}>
                  {track.name}
                </Typography>
              }
            />
          </ListItemButton>
        ))}
      </List>
    </>
  );
}

export default TrackList;

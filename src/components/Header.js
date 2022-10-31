import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";

function Header() {
  const { currentTrackName } = useMusicPlayer();
  return <div>{currentTrackName || "Click on track to play"}</div>;
}

export default Header;

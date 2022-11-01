import React, { useState, createContext } from "react";
import Track1 from "../audio/track1.mp3";
import Track2 from "../audio/track2.mp3";
import Track3 from "../audio/track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "Bên Trên Tầng Lầu - Tăng Duy Tân",
      file: Track1,
    },
    {
      name: "Feel Good - chill more",
      file: Track2,
    },
    {
      name: "Spirit Blossom - RomanBelov",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

function MusicPlayerProvider({ children }) {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
}

export { MusicPlayerContext, MusicPlayerProvider };

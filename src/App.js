import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Marquee from "react-fast-marquee";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";

function App() {
  return (
    <MusicPlayerProvider>
      <Marquee>
        <Header />
      </Marquee>
      <TrackList />
      <Controller />
    </MusicPlayerProvider>
  );
}

export default App;

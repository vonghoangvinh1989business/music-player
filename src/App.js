import React from "react";
import { MusicPlayerProvider } from "./contexts/MusicPlayerContext";
import Container from "@mui/material/Container";
import Header from "./components/Header";
import TrackList from "./components/TrackList";
import Controller from "./components/Controller";
import "./App.css";

function App() {
  return (
    <Container className="container">
      <MusicPlayerProvider>
        <Header />
        <TrackList />
        <Controller />
      </MusicPlayerProvider>
    </Container>
  );
}

export default App;

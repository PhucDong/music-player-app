import { useState, createContext } from "react";
import Track1 from "./track1.mp3";
import Track2 from "./track2.mp3";
import Track3 from "./track3.mp3";

const MusicPlayerContext = createContext();

const defaultValues = {
  audioPlayer: new Audio(),
  tracks: [
    {
      name: "In the beginning",
      artist: "Daddy's Music",
      file: Track1,
    },
    {
      name: "All my love",
      artist: "Monument Music",
      file: Track2,
    },
    {
      name: "All my love",
      artist: "NBeatMusic",
      file: Track3,
    },
  ],
  currentTrackIndex: null,
  isPlaying: false,
};

const MusicPlayerProvider = ({ children }) => {
  const [state, setState] = useState(defaultValues);
  return (
    <MusicPlayerContext.Provider value={{ state, setState }}>
      {children}
    </MusicPlayerContext.Provider>
  );
};

export { MusicPlayerContext, MusicPlayerProvider };

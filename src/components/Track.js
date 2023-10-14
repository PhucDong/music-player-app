import React, { useContext } from "react";
import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import style from "./TrackList.module.css";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import { IconContext } from "react-icons";

export default function Track({ track, index, playTrack }) {
  const { state, setState } = useContext(MusicPlayerContext);

  return (
    <div className={style.track}>
      <IconContext.Provider value={{ className: style.iconStyles }}>
        {!state.isPlaying ||
        (state.isPlaying && state.currentTrackIndex !== index) ? (
          <AiFillPlayCircle
            onClick={() => {
              playTrack(index);
            }}
          />
        ) : (
          state.currentTrackIndex === index && (
            <AiFillPauseCircle
              onClick={() => {
                playTrack(index);
              }}
            />
          )
        )}
      </IconContext.Provider>

      <div className={style.trackInfo}>
        <h3>{track.name}</h3>
        <p>{track.artist}</p>
      </div>
    </div>
  );
}

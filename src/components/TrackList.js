import React from "react";
import useMusicPlayer from "../hooks/useMusicPlayer";
import Track from "./Track";
import style from "./TrackList.module.css";

export default function TrackList() {
  const { trackList, playTrack } = useMusicPlayer();

  return (
    <div className={style.trackListContainer}>
      <h2>Popular Songs</h2>
      
      <div className={style.trackList}>
        {trackList.map((track, index) => (
          <Track
            key={index}
            track={track}
            index={index}
            playTrack={playTrack}
          />
        ))}
      </div>
    </div>
  );
}

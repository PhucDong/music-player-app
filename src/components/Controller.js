import { AiFillPlayCircle, AiFillPauseCircle } from "react-icons/ai";
import { FaStepForward, FaStepBackward } from "react-icons/fa";
import controllerStyles from "./Controller.module.css";
import { useContext } from "react";
import { MusicPlayerContext } from "../contexts/MusicPlayerContext";
import useMusicPlayer from "../hooks/useMusicPlayer";

export default function Controller() {
  const { state, setState } = useContext(MusicPlayerContext);
  const {
    playTrack,
    playPreviousTrack,
    playNextTrack,
    currentTrackName,
    currentTrackArtist,
  } = useMusicPlayer();

  return (
    <div className={controllerStyles.controllerContainer}>
      <div className={controllerStyles.controllerTrackInfo}>
        <h3>{currentTrackName}</h3>
        <h4>{currentTrackArtist}</h4>
      </div>
      <div className={controllerStyles.controllerButtons}>
        <FaStepBackward
          className={controllerStyles.controllerStepIconStyles}
          onClick={() => playPreviousTrack()}
        />
        {!state.isPlaying ? (
          <AiFillPlayCircle
            className={controllerStyles.controllerPlayIconStyles}
            onClick={() =>
              state.currentTrackIndex === null
                ? null
                : playTrack(state.currentTrackIndex)
            }
          />
        ) : (
          <AiFillPauseCircle
            className={controllerStyles.controllerPlayIconStyles}
            onClick={() => playTrack(state.currentTrackIndex)}
          />
        )}
        <FaStepForward
          className={controllerStyles.controllerStepIconStyles}
          onClick={() => playNextTrack()}
        />
      </div>
    </div>
  );
}

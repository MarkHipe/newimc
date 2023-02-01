
import React, {
  useState,
  useCallback,
  forwardRef,
  useImperativeHandle,
  useEffect,
} from "react";
// import "./MinitteVideoPlayerCss.css";
import * as Icon from "react-feather";
import { IconButton } from "@material-ui/core";
import styled from "styled-components";

const PLAY_STATES = {
  ERROR: "ERROR",
  ENDED: "ENDED",
  PAUSED: "PAUSED",
  PLAYING: "PLAYING",
  STOPPED: "STOPPED",
  SEEKING: "SEEKING",
  READY: "READY",
  LOADING: "LOADING",
};
const MinitteVideoPlayer = React.forwardRef(
  ({ src, shouldLoop = false, ...props }, ref) => {
    const [playState, setPlayState] = useState(PLAY_STATES.LOADING);
    const [muted, setMuted] = useState(false);
    const videoRef = React.useRef(null);

    // video event listeners
    useEffect(() => {
      //video ready/can play
      videoRef.current.oncanplay = function () {
        setPlayState(PLAY_STATES.READY);
      };

      //video on load start
      videoRef.current.onloadstart = function () {
        setPlayState(PLAY_STATES.PLAYING);
      };

      //video paused
      videoRef.current.onpause = function () {
        setPlayState(PLAY_STATES.PAUSED);
      };

      // video played
      videoRef.current.onplay = function () {
        setPlayState(PLAY_STATES.PLAYING);
      };

      // video ended
      videoRef.current.onended = function () {
        setPlayState(PLAY_STATES.ENDED);
      };

      // video error
      videoRef.current.onerror = function () {
        setPlayState(PLAY_STATES.ERROR);
      };
    }, []);

    //video handlers
    function videoHandlers(type) {
      // console.log(type);
      if (type === "play") {
        videoRef.current.play();
        //setPlayState(PLAY_STATES.PLAYING);
      } else if (type === "pause") {
        videoRef.current.pause();
      } else if (type === "play" && playState === PLAY_STATES.ENDED) {
        videoRef.current.load();
        videoRef.current.play();
      }
    }

    return (
      <Con style={{ position: "relative" }}>
        <div className="m-video-wrapper">
          <video controls src={props.vid} muted={muted} ref={videoRef} poster={props.thumbnail} autoPlay={true}/>
        </div>
        {/* play pause button */}

        {playState === PLAY_STATES.LOADING ? (
          <IconButton className="playerBtn">
            <Icon.Loader />
          </IconButton>
        ) : playState === PLAY_STATES.PLAYING ? (
          <IconButton
            className="playerBtn"
            onClick={() => videoHandlers("pause")}
          >
            <Icon.PauseCircle />
          </IconButton>
        ) : playState === PLAY_STATES.PAUSED ? (
          <IconButton
            className="playerBtn"
            onClick={() => videoHandlers("play")}
          >
            <Icon.PlayCircle />
          </IconButton>
        ) : playState === PLAY_STATES.ENDED ? (
          <IconButton
            className="playerBtn"
            onClick={() => videoHandlers("play")}
          >
            <Icon.Repeat />
          </IconButton>
        ) : playState === PLAY_STATES.READY ? (
          <IconButton
            className="playerBtn"
            onClick={() => videoHandlers("play")}
          >
            <Icon.PlayCircle />
          </IconButton>
        ) : null}

        {/* play pause button */}
      </Con>
    );
  }
);
const Con = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  /* top: 0;
  width: 100vw;
  height: 100vh; */
  & video {
    width: 600px;
    @media (max-width: 768px){
      width: 90vw;
    }
    /* margin: auto; */
    /* position: fixed; */
  }
`;

export default React.memo(MinitteVideoPlayer);

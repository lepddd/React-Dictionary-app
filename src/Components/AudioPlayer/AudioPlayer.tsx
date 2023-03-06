import { useRef, useState } from "react";
import { Icon } from "@iconify/react";
import styled from "styled-components";

const AudioBtn = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 56px;
  height: 56px;
  border-radius: 50%;
  box-sizing: border-box;
  background-color: #d846ef4c;
  border: none;
  cursor: pointer;
  transition: 0.2s background ease-in-out;
`;

export const AudioPlayer = ({ src }: { src: string }) => {
  const playerRef = useRef<HTMLAudioElement>(null);

  const [isPlaying, setIsPlaying] = useState(false);

  const playAudio = () => {
    playerRef.current?.play();
  };

  return (
    <div>
      {isPlaying ? (
        <AudioBtn disabled={isPlaying}>
          <Icon
            icon="material-symbols:pause"
            color="#d946ef"
            width="32"
            height="32"
          />
        </AudioBtn>
      ) : (
        <AudioBtn onClick={() => playAudio()} disabled={isPlaying}>
          <Icon
            icon="material-symbols:play-arrow-rounded"
            color="#d946ef"
            width="32"
            height="32"
          />
        </AudioBtn>
      )}
      <audio
        ref={playerRef}
        onPlay={() => setIsPlaying(true)}
        onEnded={() => setIsPlaying(false)}
        src={src}
      />
    </div>
  );
};

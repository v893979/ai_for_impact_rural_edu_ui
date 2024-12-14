import React from 'react';

const AudioPlayer = ({ audioSrc }) => {
  return (
    <div>
      <audio controls>
        <source src={audioSrc} type="audio/wav" />
        Your browser does not support the audio element.
      </audio>
      <a href={audioSrc} download>Download Audio</a>
    </div>
  );
};

export default AudioPlayer;
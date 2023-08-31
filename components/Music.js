import React, { useState, useRef } from "react";
import AudioPlayer from "react-h5-audio-player";
import "react-h5-audio-player/lib/styles.css";

function MusicPlayer() {
  const [playMusic, setPlayMusic] = useState(false);
  const [showPrompt, setShowPrompt] = useState(true);
  const audioRef = useRef(null); // Create a reference for the audio player

  const handlePlayPause = () => {
    if (audioRef.current) {
      if (playMusic) {
        audioRef.current.audio.current.pause();
      } else {
        audioRef.current.audio.current.play();
      }
    }
    setPlayMusic(!playMusic);
  };

  return (
    <>
      {showPrompt && (
        <div
          className="fixed inset-0 flex items-center justify-center"
          style={{
            backgroundColor: "rgba(0, 0, 0, 0.7)",
            backdropFilter: "blur(5px)",
            zIndex: 5,
          }}
        >
          <div className="relative bg-4b3792 p-8 rounded-lg shadow-lg text-center z-10">
            <button
              onClick={() => setShowPrompt(false)}
              className="absolute top-2 right-2 w-8 h-8 bg-red-500 flex items-center justify-center rounded-full hover:bg-red-600 hover:shadow-lg hover:scale-105 transform transition-transform transition-shadow duration-300"
            >
              X
            </button>
            <h2 className="text-3b2d71 text-4xl mb-4">Welcome</h2>
            <p className="text-white mb-4">
              Do you want to listen to some relaxing 🎵 while you are here?
            </p>
            <button
              onClick={() => {
                handlePlayPause();
                setShowPrompt(false);
              }}
              className="mr-4 px-4 py-2 bg-3b2d71 text-white rounded hover:bg-3b2d91 hover:shadow-lg hover:scale-105 transform transition-transform transition-shadow duration-300"
            >
              Yes
            </button>
            <button
              onClick={() => setShowPrompt(false)}
              className="px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600 hover:shadow-lg hover:scale-105 transform transition-transform transition-shadow duration-300"
            >
              No
            </button>
          </div>
        </div>
      )}

      <AudioPlayer
        ref={audioRef} // Attach the reference to the AudioPlayer
        src="/relaxing.mp3"
        style={{ display: "none", zIndex: 10 }} // This is to hide the player itself
      />

      {!showPrompt && (
        <button
          onClick={handlePlayPause}
          className="fixed bottom-4 left-4 px-8 py-4 text-xl bg-3b2d71 text-white rounded z-10 items-center justify-center"
          style={{ lineHeight: "1" }}
        >
          {playMusic ? "❚❚" : "▶️"}
        </button>
      )}
    </>
  );
}

export default MusicPlayer;

import React, { useState, useRef } from 'react';

const VideoPlayer = () => {
  const [showPlayButton, setShowPlayButton] = useState(false);
  const videoRef = useRef(null);

  const handlePlay = () => {
    videoRef.current.play();
    setShowPlayButton(false);
  };

  return (
    <div style={{ position: 'relative' }}>
      <video
        ref={videoRef}
        autoPlay
        muted
        loop
        onPlay={() => setShowPlayButton(false)}
        onError={() => setShowPlayButton(true)}
        width="100%"
        height="500"
        className='rounded-2xl'
      >
        <source src="https://cdn.jsdelivr.net/gh/droitlab/Droit-UI/Droit_UI_Promo_Video.mp4" type="video/mp4" />
      </video>
      
      {showPlayButton && (
        <button 
          onClick={handlePlay}
          style={{ position: 'absolute', top: '50%', left: '50%', transform: 'translate(-50%, -50%)' }}
        >
          Play Video
        </button>
      )}
    </div>
  );
};

export default VideoPlayer;
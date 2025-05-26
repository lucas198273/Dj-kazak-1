import React, { useState } from 'react';

interface LazySoundCloudPlayerProps {
  trackUrl: string;
}

const LazySoundCloudPlayer: React.FC<LazySoundCloudPlayerProps> = ({ trackUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=false`;

  return (
    <div style={{ minHeight: '166px', position: 'relative' }}>
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          style={{
            padding: '10px',
            background: '#ff5500',
            color: 'white',
            border: 'none',
            borderRadius: '5px',
            cursor: 'pointer',
          }}
        >
          Carregar Player
        </button>
      ) : (
        <div style={{ position: 'relative', width: '100%', height: '166px' }}>
          <iframe
            loading="lazy"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={iframeSrc}
          ></iframe>
          {/* Sobreposição para ocultar o botão "Ouvir no SoundCloud" */}
          <div
            style={{
              position: 'absolute',
              bottom: 0,
              left: 0,
              width: '100%',
              height: '30px',
              background: 'white',
            }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LazySoundCloudPlayer;

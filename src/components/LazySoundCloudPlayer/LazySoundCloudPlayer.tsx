import React, { useState } from 'react';

interface LazySoundCloudPlayerProps {
  trackUrl: string;
}

const LazySoundCloudPlayer: React.FC<LazySoundCloudPlayerProps> = ({ trackUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  // Montamos aqui a URL de incorporação do SoundCloud, sem quebras de linha
  const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=true&visual=false`;

  return (
    <div style={{ minHeight: '300px' }}>
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
        <iframe
          loading="lazy"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={iframeSrc}
        ></iframe>
      )}
    </div>
  );
};

export default LazySoundCloudPlayer;

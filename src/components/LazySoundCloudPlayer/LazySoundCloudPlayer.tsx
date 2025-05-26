import React, { useState } from 'react';

interface LazySoundCloudPlayerProps {
  trackUrl: string;
}

const LazySoundCloudPlayer: React.FC<LazySoundCloudPlayerProps> = ({ trackUrl }) => {
  const [showPlayer, setShowPlayer] = useState(false);

  const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

  return (
    <div className="relative" style={{ minHeight: '166px' }}>
      {!showPlayer ? (
        <button
          onClick={() => setShowPlayer(true)}
          className="bg-orange-500 text-white py-2 px-4 rounded"
        >
          Carregar Player
        </button>
      ) : (
        <div className="relative w-full h-[166px]">
          <iframe
            title="SoundCloud Player"
            loading="lazy"
            width="100%"
            height="166"
            scrolling="no"
            frameBorder="no"
            allow="autoplay"
            src={iframeSrc}
          ></iframe>

          {/* Camada por cima para desativar cliques no botão "Reproduzir no SoundCloud" */}
          <div
            className="absolute bottom-[45px] left-0 w-full h-[35px] bg-[rgba(0,0,0,0.1)] opacity-50 z-10 pointer-events-auto"
            style={{ borderRadius: '4px' }}
          ></div>
        </div>
      )}
    </div>
  );
};

export default LazySoundCloudPlayer;

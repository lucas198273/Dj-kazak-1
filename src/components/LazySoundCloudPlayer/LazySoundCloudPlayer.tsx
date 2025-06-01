import React from 'react';

interface LazySoundCloudPlayerProps {
  trackUrl: string;
}

const LazySoundCloudPlayer: React.FC<LazySoundCloudPlayerProps> = ({ trackUrl }) => {
  const iframeSrc = `https://w.soundcloud.com/player/?url=${encodeURIComponent(
    trackUrl
  )}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=false&show_reposts=false&show_teaser=false&visual=false`;

  return (
    <div className="relative" style={{ minHeight: '166px' }}>
      {/* Player carregado imediatamente */}
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

        {/* 
          Camada por cima (overlay) para desativar cliques no botão "Reproduzir no SoundCloud" 
          – exatamente igual à sua versão anterior, apenas sem o botão “Carregar Player”. 
        */}
        <div
          className="absolute bottom-[45px] left-0 w-full h-[35px] bg-[rgba(0,0,0,0.1)] opacity-50 z-10 pointer-events-auto"
          style={{ borderRadius: '4px' }}
        ></div>
      </div>
    </div>
  );
};

export default LazySoundCloudPlayer;

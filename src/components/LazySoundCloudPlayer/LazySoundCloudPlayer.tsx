import React, { useEffect, useRef, useState } from 'react';

interface LazySoundCloudPlayerProps {
  trackUrl: string;
}

const LazySoundCloudPlayer: React.FC<LazySoundCloudPlayerProps> = ({ trackUrl }) => {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [showPlayer, setShowPlayer] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect();
        }
      },
      { threshold: 0.1 }
    );

    if (containerRef.current) {
      observer.observe(containerRef.current);
    }

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div ref={containerRef} style={{ minHeight: '300px' }}>
      {isVisible && !showPlayer ? (
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
      ) : null}

      {isVisible && showPlayer && (
        <iframe
          loading="lazy"
          width="100%"
          height="300"
          scrolling="no"
          frameBorder="no"
          allow="autoplay"
          src={`https://w.soundcloud.com/player/?url=${encodeURIComponent(trackUrl)}&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true`}
        ></iframe>
      )}
    </div>
  );
};

export default LazySoundCloudPlayer;

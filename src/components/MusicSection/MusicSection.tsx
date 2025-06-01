// src/components/MusicSection/MusicSection.tsx
import React from 'react';

const MusicSection: React.FC = () => {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Ouça os sons do DJ KAZAK</h2>

        {/* SoundCloud Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Player 1 */}
          <div className="relative w-full h-[166px]">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1904481743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            {/* Camada de bloqueio para impedir cliques (pointer-events-auto) */}
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-transparent pointer-events-auto" />
          </div>

          {/* Player 2 */}
          <div className="relative w-full h-[166px]">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1897798665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-transparent pointer-events-auto" />
          </div>

          {/* Player 3 */}
          <div className="relative w-full h-[166px]">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1825949580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-transparent pointer-events-auto" />
          </div>

          {/* Player 4 */}
          <div className="relative w-full h-[166px]">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1823157531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-transparent pointer-events-auto" />
          </div>

          {/* Player 5 */}
          <div className="relative w-full h-[166px]">
            <iframe
              width="100%"
              height="166"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1950042995&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
            ></iframe>
            <div className="absolute top-0 left-0 w-full h-full z-10 bg-transparent pointer-events-auto" />
          </div>
        </div>

        {/* Botão para o perfil do SoundCloud */}
        <div className="mt-8">
          <a
            href="https://soundcloud.com/lucas-bernardo-375955261"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block bg-orange-500 hover:bg-orange-600 text-white font-semibold py-3 px-6 rounded transition duration-300"
          >
            Ver Perfil no SoundCloud
          </a>
        </div>
      </div>
    </section>
  );
};

export default MusicSection;

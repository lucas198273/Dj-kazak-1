

export default function MusicSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Ouça os sons do DJ KAZAK</h2>

        {/* SoundCloud Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Faixa 1 */}
          <div className="w-full">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/discoversoundsmusic/best-acapellas-2017-free-download&visual=true"
            ></iframe>
          </div>

          {/* Faixa 2 */}
          <div className="w-full">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/discoversoundsmusic/chords-of-kshmr-vol-1-free-download&visual=true"
            ></iframe>
          </div>

          {/* Faixa 3 */}
          <div className="w-full">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/flstudio-projects/fl-studio-project-progressive-house-dubvision-style-flp-samples&visual=true"
            ></iframe>
          </div>

          {/* Faixa 4 */}
          <div className="w-full">
            <iframe
              width="100%"
              height="300"
              scrolling="no"
              frameBorder="no"
              allow="autoplay"
              src="https://w.soundcloud.com/player/?url=https%3A//soundcloud.com/flstudio-projects/progressive-house-flp-1-fl-studio-project-free-downoad&visual=true"
            ></iframe>
          </div>
        </div>

        {/* Botão para o perfil do SoundCloud */}
        <div className="mt-8">
          <a
            href="https://soundcloud.com/dj-veli-745299224"
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
}



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
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1823157531&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1825949580&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1897798665&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
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
  src="https://w.soundcloud.com/player/?url=https%3A//api.soundcloud.com/tracks/1904481743&color=%23ff5500&auto_play=false&hide_related=false&show_comments=true&show_user=true&show_reposts=false&show_teaser=true&visual=true"
></iframe>

          </div>
        </div>

        {/* Botão para o perfil do SoundCloud */}
        <div className="mt-8">
          <a
            href="https://soundcloud.com/lucas-bernardo-375955261?ref=clipboard&p=i&c=1&si=CCD76F596D854904A41B3FBF744D5081&utm_source=clipboard&utm_medium=text&utm_campaign=social_sharinghttps://soundcloud.com/dj-veli-745299224"
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

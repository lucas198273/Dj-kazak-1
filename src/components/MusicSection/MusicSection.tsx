
import LazySoundCloudPlayer from '../LazySoundCloudPlayer/LazySoundCloudPlayer';

export default function MusicSection() {
  return (
    <section className="w-full bg-black text-white py-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h2 className="text-4xl font-bold mb-10">Ouça os sons do DJ KAZAK</h2>

        {/* SoundCloud Players */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <LazySoundCloudPlayer trackUrl="https://api.soundcloud.com/tracks/1904481743" />
          <LazySoundCloudPlayer trackUrl="https://api.soundcloud.com/tracks/1897798665" />
          <LazySoundCloudPlayer trackUrl="https://api.soundcloud.com/tracks/1825949580" />
          <LazySoundCloudPlayer trackUrl="https://api.soundcloud.com/tracks/1823157531" />
          <LazySoundCloudPlayer trackUrl="https://api.soundcloud.com/tracks/1950042995" />
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
}

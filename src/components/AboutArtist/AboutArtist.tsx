// src/components/AboutArtist.tsx

export default function AboutArtist() {
  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row gap-10">

        {/* Mini Galeria de Imagens */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {['img1.jpeg', 'img2.jpeg', 'img3.jpeg', 'img4.jpeg'].map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg">
              <img
                src={`/${img}`}
                alt={`Galeria ${index + 1}`}
                 loading="lazy"
                className="w-full h-48 object-cover"
              />
            </div>
          ))}
        </div>

        {/* Texto Sobre o Artista */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-3xl font-bold mb-4">Uma Jornada Internacional</h2>
          <p className="mb-4 text-gray-300">
            Nosso artista, originário do Brasil, tem conquistado a cena europeia de música eletrônica com suas performances envolventes nas vertentes de techno e house. Sua trajetória inclui apresentações em diversos países, levando sua energia única para pistas de dança ao redor do continente.
          </p>
          <ul className="list-disc list-inside text-gray-300 space-y-1">
            <li>Brasil 🇧🇷</li>
            <li>Portugal 🇵🇹</li>
            <li>Espanha 🇪🇸</li>
            <li>França 🇫🇷</li>
            <li>Alemanha 🇩🇪</li>
            <li>Itália 🇮🇹</li>
            <li>Holanda 🇳🇱</li>
          </ul>
        </div>

      </div>
    </section>
  );
}

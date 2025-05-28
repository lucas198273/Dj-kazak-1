export default function AboutArtist() {
  const images = ['img1.jpeg', 'img2.jpeg']; // Mantemos só 2 imagens

  return (
    <section className="w-full py-16 bg-black text-white">
      <div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row gap-10">

        {/* Mini Galeria (reduzida) */}
        <div className="w-full md:w-1/2 grid grid-cols-2 gap-4">
          {images.map((img, index) => (
            <div key={index} className="overflow-hidden rounded-lg shadow-md">
              <img
                src={`/${img}`}
                alt={`Galeria ${index + 1}`}
                loading="lazy"
                className="w-full h-44 object-cover transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>

        {/* Texto Sobre o Artista */}
        <div className="w-full md:w-1/2 flex flex-col justify-center">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">Uma Jornada Internacional</h2>
          <p className="mb-4 text-gray-300 leading-relaxed">
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

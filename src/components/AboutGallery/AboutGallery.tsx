export default function AboutGallery() {
  const images = [
    { src: '/assets/img1.webp', alt: 'DJ KAZAK em apresentação no Deputamadre' },
    { src: '/assets/img2.webp', alt: 'DJ KAZAK na festa Mary Jane' },
    { src: '/assets/img3.webp', alt: 'DJ KAZAK mixando em Área 51' },
    { src: '/assets/img4.webp', alt: 'DJ KAZAK mixando em Área 51' }
  ];

  return (
    <section className="bg-gray-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-5xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 text-center">
          Galeria de Fotos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="rounded-lg overflow-hidden shadow-md">
              <img
                src={image.src}
                alt={image.alt}
                loading="lazy"
                className="w-full h-auto object-cover aspect-[4/3] transition-transform duration-300 hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

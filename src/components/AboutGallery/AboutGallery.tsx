export default function AboutGallery() {
  const images = [
    { src:   '/assets/img3.jpeg', alt: 'DJ KAZAK em apresentação no Deputamadre' },
    { src:     '/assets/img2.jpeg', alt: 'DJ KAZAK na festa Mary Jane' },
    { src:     '/assets/img1.jpeg', alt: 'DJ KAZAK mixando em Área 51' },
    { src:     '/assets/img4.jpeg', alt: 'DJ KAZAK no coletivo Techneira' },
    // Adicione mais imagens conforme necessário
  ];

  return (
    <section className="bg-gray-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 text-center">
          Galeria de Fotos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {images.map((image, index) => (
            <div key={index} className="relative rounded-lg overflow-hidden group">
              <img
                src={image.src}
                srcSet={`
                  ${image.src.replace('.webp', '-sm.webp')} 480w,
                  ${image.src.replace('.webp', '-md.webp')} 800w,
                  ${image.src} 1200w
                `}
                sizes="(max-width: 640px) 480px, (max-width: 1024px) 800px, 1200px"
                alt={image.alt}
                width={400}
                height={300}
                loading="lazy"
                className="w-full aspect-[4/3] object-cover transition-transform duration-300 group-hover:scale-[1.02]"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
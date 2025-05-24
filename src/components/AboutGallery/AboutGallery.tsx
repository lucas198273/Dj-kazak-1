

export default function AboutGallery() {
  const images = [
    '/assets/img3.jpeg',
    '/assets/img2.jpeg',
    '/assets/img1.jpeg',
    '/assets/img4.jpeg',
    // Adicione mais caminhos de imagens conforme necessário
  ];

  return (
    <section className="bg-gray-800 text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400 text-center">
          Galeria de Fotos
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {images.map((src, index) => (
            <img
              key={index}
              src={src}
              alt={`DJ KAZAK ${index + 1}`}
              className="w-full h-64 object-cover rounded-lg shadow-md"
            />
          ))}
        </div>
      </div>
    </section>
  );
}

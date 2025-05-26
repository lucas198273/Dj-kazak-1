
export default function AboutVideos() {
  const youtubeLinks = [

    "https://youtu.be/6iTwC2B2sfk?si=0u0M1ts3gRgp-xlE",

    "https://www.youtube.com/watch?v=lsiBL3CZjVU", 
    "https://www.youtube.com/watch?v=6iTwC2B2sfk", 
    "https://www.youtube.com/watch?v=9RCRgLeXhgw",
    // Adicione mais links aqui
  ];

  const extractYoutubeId = (url: string): string | null => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?v=|embed\/|v\/|shorts\/))([\w-]{11})/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <section className="bg-gray-900 text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-2xl md:text-3xl font-bold mb-8 text-blue-400 text-center">
          Vídeos do DJ Kazak no YouTube
        </h3>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {youtubeLinks.map((link, index) => {
            const videoId = extractYoutubeId(link);
            if (!videoId) return null;

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-black"
              >
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}`}
                    title={`Vídeo ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
                    loading="lazy"
                  />
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}

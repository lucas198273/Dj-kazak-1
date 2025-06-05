import { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

export default function AboutVideos() {
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  const youtubeLinks = [
    "https://youtu.be/6iTwC2B2sfk?si=0u0M1ts3gRgp-xlE",
    "https://www.youtube.com/watch?v=lsiBL3CZjVU",
    "https://www.youtube.com/watch?v=6iTwC2B2sfk",
    "https://www.youtube.com/watch?v=9RCRgLeXhgw",
    // Adicione mais links aqui
  ];

  const extractYoutubeId = (url: string): string | null => {
    const regex = /(?:youtu\.be\/|youtube\.com\/(?:watch\?(?:.*&)?v=|embed\/|v\/|shorts\/))([\w-]{11})(?:[?&#].*)?/;
    const match = url.match(regex);
    return match ? match[1] : null;
  };

  return (
    <section
      className="bg-gradient-to-b from-blue-500 to-black text-white pt-24 pb-16 px-6"
      data-aos="fade-up"
    >
      <div className="max-w-7xl mx-auto">
        <h3
          className="text-2xl md:text-3xl font-bold mb-8 text-center"
          data-aos="zoom-in"
        >
          Vídeos do DJ Kazak no YouTube
        </h3>

        <div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
          data-aos="fade-up"
          data-aos-delay="200"
        >
          {youtubeLinks.map((link, index) => {
            const videoId = extractYoutubeId(link);
            if (!videoId) {
              console.warn(`URL inválida ou vídeo não encontrado: ${link}`);
              return null;
            }

            return (
              <div
                key={index}
                className="rounded-xl overflow-hidden shadow-lg hover:scale-[1.02] transition-transform duration-300 bg-black"
                data-aos="zoom-in-up"
                data-aos-delay={index * 100}
              >
                <div className="relative w-full h-0 pb-[56.25%]">
                  <iframe
                    src={`https://www.youtube.com/embed/${videoId}?rel=0&modestbranding=1`}
                    title={`Vídeo ${index + 1}`}
                    className="absolute top-0 left-0 w-full h-full"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    allowFullScreen
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

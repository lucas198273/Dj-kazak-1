import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-black via-gray-900 to-blue-900 text-white py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto principal */}
        <div className="text-center md:text-left max-w-xl">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sinta o Ritmo <br /> com <span className="text-rose-500">DJ KAZAK</span>
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            Experimente uma jornada musical única. Eventos, festas e sets exclusivos para elevar sua vibe!
          </p>
          <Link
            to="#Contato"
            className="inline-block px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500"
          >
            Agende seu Evento
          </Link>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/img1.jpeg"
            alt="DJ tocando"
             loading="lazy"
            className="w-full max-w-sm mx-auto md:mx-0 rounded-lg"
          />
        </div>
      </div>
    </section>
  );
}
export default Hero
import { Link } from 'react-router-dom';

function Hero() {
  return (
    <section className="bg-gradient-to-b from-white to-black text-black py-20 px-6 md:px-12">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
        
        {/* Texto principal */}
        <div className="w-full md:w-1/2 flex flex-col items-center md:items-start text-center md:text-left">
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Sinta o Ritmo <br />
            com <span className="text-rose-600">DJ KAZAK</span>
          </h1>
          <p className="text-lg text-gray-700 mb-6">
            Experimente uma jornada musical única. Eventos, festas e sets exclusivos para elevar sua vibe!
          </p>
          <Link
            to="#Contato"
            className="inline-block px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 transition text-white"
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
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;

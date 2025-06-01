import { useState } from 'react';

export default function Hero() {
  const [isOpen, setIsOpen] = useState(false);
  const [form, setForm] = useState({
    nome: '',
    cidade: '',
    data: '',
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const message = `Olá DJ KAZAK! Gostaria de agendar um evento.\n\nNome/Empresa: ${form.nome}\nCidade: ${form.cidade}\nData: ${form.data}`;
    const whatsappLink = `https://wa.me/5531983703055?text=${encodeURIComponent(message)}`;
    window.open(whatsappLink, '_blank');
    setIsOpen(false);
  };

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
          <button
            onClick={() => setIsOpen(true)}
            className="inline-block px-6 py-3 rounded-full bg-rose-600 hover:bg-rose-500 transition text-white"
          >
            Agende seu Evento
          </button>
        </div>

        {/* Imagem */}
        <div className="w-full md:w-1/2">
          <img
            src="/assets/img3.webp"
            alt="DJ tocando"
            loading="lazy"
            className="w-full max-w-sm mx-auto rounded-lg shadow-lg"
          />
        </div>
      </div>

      {/* Modal */}
      {isOpen && (
        <div className="fixed inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50 px-4">
          <div className="bg-white rounded-xl p-6 w-full max-w-md shadow-xl relative">
            {/* Botão de Fechar */}
            <button
              onClick={() => setIsOpen(false)}
              className="absolute top-2 right-3 text-gray-500 hover:text-black text-xl"
              aria-label="Fechar"
            >
              &times;
            </button>

            <h3 className="text-xl font-bold mb-4 text-black">Agendar Evento</h3>

            <form onSubmit={handleSubmit} className="space-y-4">
              <input
                type="text"
                name="nome"
                value={form.nome}
                onChange={handleChange}
                placeholder="Nome ou empresa"
                required
                maxLength={50}
                pattern="[A-Za-zÀ-ÿ0-9\s\.'\-]+"
                title="Somente letras, números e pontuação básica"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <input
                type="text"
                name="cidade"
                value={form.cidade}
                onChange={handleChange}
                placeholder="Cidade do evento"
                required
                maxLength={40}
                pattern="[A-Za-zÀ-ÿ\s\-']+"
                title="Somente letras e traços"
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
              />
              <input
                type="date"
                name="data"
                value={form.data}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg text-black focus:outline-none focus:ring-2 focus:ring-rose-500"
              />

              <button
                type="submit"
                className="w-full bg-rose-600 text-white py-2 rounded-lg hover:bg-rose-500 transition"
              >
                Enviar para WhatsApp
              </button>
            </form>
          </div>
        </div>
      )}
    </section>
  );
}

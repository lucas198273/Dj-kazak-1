

export default function AboutContact() {
  return (
    <section className="bg-gray-900 text-white pt-24 pb-16 px-6">
      <div className="max-w-7xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-6 text-blue-400">
          Contato
        </h3>
        <p className="text-lg text-gray-300 mb-4">
          Para shows, parcerias ou outras informações, entre em contato:
        </p>
        <p className="text-lg text-gray-300">
          Email: <a href="mailto:contato@djkazak.com" className="text-blue-500 hover:underline">contato@djkazak.com</a>
        </p>
        <div className="mt-6 flex justify-center space-x-6">
          <a href="https://instagram.com/djkazak" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Instagram
          </a>
          <a href="https://twitter.com/djkazak" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Twitter
          </a>
          <a href="https://facebook.com/djkazak" target="_blank" rel="noopener noreferrer" className="text-blue-500 hover:underline">
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

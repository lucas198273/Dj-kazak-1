export default function AboutContact() {
  return (
    <section className="bg-gray-900 text-white pt-16 pb-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-3xl mx-auto text-center">
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-blue-400">
          Contato
        </h3>
        <p className="text-lg text-gray-300 mb-3">
          Para shows, parcerias ou outras informações, entre em contato:
        </p>
        <p className="text-lg text-gray-300">
          Email: <a href="mailto:contato@djkazak.com" className="text-blue-500 hover:underline">contato@djkazak.com</a>
        </p>

        <div className="mt-5 flex justify-center space-x-6">
          <a href="https://instagram.com/djkazak" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="text-blue-500 hover:underline transition-colors duration-200">
            Instagram
          </a>
          <a href="https://twitter.com/djkazak" target="_blank" rel="noopener noreferrer" aria-label="Twitter" className="text-blue-500 hover:underline transition-colors duration-200">
            Twitter
          </a>
          <a href="https://facebook.com/djkazak" target="_blank" rel="noopener noreferrer" aria-label="Facebook" className="text-blue-500 hover:underline transition-colors duration-200">
            Facebook
          </a>
        </div>
      </div>
    </section>
  );
}

import ContactForm from './contact-form';



const PoolWebsite = () => {
  const poolTypes = [
    { name: 'Amazonas 8', width: '8.50m', length: '4.20m', depth: '1.40m' },
    { name: 'Atlântico', width: '6.00m', length: '3.00m', depth: '1.40m' },
    { name: 'Ômega', width: '7.00m', length: '3.50m', depth: '1.40m' },
    { name: 'Xavatins/Siribel', width: '5.00m', length: '2.50m', depth: '1.20m' },
    { name: 'Iguaçu', width: '4.50m', length: '2.25m', depth: '1.20m' },
    { name: 'Xingu R', width: '6.00m', length: '3.00m', depth: '1.40m' }
  ];

  return (
    <div className="min-h-screen bg-white">
      <header className="bg-white p-4 sticky top-0 z-50 shadow-sm">
        <nav className="container mx-auto flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
          <img src="/logo.png" alt="Logo" className="w-16 sm:w-12 h-16 sm:h-12" />
          <div className="flex flex-wrap justify-center gap-4 sm:gap-6">
            <a href="#sobre" className="text-cyan-500 hover:text-cyan-600 transition-colors">Sobre</a>
            <a href="#projetos" className="text-cyan-500 hover:text-cyan-600 transition-colors">Projetos</a>
            <a href="#galeria" className="text-cyan-500 hover:text-cyan-600 transition-colors">Galeria</a>
            <a href="#contato" className="text-cyan-500 hover:text-cyan-600 transition-colors">Contato</a>
          </div>
        </nav>
      </header>

      <section className="relative h-[300px] sm:h-[400px] md:h-[500px]">
        <div className="absolute inset-0 bg-cyan-500/20">
          <img
            src="/hero-pool.png"
            alt="Piscina luxuosa"
            className="w-full h-full object-cover"
          />
        </div>
        <div className="relative container mx-auto px-4 h-full flex items-center">
          <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl text-white font-semibold max-w-xl leading-tight">
            Transformamos seu quintal em um oásis de lazer e bem-estar!
          </h1>
        </div>
      </section>
      <section id="sobre" className="py-16 bg-white">
  <div className="container mx-auto px-4">
    <div className="flex flex-col md:flex-row items-center gap-8">
      <div className="w-full md:w-1/2">
        <img 
          src="/logo.png" 
          alt="Logo da empresa" 
          className="w-64 h-64 mx-auto md:mx-0 object-contain"
        />
      </div>
      <div className="w-full md:w-1/2 text-center md:text-left">
        <h2 className="text-3xl text-cyan-700 font-semibold mb-4">Sobre Nós</h2>
        <p className="text-gray-600 leading-relaxed">
          Há mais de 5 anos no mercado, somos especialistas em transformar seu espaço em um ambiente de lazer único. 
          Nossa empresa é reconhecida pela excelência em construção de piscinas, oferecendo soluções personalizadas 
          que atendem às necessidades específicas de cada cliente. Trabalhamos com materiais de alta qualidade e 
          equipe especializada, garantindo durabilidade e satisfação em cada projeto.
        </p>
      </div>
    </div>
  </div>
</section>
      <section id="galeria" className="py-8 sm:py-12 md:py-16 container mx-auto px-4">
        <h2 className="text-2xl sm:text-3xl text-cyan-700 text-center mb-4 sm:mb-8">Galeria de projetos</h2>
        <p className="text-center mb-8 sm:mb-12 text-gray-600 px-4">
        Transforme seu lazer em um verdadeiro paraíso
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6 md:gap-8">
          {[1, 2, 3].map((item) => (
            <div key={item} className="bg-white rounded-lg shadow-lg overflow-hidden hover:shadow-xl transition-shadow">
              <img
                src={`/piscinas${item}.png`}
                alt={`Projeto ${item}`}
                className="w-full h-48 sm:h-56 md:h-64 object-cover"
              />

            </div>
          ))}
        </div>
      </section>

      <section id="projetos" className="py-8 sm:py-12 md:py-16 bg-gray-50">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl sm:text-3xl text-cyan-700 text-center mb-4 sm:mb-8">
            Formas e tamanhos de piscinas
          </h2>
          <p className="text-center mb-8 sm:mb-12 text-sm sm:text-base px-4 max-w-3xl mx-auto">
            Explore nossa ampla seleção de formatos e tamanhos para baldes de piscina. 
            Nossa equipe está dedicada a criar uma piscina impressionante, relaxante e 
            esteticamente agradável, perfeitamente alinhada às suas preferências.
          </p>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 sm:gap-6">
            {poolTypes.map((pool) => (
              <div key={pool.name} className="bg-white p-4 sm:p-6 rounded-lg shadow hover:shadow-md transition-shadow">
                <h3 className="font-semibold mb-2 text-lg">{pool.name}</h3>
                <div className="space-y-1 text-sm sm:text-base text-gray-600">
                  <p>Largura: {pool.width}</p>
                  <p>Comprimento: {pool.length}</p>
                  <p>Profundidade: {pool.depth}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section id="contato" className="py-8 sm:py-12 md:py-16 bg-white">
        <div className="container mx-auto px-4">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-4xl mx-auto">
            <div className="text-center md:text-left">
              <h2 className="text-2xl sm:text-3xl text-blue-700 mb-4">Entre em contato</h2>
              <p className="mb-4 text-sm sm:text-base">
                Solicite seu orçamento agora mesmo e transforme sua ideia em realidade
              </p>
            </div>
            <ContactForm />
          </div>
        </div>
      </section>

      <footer className="bg-gray-50 py-6 sm:py-8">
        <div className="container mx-auto px-4">
          <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
            <img src="/logo.png" alt="Logo" className="w-16 sm:w-12 h-16 sm:h-12" />
            <div className="flex flex-col sm:flex-row items-center gap-2 sm:gap-4">
              <p className="text-sm sm:text-base">Siga nossas redes sociais</p>
              <div className="flex gap-4">
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Facebook</a>
                <a href="#" className="text-blue-600 hover:text-blue-700 transition-colors">Instagram</a>
              </div>
            </div>
            <button className="bg-blue-600 text-white px-4 sm:px-6 py-2 rounded hover:bg-blue-700 transition-colors w-full sm:w-auto">
              Contate-nos
            </button>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default PoolWebsite;
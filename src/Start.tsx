import "./index.css";
const loby = () => {
  return (
    <div className="w-screen h-screen  flex flex-column justify-content-between align-items-center">
      <header className="w-full">
        <h1>Bienvenido a Consultora TechBot</h1>
        <p>
          Tu asistente virtual para encontrar las mejores opciones en
          MercadoLibre Colombia
        </p>
      </header>

      <div className="container flex flex-column w-full">
        <div className="intro">
          <h2>¿Qué es TechBot?</h2>
          <p>
            TechBot es un bot inteligente diseñado para ayudarte a encontrar y
            sugerir los productos más adecuados a tus necesidades en
            <strong> MercadoLibre Colombia</strong>. Ya sea que busques una
            laptop, un celular o cualquier otro dispositivo, TechBot te guiará
            en cada paso.
          </p>
          <p>
            Para comenzar, simplemente abre el chat en la esquina inferior
            izquierda e interactúa con TechBot. ¡Es rápido, fácil y eficiente!
          </p>
        </div>
        <div className="credits">
          <p>
            Este proyecto ha sido desarrollado como parte del programa
            <strong> Talento Tech Oriente</strong>.
          </p>
          <p>
            Hecho por: <strong>Cristian Mauricio Arias</strong>
          </p>
        </div>
      </div>
      <div className="my-5"></div>

      <footer className="w-full">
        <p>&copy; 2024 Consultora TechBot. Todos los derechos reservados.</p>
      </footer>
    </div>
  );
};

export default loby;

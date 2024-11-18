import './index.css'
const loby = () => {
  return (
    <div>
     <header>
      <h1>Consultora TechBot</h1>
      <p>Te ayudamos a elegir el equipo perfecto para tus necesidades</p>
    </header>

    <div className="container">
      <div className="intro">
        <h1>Bienvenido a Consultora TechBot</h1>
        <p>
          ¿No estás seguro de qué equipo electrónico necesitas? Nuestro bot
          inteligente te asistirá para encontrar el equipo perfecto, ya sea una
          laptop, celular o cualquier otro dispositivo.
        </p>
      </div>

      <a href="chat.html" className="chatbot-btn">Hablar con TechBot</a>

      <div className="credits">
        <p>
          Este proyecto ha sido desarrollado como parte del programa
          <strong>Talento Tech Oriente</strong>.
        </p>
        <p>Hecho por: <strong>Cristian Mauricio Arias</strong></p>
      </div>
    </div>

    <footer>
      <p>&copy; 2024 Consultora TechBot. Todos los derechos reservados.</p>
    </footer>
    </div>
  )
}

export default loby
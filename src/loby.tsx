import React from 'react'
import './index.css'
const loby = () => {
  return (
    <div>
      <header>
      <h1>TechShop Chatbot</h1>
      <p>Encuentra el producto perfecto para ti</p>
    </header>

    <div className="container">
      <div className="intro">
        <h1>Bienvenido a TechShop</h1>
        <p>
          Permítenos ayudarte a encontrar el mejor producto según tus
          necesidades. Nuestro chatbot está listo para asistirte.
        </p>
      </div>

      <a href="chat.html" className="chatbot-btn">Iniciar Chat con TechBot</a>

      <div className="credits">
        <p>
          Este proyecto ha sido desarrollado como parte del programa
          <strong>Talento Tech Oriente</strong>.
        </p>
        <p>Hecho por: <strong>Cristian Mauricio Arias</strong></p>
      </div>
    </div>

    <footer>
      <p>&copy; 2024 TechShop. Todos los derechos reservados.</p>
    </footer>
    </div>
  )
}

export default loby

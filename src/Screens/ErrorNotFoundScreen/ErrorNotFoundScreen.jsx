import React from 'react'
import { Link } from 'react-router'

function ErrorNotFoundScreen() {
  return (
    <div>
      <h1>Ups, pagina no encontrada</h1>
      <p>La pagina que estás buscando no existe o ha sido removida</p>
      <Link to="/">Volver al inicio</Link>
    </div>
  )
}

export default ErrorNotFoundScreen

import { useContext } from "react"
import { PruebaContext } from "../context/PruebaContext"


export const Contacto = () => {
  const datoDesdeElContext= useContext(PruebaContext)
  console.log(datoDesdeElContext)
  return (
    <div>
      <h1>Contacto</h1>
      <p>Página de Contacto</p>
      {/* <p>Valor compartido: <strong>{datoDesdeElContext.contenido}</strong></p> */}
    </div>
  )
}


import './App.css'
import { AppRouter } from './router/AppRouter'
import {PruebaContext} from'./context/PruebaContext'
import { useEffect, useState } from 'react'

function App() {
  const [usuario, setUsuario] = useState({})

  // La primera vez que se carga el componente
  useEffect(()=>{
    let usuario_local= JSON.parse(localStorage.getItem("usuario"));
    setUsuario(usuario_local)
  }, [])

  // Cada vez que se actualice el estado usuario se guarda en el localStorage
  useEffect(()=>{
    localStorage.setItem("usuario", JSON.stringify(usuario));
  }, [usuario, setUsuario])



  // const curso={
  //   id: 1,
  //   titulo: "Master en TypeScript",
  //   contenido: "Muchas horas de contenido...",
  // }
  // console.log(curso.titulo)
  return (
    <>
      <div>
        {/* Usamos una propiedad en el componente PruebaContext para compartir la información
        Ésta etiqueta junto con el componente PruebaContext */}
        <PruebaContext.Provider value={{
          usuario,
          setUsuario
        }}>
          <AppRouter/>
        </PruebaContext.Provider>
        
      </div>
      
    </>
  )
}

export default App

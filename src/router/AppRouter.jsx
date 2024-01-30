import { useContext } from 'react';
import { Routes, Route, BrowserRouter, NavLink } from 'react-router-dom';
import { Inicio } from '../components/Inicio';
import { Acerca } from '../components/Acerca';
import { Articulos } from '../components/Articulos';
import { Contacto } from '../components/Contacto';
import { Login } from '../components/Login';
import { PruebaContext } from '../context/PruebaContext';

export const AppRouter = () => {
    const {usuario, setUsuario}= useContext(PruebaContext);
  return (
    <BrowserRouter>
    {/* MENU NAVEGACIÓN */}
    <header className='header'>
        <nav>
            <div className='logo'>
                <h2>React Context</h2>
            </div>
            <ul>
                <li>
                    <NavLink to="/">Inicio</NavLink>
                </li>
                <li>
                    <NavLink to="/articulos">Articulos</NavLink>
                </li>
                <li>
                    <NavLink to="/acerca">Acerca de</NavLink>
                </li>
                <li>
                    <NavLink to="/contacto">Contacto</NavLink>
                </li>
                
                    {/* Condicional, si usuario.nick no es = a null aparece usuario.nick si no : identificate */}
                    {usuario.hasOwnProperty.call(usuario, "nick") && usuario.nick !== null ? (
                        <>
                        <li>
                            <NavLink to="/">{usuario.nick}</NavLink>
                        </li> 
                        <li>
                            <a href="#" onClick={ e =>{
                                e.preventDefault();
                                setUsuario({
                                    nick: null,
                                    nombre: "Luis Manuel",
                                    web:"HelicexWorkWeb.es"
                                });
                            }}>Cerrar Sesion</a>
                        </li>
                        </>
                    ):(
                        <>
                        <li>
                            <NavLink to="/login">Identificate</NavLink>
                        </li> 
                        </>
                    )}
                
            </ul>
        </nav>
    </header>

<section className='content'>
    {/* CONFIGURAR RUTAS */}

    <Routes>
        <Route path='/' element={<Inicio/>}></Route>
        <Route path='/inicio' element={<Inicio/>}/>
        <Route path='/acerca' element={<Acerca/>}/>
        <Route path='/articulos' element={<Articulos/>}/>
        <Route path='/contacto' element={<Contacto/>}/>
        <Route path='/login' element={<Login/>}/>
        {/* Rutas erróneas * | element div entre paréntesis para que funcione correctamente */}
        <Route path='*' element={(
                <div>
                    <h1>ERROR ESTA PAGINA NO EXISTE</h1>
                </div>
        )}/>

    </Routes>
    </section>
    </BrowserRouter>
)
}

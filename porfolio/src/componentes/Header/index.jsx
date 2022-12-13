import React from 'react';
import './Header.css'
const Header = () => {
    return(
        <div className='contenedorHeader'>

            <h1 className='Logo'> Rocio Franco</h1>
            <nav>
                
                
               
                     <a href="#">Home</a>
                     <a href="#sobre-mi">Sobre Mi</a>
                     <a href="#Lo-que-hago">Mis Servicios</a>
                     <a href="#Resumen">Resumen</a>
                     <a href="#porfolio">Porfolio</a>
                     <a href="#contacto">Contactarme</a>

                

            </nav>

            <div className='contenedorRedes'>

            <a href="https://www.instagram.com/rociofranco13/" target="_blank"><i class="bi bi-instagram"></i></a> 
            <a href=""><i class="bi bi-facebook"></i></a>    
            <a href="https://mobile.twitter.com/rociifnc" target="_blank"><i class="bi bi-twitter"></i></a>        
            </div>
           

        </div>
    )
}

export { Header }
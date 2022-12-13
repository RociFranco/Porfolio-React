import React from 'react';
import './Quien-soy.css'
import rocio from '../../assets/rocio.jpg'

const Hero = () => {
    return(
        <div className='contenedorQuien-soy'>
            <div>
                <h2 className='MiNombre'> Hola! Soy Rocio </h2>
                <strong><h1 className='Titulo'> Delevoper</h1></strong> 
                <p className='Nacionalidad'> Argentina - Santa Fe</p> 
                <a href=""><button >Mirar mis trabajos</button></a>
                <a href=""><u> Contactarme<i class="bi bi-arrow-down-circle"></i></u></a>
                

            </div>
              <img src={rocio} alt="" className='Imagen'/>
            
            
            

        </div>
    )
}

export { Hero }
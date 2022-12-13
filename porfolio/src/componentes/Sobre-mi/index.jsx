import React from 'react';
import './Sobre-mi.css'

const SobreMi = () => {
    return(
        <div>

        <div className='Sobre-Mi'>

                    
            <h4>Sobre Mi</h4>


            <h2>Conoceme mas</h2>

            <table>

            <td>
            
                <h3>Hola! Soy <u>Rocio Franco</u> </h3>
                
                <p> Soy una diseñadora y desarrolladora apasionado por el diseño web.  Disfruto desarrollando
                    sitio web simples, limpios y elegantes que brindan un valor real al usuario final.
                    Miles de clientes han obtenido resultados excepcionales trabajando conmigo. Nuestro lema es
                    entregar el trabajo dentro del tiempo y el presupuesto que cumpla los requisitos del cliente  
                </p>

            </td>

            <td>

                <h1 className='Tamaño'> 1 </h1>
                <p>Años de  <b>experiencia</b> </p>

                
            </td>
            </table>
            <table>

            <tr>
                
            <th>Nombre:</th>
            <th>Email:</th>
            <th>Fecha Nacimiento</th>
            <th>Pais:</th>    
            </tr>

            <tr>
                <td>Rocio Franco</td>
                <td>franco.rocio1999@gmail.com</td>
                <td>3 de octubre 1999</td>
                <td>Argentina, Santa Fe</td>
            </tr>



            </table>




        </div>


        </div>
    )
}

export { SobreMi }
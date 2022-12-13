import React from 'react';
import './Formulario.css'

const Formulario = () => {
    return(
        <div className='contacto'>

            <div className='datos'>
                <h2>Mantengamonos en contacto</h2>
                <p>Disfruto discutir nuevos proyectos y desafios de diseño. Comparta tanta Informacion como sea posible para que podamos aprovechar al maximo nuestra primera puesta del dia </p>

                <p> <b>Viviendo en:</b> </p>

                <p>Gral. Lopez 3883</p>
                


                <p> <b>Llamar</b></p>
                <p>(342) 421 8441</p>

                <table>

                    <td> <a href="https://mobile.twitter.com/rociifnc"></a> <i class="bi bi-twitter"></i> </td>
                    <td><i class="bi bi-facebook"></i> 
                    </td>
                    <td> <a href="https://www.instagram.com/rociofranco13/"><i class="bi bi-instagram"></i> </a> </td>

                    <td> <a href="https://github.com/RociFranco"> <i class="bi bi-github"></i></a></td>

                    <td><i class="bi bi-dribbble"></i> </td>



                </table>


            </div>

            <div className='form'>

                <h2>Cotiza tu Proyecto</h2>
                <form action="">
                    <label >Su nombre?</label>
                    <input type="text" name="nombre" id=""/>


                    <label > Su Email</label>
                    <input type="email" name="email"/>

                    <label >cómo puedo ayudarte</label>
                    <textarea name="comentario" ></textarea>

                    
                </form>

                <button>Enviar <i class="bi bi-arrow-right"></i></button>
            </div>
           

        

            


        </div>
    )
}

export { Formulario }
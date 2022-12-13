import React from 'react';
import './Resumen.css'

const Resumen = () => {
    return(
     
        
        <div className='Resumen'>
            <h4>Resumen</h4>
            <h2>un resumen de mi currículum</h2>
           <h1> <b>Mi Educacion</b> </h1>
           
            <div>
                
               
                
                <ul>
                    
                    <li> <b>Tecnico Informatico Profesional y Personal</b> </li>
                    <li>E.E.T.P N°480 Manuel Belgrano / 2013 - 2018</li>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque, commodi quae quos asperiores rerum sapiente in, officiis dolor amet tempore at eaque quaerat. Saepe magnam beatae quisquam sequi illo obcaecati.</p>
                    
                </ul>
                <ul>
                    
                    <li> <b> Ingenieria en Sistemas de Informacion</b> </li>
                    <li>Universidad Tecnologica Nacional FRSF / 2020 - actual</li>
                    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Odio nam debitis, modi quas necessitatibus dolorum tempore nobis harum consectetur nemo assumenda laudantium accusantium maxime sequi ab aperiam cum quasi possimus.</p>
                    
                </ul>
                <ul>
                    
                    <li> <b>Front end Delevoper</b> </li>
                    <li>Universidad Tecnologica Nacional FRBA / 2022 - actual</li>
                    <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Tempore similique quo nulla hic quaerat, veritatis dolores necessitatibus distinctio incidunt est reiciendis aliquam, dicta corporis nobis consectetur alias accusantium cumque assumenda.</p>
                    
                </ul>
            </div>
               
                <h1>My Skill</h1>
                
                
                   
                <table>
                    
                    <td>
                       
                            <div class="skills1">
                                
                                <span>Web Desing</span>
                                <p>60%</p> 
                            <div class="container">
                                <div class="skills web-desing"></div>
                                
                            </div>
                        
                            <span>HTML/CSS</span> 
                            <p> 60%</p>
                            <div class="container">
                                <div class="skills html-css"></div>
                            </div>
                      

                        
                             <span>JavaScript</span>
                             <p>30%</p>
                            <div class="container">
                                <div class="skills javascript"></div>
                            </div>

                            </div>
                        

                    </td>
                        <td>
                            <div className='skills2'>
                                <span>React JS</span> 
                                <p>30%</p>
                                <div class="container">
                                    <div class="skills react-js"></div>
                                </div>
                            

                            
                                <span>Angular Js</span>
                                <p>90%</p>
                                <div class="container">
                                    <div class="skills angular-js"></div>
                                </div>
                           
                            
                           
                                   <span>Boostrap</span> 
                                   <p>90%</p>
                                <div class="container">
                                    <div class="skills boostrap"></div>
                                </div>
                                </div>
                                
                        </td>     
                </table>
            
            

            <button className='Descarga'> <a href="CV.pdf">Descargar CV</a> </button>

        </div>
        


    
    )
}

export { Resumen }
import React from 'react';
import './Porfolio.css';
import Img1 from '../../assets/img1.jpg' 
import Img2 from '../../assets/img2.jpg' 
import Img3 from '../../assets/img3.jpg' 
import Img4 from '../../assets/img4.jpg' 
import Img5 from '../../assets/img5.jpg' 
import Img6 from '../../assets/img6.jpg' 




const Porfolio = () => {
    return(
        <div className='Porfolio'>
              

                    <h4>Porfolio</h4>

                    <h2> Algunos de mis proyectos mas recientes</h2>

                      <div className='centrar'>

                      <img src={Img1} alt="" className='Imagenes'/>
                      <img src={Img2} alt="" className='Imagenes'/>
                      <img src={Img3} alt="" className='Imagenes'/>
                      <img src={Img4} alt="" className='Imagenes'/>
                      <img src={Img5} alt="" className='Imagenes'/>
                      <img src={Img6} alt="" className='Imagenes'/>

                      </div>


                   

        </div>
    )
}

export { Porfolio }
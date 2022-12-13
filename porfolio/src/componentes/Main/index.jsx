import React from 'react';
import { LoQueHago } from '../Lo-que-hago';
import { Hero } from '../Quien-soy';
import { Resumen } from '../Resumen';
import { SobreMi } from '../Sobre-mi';
import { Porfolio } from '../Porfolio';
import { Formulario } from '../Formulario';
import { Footer } from '../Footer';


const Main = () => {
    return(
        <div>
            <Hero/>
            <SobreMi/>
            <LoQueHago/>
            <Resumen/>
            <Porfolio/>
            <Formulario/>
            <Footer/>
            
           
        </div>
     )
}

export { Main }
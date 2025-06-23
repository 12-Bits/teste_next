'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import './page.css';
import Comidas from '@/components/Comidas';
import Restaurantes from '@/components/Restaurantes';



function Title(){
  return(
    <div className="Title-Container">
      <button className="MenuButton"><h1>App de Deliver</h1></button>
    </div>
  )
}

function AD(){

  const ADMain = 'https://img.freepik.com/fotos-premium/a-autentica-marmita-brasileira-mais-conhecida-como-marmitex-feita-com-comida-tradicional-do-brasil_496782-2496.jpg';

  return(
    <div className="Ad-Container">
    <img src={ADMain} className="Ad-Image" alt="AD"/>
    </div>
  )
}



export default function Home() {
  return(
   <div className="App">
    <div>
          <Title/>
          <AD/>
      </div>
      <div id="Comidas">
          <div id="ComidasScrolling">
            <div id="ComidaDisplay">
                    <main>
      <Comidas/>
    </main>

            </div>
          </div>
    <div id="Restaurante">
      <Restaurantes/>



      </div>

      </div>
    </div>



  )
}

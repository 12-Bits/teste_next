'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import './page.css';
import Comidas from '@/components/Comidas';
import Restaurantes from '@/components/Restaurantes'



function Title() {
  return (
    <Link href="/">
      <h1 className="Title">App de Deliver</h1>
    </Link>
  );
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
      <Comidas />
    </main>

            </div>
          </div>
    <div id="Restaurante">
      <Restaurantes/>
      <div id="RestaurantesScrolling">



      </div>

      </div>
    </div>
   </div>


  )
}

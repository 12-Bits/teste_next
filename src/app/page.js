'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import './page.css';
import Comidas from '@/components/Comidas';
<<<<<<< HEAD
import Restaurantes from '@/components/Restaurantes';
=======
import Restaurantes from '@/components/Restaurantes'
>>>>>>> 1996df77e2c1dc6d05ed12b600ff4e6aa216f352



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

<<<<<<< HEAD


=======
>>>>>>> 1996df77e2c1dc6d05ed12b600ff4e6aa216f352
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

'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import './page.css';
import Comidas from '@/components/Comidas';



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



function Restaurantes(){

  const imageUrl1 = 'https://media-cdn.tripadvisor.com/media/photo-s/14/2c/db/e6/logo.jpg'; 
  const imageUrl2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 
  const imageUrl3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 
  const imageUrl4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 

  return(
<Container>
  <h2 className="SubtituloRestaurante">Restaurantes</h2>
    <Row>
      <Col>
<img id="RestauranteIcon" className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 1</p>
      </Col>
      <Col>
<img id="RestauranteIcon" className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 2</p>
      </Col>
      <Col>
<img id="RestauranteIcon" className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 3</p>

      </Col>

    </Row>
</Container>
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

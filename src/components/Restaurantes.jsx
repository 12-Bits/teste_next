'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
<<<<<<< HEAD

export default function Restaurantes(){

const [selectedRestaurante, setSelectedRestaurante] = useState([]);
=======
import styled from 'styled-components';
export default function Restaurantes() {
  const [selectedRestaurante, setSelectedRestaurante] = useState([]);

>>>>>>> 1996df77e2c1dc6d05ed12b600ff4e6aa216f352

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((res) => res.json())
      .then((data) => setSelectedRestaurante(data));
  }, []);

<<<<<<< HEAD
   return (
    <Container>
      <h1>Recomendado</h1>
      <Row>
        {selectedRestaurante.slice(0, 3).map((restaurante, index) => (
          <Col key={index}>
            <Link href="/DetalhesRestaurante">
              <img src={restaurante.image} className="ImgScrollingRestaurante" alt={restaurante.name} />
              <p className="ImgScrollingRestauranteName">{restaurante.name}</p>
            </Link>
          </Col>
=======
  return (
    <Container>
      <h1>Restaurantes</h1>
      <Row>
        {selectedRestaurante.slice(0, 3).map((restaurante, index) => (
          <div id="ComidaShowcase">
          <Col key={index}>
            <Link href="/Detalhes">
              <img src={restaurante.image} className="ImgScrollingComida" alt={restaurante.name} />
            </Link>
            <h3>{restaurante.name}</h3>


            
          </Col>
          </div>
>>>>>>> 1996df77e2c1dc6d05ed12b600ff4e6aa216f352
        ))}
      </Row>
    </Container>
  );
<<<<<<< HEAD
}
=======
}
>>>>>>> 1996df77e2c1dc6d05ed12b600ff4e6aa216f352

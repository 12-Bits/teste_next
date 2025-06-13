'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
export default function Restaurantes() {
  const [selectedRestaurante, setSelectedRestaurante] = useState([]);


  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((res) => res.json())
      .then((data) => setSelectedRestaurante(data));
  }, []);

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
        ))}
      </Row>
    </Container>
  );
}

'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';

export default function Comidas() {
  const [selectedComida, setSelectedComida] = useState([]);


  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setSelectedComida(data));
  }, []);

  return (
    <Container>
      <h1>Recomendado</h1>
      <Row>
        {selectedComida.slice(0, 3).map((comida, index) => (
          <Col key={index}>
            <Link href="/Detalhes">
              <img src={comida.image} className="ImgScrollingComida" alt={comida.name} />
            </Link>
            <h3>{comida.name}</h3>
            <p>R$ {comida.price}</p>
          </Col>
        ))}
      </Row>
    </Container>
  );
}
'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import styled from 'styled-components';
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

          <div id="ComidaShowcase">
          <Col key={index}>
              <img src={comida.image} className="ImgScrollingComida" alt={comida.name} />
            <h3>{comida.name}</h3>
            <p>{"Preço: R$"+comida.price}</p>
            <div id="DeliverInfo">
             <p>{"Deliver: R$"+comida.delivery}</p>
             <p>{comida.time}</p> 
            </div>
            
          </Col>
          </div>

      </Row>
    </Container>
  );
}
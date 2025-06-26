'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Restaurantes(){

const [selectedRestaurante, setSelectedRestaurante] = useState([]);

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((res) => res.json())
      .then((data) => setSelectedRestaurante(data));
  }, []);

const router = useRouter();

  const irParaDetalhes = (id) => {
    router.push(`/restaurante/${id}`);
  };

   return (
    <Container>
      <h1>Recomendado</h1>
      <Row>
        {selectedRestaurante.slice(0, 3).map((restaurante, index) => (
          <Col key={index}>
            <Link className='Link' href={`/restaurante/${restaurante.id}`}>
              <img src={restaurante.image} className="ImgScrollingRestaurante" alt={restaurante.name} />
              <p className="ImgScrollingRestauranteName">{restaurante.name}</p>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

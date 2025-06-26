

'use client';
import './page.css';
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetalhesRestaurante() {
  const { id } = useParams();
  const [restaurante, setRestaurate] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/restaurants/${id}`)
      .then(res => res.json())
      .then(data => setRestaurate(data));
  }, [id]);

  if (!restaurante) return <p>Carregando...</p>;

    return (
    
    <div>
      <Container>
        <Title />
      <img className='RestauranteIMG' src={restaurante.image} alt={restaurante.name} />

      <Row>
      <Col className="RestauranteDetails">
      <h1>{restaurante.name}</h1>
      <p>{restaurante.description}</p>

      </Col>
    
      
      </Row>
      </Container>
    </div>
  );
}


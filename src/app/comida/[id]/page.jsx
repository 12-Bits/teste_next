'use client';
import './page.css';
import { Container, Row, Col } from "react-bootstrap";
import Title from "@/components/Title";
import { useParams } from 'next/navigation';
import { useEffect, useState } from 'react';

export default function DetalhesComida() {
  const { id } = useParams();
  const [comida, setComida] = useState(null);

  useEffect(() => {
    fetch(`https://apifakedelivery.vercel.app/foods/${id}`)
      .then(res => res.json())
      .then(data => setComida(data));
  }, [id]);

  if (!comida) return <p>Carregando...</p>;

  return (
    <div>
      <Title />
    <div className="PaginaCentro">
      <Container>

        <div className="ImagemComidaContainer">
          <img className="ImagemComida" src={comida.image || '/placeholder.png'} alt={comida.name} 
            onError={(e) => {
              e.target.onerror = null;
              e.target.src = '/MissingIMG.png';
            }}
          />
        </div>
        <Row className="DetalhesRow">
          <Col className="ComidaDetails1">
            <h1 className="ComidaName">{comida.name}</h1>
            <p>Preço: R$ {comida.price}</p>
            <p>{comida.description}</p>
          </Col>

          <Col className="ComidaDetails2">
            <button className="ComprarButton" onClick={() => alert("Compra realizada com sucesso!")}>
              Comprar
            </button>
            <div className="SecondDivision">
              <p>Nota: {comida.rating}</p>
            </div>
            <p>Tempo de entrega: {comida.time}</p>
            <p>Preço da entrega: R$ {comida.delivery}</p>
            <img className="RestauranteIcon" src="https://media-cdn.tripadvisor.com/media/photo-s/14/2c/db/e6/logo.jpg" alt="Ícone de comida" />
            <p className="RestauranteName">Xis do Vini (baked)</p>
          </Col>
        </Row>
      </Container>
    </div>
    </div>
  );
}

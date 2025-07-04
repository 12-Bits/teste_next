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
    
<div className="PaginaCentro">
  <Container>
    <Title />
    <div className="ImagemComidaContainer">
                    <img
                src={comida.image || '/MissingIMG.png'}
                alt={comida.name}
                className="ImgScrollingComida"
                loading="lazy"
                onError={(e) => {
                e.target.onerror = null; // evita loop
                e.target.src = '/MissingIMG.png'; // imagem padrão
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
        <button className="ComprarButton" onClick={() => alert("Compra realizada com sucesso!")}>Comprar</button>
        <div className="SecondDivision">
          <p>Nota: {comida.rating}</p>
        </div>
        <p>Tempo de entrega: {comida.time}</p>
      </Col>
    </Row>
  </Container>
</div>
  );
}




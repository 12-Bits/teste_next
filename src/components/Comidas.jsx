'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Comidas() {
  const [selectedComida, setSelectedComida] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setSelectedComida(data));
  }, []);

  const irParaDetalhes = (id) => {
    router.push(`/comida/${id}`);
  };

  return (
    <Container>
      <h1>Recomendado</h1>
      <Row className="justify-content-center">
        {selectedComida.slice(0, 3).map((comida) => (
          <Col key={comida.id}  md="auto" className="ComidaContainer">
            <Link className="Link" href={`/comida/${comida.id}`}>
              <img
                src={comida.image}
                alt={comida.name}
                className="ImgScrollingComida"
                loading="lazy"
              />
              <div className="ComidaInfo">
                <Row>
                  <Col>
                    <h3 className="ComidaName">{comida.name}</h3>
                    <p>Preço: R$ {comida.price}</p>
                  </Col>
                  <Col>
                    <p>Nota: {comida.rating}</p>
                    <p>Tempo de entrega: {comida.time}</p>
                  </Col>
                </Row>
              </div>
            </Link>
          </Col>
        ))}
      </Row>
    </Container>
  );
}

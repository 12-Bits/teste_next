'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Comidas() {
  const [selectedComida, setSelectedComida] = useState([]);


  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setSelectedComida(data));
  }, []);

const router = useRouter();

  const irParaDetalhes = (id) => {
    router.push(`/comida/${id}`);
  };

  return (
    console.log(selectedComida),
    <Container>
      <h1>Recomendado</h1>
      <Row>
        {selectedComida.slice(0, 3).map((comida, index) => (
          <div className='ComidaInfo'>
          <Col key={index}>
            <Link href={`/comida/${comida.id}`}>
              <img src={comida.image} className="ImgScrollingComida" alt={comida.name} />


            <Row>
              <Col>
            <h3 className='ComidaName'>{comida.name}</h3>

            <p>Preço: R$ {comida.price}</p>
            </Col>
            <Col>
            <p>Nota: {comida.rating}</p>
            <p>Tempo de entrega {comida.time}</p>
            </Col>
            </Row>
            </Link>
          </Col>
             </div>
        ))}
      </Row>
    </Container>
  );
}
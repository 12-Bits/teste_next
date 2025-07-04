'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container, Row, Col } from 'react-bootstrap';
import { useRouter } from 'next/navigation';

export default function Comidas() {
  const [selectedComida, setSelectedComida] = useState([]);
  const router = useRouter();
  const scrollRef = useRef(null);

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/foods")
      .then((res) => res.json())
      .then((data) => setSelectedComida(data));
  }, []);

  // Drag scroll logic
  useEffect(() => {
    const scroll = scrollRef.current;
    if (!scroll) return;

    let isDown = false;
    let startX;
    let scrollLeft;

    const handleMouseDown = (e) => {
      isDown = true;
      scroll.classList.add('active');
      startX = e.pageX - scroll.offsetLeft;
      scrollLeft = scroll.scrollLeft;
    };

    const handleMouseLeave = () => {
      isDown = false;
      scroll.classList.remove('active');
    };

    const handleMouseUp = () => {
      isDown = false;
      scroll.classList.remove('active');
    };

    const handleMouseMove = (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - scroll.offsetLeft;
      const walk = (x - startX) * 2; // velocidade do scroll
      scroll.scrollLeft = scrollLeft - walk;
    };

    scroll.addEventListener('mousedown', handleMouseDown);
    scroll.addEventListener('mouseleave', handleMouseLeave);
    scroll.addEventListener('mouseup', handleMouseUp);
    scroll.addEventListener('mousemove', handleMouseMove);

    return () => {
      scroll.removeEventListener('mousedown', handleMouseDown);
      scroll.removeEventListener('mouseleave', handleMouseLeave);
      scroll.removeEventListener('mouseup', handleMouseUp);
      scroll.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <Container>
      <h1>Recomendação da Semana</h1>
      <div className="scroll-container" ref={scrollRef}>
        {selectedComida.slice(0, 10).map((comida) => (
          <div key={comida.id} className="ComidaScrollItem">
            <Link className="Link" href={`/comida/${comida.id}`}>
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
          </div>
        ))}
      </div>
    </Container>
  );
}

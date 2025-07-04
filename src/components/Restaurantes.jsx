'use client';

import { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { Container } from 'react-bootstrap';
import { useRouter } from 'next/navigation';


export default function Restaurantes() {
  const [selectedRestaurante, setSelectedRestaurante] = useState([]);
  const router = useRouter();

  useEffect(() => {
    fetch("https://apifakedelivery.vercel.app/restaurants")
      .then((res) => res.json())
      .then((data) => setSelectedRestaurante(data));
  }, []);

  
 

  return (
    <Container>
      <h1 className="SubtituloRestaurante">Restaurantes Recomendados</h1>
      <div className="scroll-container">
        {selectedRestaurante.map((restaurante, index) => (
          <div key={index} className="RestauranteScrollItem">
            <Link className="Link" href={`/restaurante/${restaurante.id}`}>
              <div className="RestauranteItemContent">
                <img
                  src={restaurante.image || '/placeholder.png'}
                  alt={restaurante.name}
                  className="ImgScrollingRestaurante"
                  onError={(e) => {
                    e.target.onerror = null;
                    e.target.src = '/placeholder.png';
                  }}
                />
                <p className="ImgScrollingRestauranteName">
                  {restaurante.name}
                </p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </Container>
  );
}

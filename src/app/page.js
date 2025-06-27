'use client';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';
import { useState, useEffect, use } from 'react';
import './page.css';
import Comidas from '@/components/Comidas';
import Restaurantes from '@/components/Restaurantes';
import Title from '@/components/Title';
import AD1 from '@/components/AD1';







export default function Home() {
  return(
   <div className="App">
    <div>
          <Title/>
          <AD1/>
      </div>
      <div id="Comidas">
          <div id="ComidasScrolling">
            <div id="ComidaDisplay">
    <main>
      <Comidas/>
    </main>

            </div>
          </div>
    <div id="Restaurante">
      <Restaurantes/>



      </div>

      </div>
    </div>



  )
}

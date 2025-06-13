'use client';

import './page.css';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Link from 'next/link';

function Title() {
  return (
    <Link href="/">
      <h1 className="Title">App de Deliver</h1>
    </Link>
  );
}







function NomeComida(){
  return(
    <h1 className='NomeComida'>Nome da Comida</h1>
  )
}

function ComidaIMG(){
  const imageUrl = 'https://img.freepik.com/fotos-premium/a-autentica-marmita-brasileira-mais-conhecida-como-marmitex-feita-com-comida-tradicional-do-brasil_496782-2496.jpg';
  return(
    <div>
      <img className='ComidaIMG' src={imageUrl} alt="Comida"/>
    </div>
  )
} 

function BotaoCompra() {
  function comprarComida() {
    alert("Compra realizada com sucesso!"); // ou qualquer outra lógica
  }

  return (
    <button onClick={comprarComida}>
      Comprar
    </button>
  );
}

function Rest(){
  return(
<Container>
  <Row>
    <Col>
    <p>
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
    </p>
    </Col>
    <Col>
      <h2>Restaurante</h2>
      <p>Nome do Restaurante</p>
      <p>Endereço: Rua Exemplo, 123</p>
      <p>Telefone: (11) 1234-5678</p>
      <BotaoCompra></BotaoCompra>
    </Col>
  </Row>
  </Container>
  )
}




export default function Detalhes() {
  return (
    <div>
      
       <Title/>
<ComidaIMG />
      <NomeComida />

<Rest/>
           <div id="BotãoCompra">
      </div>
      </div>


  )
}
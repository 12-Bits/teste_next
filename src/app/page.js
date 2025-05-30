import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './page.css';


function Title(){
  return(
    <div className="Title-Container">
      <h1 className="Title">App de Deliver</h1>
    </div>
  )
}

function AD(){

  const ADMain = 'https://img.freepik.com/fotos-premium/a-autentica-marmita-brasileira-mais-conhecida-como-marmitex-feita-com-comida-tradicional-do-brasil_496782-2496.jpg';

  return(
    <div className="Ad-Container">
    <img src={ADMain} className="Ad-Image" alt="AD"/>
    </div>
  )
}

function Comidas(){
  const imageUrl1 = 'https://img.freepik.com/fotos-premium/a-autentica-marmita-brasileira-mais-conhecida-como-marmitex-feita-com-comida-tradicional-do-brasil_496782-2496.jpg';
  const imageUrl2 = 'https://www.minhareceita.com.br/app/uploads/2022/12/pizza-de-pepperoni-caseira-portal-minha-receita.jpg';
  const imageUrl3 = 'https://i.imgur.com/0UjG3wk.png';
  const imageUrl4 = 'https://grandesnomesdapropaganda.com.br/wp-content/uploads/2019/04/Outback-e-Abbraccio.jpg';
  return(
    
  <><h1>Recomendado</h1>

   <Container>
    <Row>
      <Col>
      <div id="ComidaImg">
        <img className='ImgScrollingComida' src={imageUrl1} alt="Comida"/>
      </div>
            <div id="ComidaInfo">

      <Row>
      <Col>
      <h3 className='ComidaNome'>Comida 1</h3>
      <p>R$ 50,99</p>
      <p id="PrazoEntrega">De XX a XX minutos</p>
</Col>
      </Row>
      </div>

 </Col>
      <Col><img className='ImgScrollingComida' src={imageUrl2} alt="Comida" />
      <h2>Comida 2</h2></Col>
      </Row>
    </Container>

    
    </>

  )
}


function Restaurantes(){

  const imageUrl1 = 'https://media-cdn.tripadvisor.com/media/photo-s/14/2c/db/e6/logo.jpg'; 
  const imageUrl2 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 
  const imageUrl3 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 
  const imageUrl4 = 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQtu3ZooExj_sovxE6UlPJqfqQ7UiDli7gukQ&s'; 

  return(
<Container>
  <h2 className="SubtituloRestaurante">Restaurantes</h2>
    <Row>
      <Col>
<img className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 1</p>
      </Col>
      <Col>
<img className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 2</p>
      </Col>
            <Col>
<img className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 3</p>

      </Col>
            <Col>
<img className='ImgScrollingRestaurante' src={imageUrl1} alt="Comida" />
<p id="RestauranteNome">Restaurante 4</p>

      </Col>
    </Row>
</Container>
  )
}



export default function Home() {
  return(
   <div className="App">
    <div>
          <Title/>
          <AD/>
      </div>
      <div id="Comidas">
          <div id="ComidasScrolling">
            <div id="ComidaDisplay">
                <Comidas/>

            </div>
          </div>
    <div id="Restaurante">
      <Restaurantes/>
      <div id="RestaurantesScrolling">



      </div>

      </div>
    </div>
   </div>


  )
}
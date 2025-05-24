import './page.css';
import add from './Hamburguer.jpg';
function AD(){
  return(
    <img src={add} className="App-logo" alt="AD"/>
  )
}

function Comidas(){
  return(
  <h1>Recomendado</h1>
  
  )
}


function Restaurantes(){
  return(
<h1>Restaurantes</h1>
  )
}



export default function Home() {
  return(
   <div className="App">
    <div>
      <h1 id="Titulo">App de Deliver</h1>
<img src={add} className="App-logo" alt="AD"/>
      <div id="Ad">
        <h1>
          <AD/>
        </h1>
      </div>
      <div id="Comidas">
        <h2 id="Subtitulo">Recomendado</h2>
          <div id="ComidasScrolling">
            <div id="ComidaDisplay">
                <Comidas/>

            </div>
          </div>
    <div id="Restaurante">
      <h2 id="Subtitulo">Restaurante</h2>
      <Restaurantes/>
      <div id="RestaurantesScrolling">



      </div>

      </div>
    </div>
   </div>
   </div>

  )
}
function BotaoCompra(){
  return(
  <button>
    Comprar
  </button>
  );
}

export default function Detalhes() {
  return (
    <div>
      <h1 id="Titulo">App de Deliver</h1>
      <div id="BodyDetalhe">
      <div id="ImagemMain">

      </div>
      <div id="Titulo">Comida</div>
      <div id="Descrição">Ipsom Lorum</div>
      <div id="BotãoCompra">
      <BotaoCompra />
      </div>
      </div>
      
    </div>
  );
}
// app/comida/[id]/page.jsx

export default async function DetalhesComida({ params }) {
  const res = await fetch(`https://apifakedelivery.vercel.app/foods/${params.id}`);
  const comida = await res.json();

  return (
    <div>
      <h1>{comida.name}</h1>
      <img src={comida.image} alt={comida.name} />
      <p>Preço: R$ {comida.price}</p>
      <p>Nota: {comida.rating}</p>
      <p>Tempo de entrega: {comida.time}</p>
    </div>
  );
}

export default function TimestampToDate ({ timestamp }){
  // Convertir el timestamp a milisegundos y crear una nueva fecha
  const date = new Date(timestamp * 1000);

  // Extraer los componentes de la fecha
  const day = String(date.getDate()).padStart(2, '0');
  const month = String(date.getMonth() + 1).padStart(2, '0'); // Los meses empiezan en 0
  const year = date.getFullYear();
  const hours = String(date.getHours()).padStart(2, '0');
  const minutes = String(date.getMinutes()).padStart(2, '0');
  const seconds = String(date.getSeconds()).padStart(2, '0');

  // Formatear la fecha
  const formattedDate = `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;

  return (
    <>
      {formattedDate}
    </>
  );
}

// // Ejemplo de uso
// const App = () => {
//   const timestamp = 1717004428;
//   return (
//     <div>
//       <h1>Fecha formateada:</h1>
//       <TimestampToDate timestamp={timestamp} />
//     </div>
//   );
// };

// export default App;

import { useState } from 'react';

// Simulación de datos de API para directores y miembros
const directores = [
  { id: 1, nombre: 'Director A' },
  { id: 2, nombre: 'Director B' },
  // Agrega más directores según sea necesario
];

const miembros = [
  { id: 1, nombre: 'Miembro A1' },
  { id: 2, nombre: 'Miembro A2' },
  { id: 3, nombre: 'Miembro B1' },
  { id: 4, nombre: 'Miembro B2' },
  // Agrega más miembros según sea necesario
];

const CrearGrupo = () => {
  const [nombreGrupo, setNombreGrupo] = useState('');
  const [directorId, setDirectorId] = useState('');
  const [miembrosSeleccionados, setMiembrosSeleccionados] = useState([]);
  const [descripcion, setDescripcion] = useState('');

  const handleCrearGrupo = (e) => {
    e.preventDefault();
    const nuevoGrupo = {
      nombre: nombreGrupo,
      directorId,
      miembros: miembrosSeleccionados,
      descripcion,
    };
    console.log('Grupo creado:', nuevoGrupo);
    // Aquí puedes hacer una llamada a la API para guardar el grupo
  };

  const handleMiembrosChange = (e) => {
    const selectedOptions = Array.from(e.target.selectedOptions, option => option.value);
    setMiembrosSeleccionados(selectedOptions);
  };

  return (
    <div>
      <h1>Crear Grupo</h1>
      <form onSubmit={handleCrearGrupo}>
        <div>
          <label htmlFor="nombreGrupo">Nombre del Grupo</label>
          <input
            id="nombreGrupo"
            type="text"
            value={nombreGrupo}
            onChange={(e) => setNombreGrupo(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="director">Director del Grupo</label>
          <select
            id="director"
            value={directorId}
            onChange={(e) => setDirectorId(e.target.value)}
          >
            <option value="" disabled>Selecciona un director</option>
            {directores.map(director => (
              <option key={director.id} value={director.id}>
                {director.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
          <label htmlFor="miembros">Miembros del Grupo</label>
          <select
            id="miembros"
            multiple
            value={miembrosSeleccionados}
            onChange={handleMiembrosChange}
          >
            {miembros.map(miembro => (
              <option key={miembro.id} value={miembro.id}>
                {miembro.nombre}
              </option>
            ))}
          </select>
        </div>
        <div>
        <h4>Miembros Seleccionados:</h4>
        <ul>
          {miembrosSeleccionados.map(miembroId => {
            const miembro = miembros.find(m => m.id === parseInt(miembroId));
            return (
              <li key={miembroId}>{miembro?.nombre}</li>
            );
          })}
        </ul>
      </div>
        <div>
          <label htmlFor="descripcion">Comentarios</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <button type="submit">+</button>
      </form>
    </div>
  );
};

export default CrearGrupo;
import { useState } from 'react';

// Simulación de datos de API para directores y miembros
const directores = [
  { id: 1, nombre: 'Director A' },
  { id: 2, nombre: 'Director B' },
  { id: 3, nombre: 'Director C' },
  { id: 4, nombre: 'Director D' },
  // Agrega más directores según sea necesario
];

const miembros = [
  { id: 1, nombre: 'Miembro A1' },
  { id: 2, nombre: 'Miembro A2' },
  { id: 3, nombre: 'Miembro B1' },
  { id: 4, nombre: 'Miembro B2' },
  { id: 5, nombre: 'Miembro C1' },
  { id: 6, nombre: 'Miembro C2' },
  { id: 7, nombre: 'Miembro D1' },
  { id: 8, nombre: 'Miembro D2' },
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
    if (selectedOptions && !miembrosSeleccionados.includes(selectedOptions)) {
      setMiembrosSeleccionados([...miembrosSeleccionados, selectedOptions]);
    }
  };

  return (
    <div>
      <h1 style={{marginBottom: '20px'}}>Crear Grupo</h1>
      <form onSubmit={handleCrearGrupo}>
        <div style={{marginBottom: '20px'}}>
          <label htmlFor="nombreGrupo">Nombre del Grupo</label>
          <input
            id="nombreGrupo"
            type="text"
            value={nombreGrupo}
            onChange={(e) => setNombreGrupo(e.target.value)}
          />
        </div>
        <div style={{marginBottom: '20px'}}>
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
        <div style={{marginBottom: '20px'}}>
          <label htmlFor="miembros">Miembros del Grupo</label>
          <select
            id="miembros"
            value={miembrosSeleccionados}
            onChange={handleMiembrosChange}
          >
            <option value="" disabled>Selecciona los miembros</option>
            {miembros.map(miembro => (
              <option key={miembro.id} value={miembro.id}>
                {miembro.nombre}
              </option>
            ))}
          </select>
        </div>
        <div style={{marginBottom: '20px'}}>
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
        <div style={{marginBottom: '20px'}}>
          <label htmlFor="descripcion">Comentarios</label>
          <textarea
            id="descripcion"
            value={descripcion}
            onChange={(e) => setDescripcion(e.target.value)}
          ></textarea>
        </div>
        <button style={{fontSize: '20px', width: '60px'}} type="submit">+</button>
      </form>
    </div>
  );
};

export default CrearGrupo;
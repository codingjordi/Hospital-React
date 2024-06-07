import { useState, useEffect } from 'react';

// Simulación de datos de API
const grupos = [
  { id: 1, nombre: 'Fugas', director: 'Juan García', miembros: [
    { nombre: 'Miembro A1', email: 'a1@example.com' },
    { nombre: 'Miembro A2', email: 'a2@example.com' },
    { nombre: 'Miembro A3', email: 'a3@example.com' },
    { nombre: 'Miembro A4', email: 'a4@example.com' }
  ]},
  { id: 2, nombre: 'Caídas', director: 'José Gómez', miembros: [
    { nombre: 'Miembro B1', email: 'b1@example.com' },
    { nombre: 'Miembro B2', email: 'b2@example.com' },
    { nombre: 'Miembro A3', email: 'b3@example.com' },
    { nombre: 'Miembro A4', email: 'b4@example.com' }
  ]},
  { id: 3, nombre: 'Agresiones', director: 'Sara García', miembros: [
    { nombre: 'Miembro C1', email: 'c1@example.com' },
    { nombre: 'Miembro C2', email: 'c2@example.com' },
    { nombre: 'Miembro C3', email: 'c3@example.com' },
    { nombre: 'Miembro C4', email: 'c4@example.com' }
  ]},
  { id: 4, nombre: 'Errores de Medicación', director: 'Laura Almagro', miembros: [
    { nombre: 'Miembro D1', email: 'd1@example.com' },
    { nombre: 'Miembro D2', email: 'd2@example.com' },
    { nombre: 'Miembro D3', email: 'd3@example.com' },
    { nombre: 'Miembro D4', email: 'd4@example.com' }
  ]},
  { id: 5, nombre: 'Infecciones', director: 'Miguel Méndez', miembros: [
    { nombre: 'Miembro E1', email: 'e1@example.com' },
    { nombre: 'Miembro E2', email: 'e2@example.com' },
    { nombre: 'Miembro E3', email: 'e3@example.com' },
    { nombre: 'Miembro E4', email: 'e4@example.com' }
  ]},
  { id: 6, nombre: 'Heridos Crónicos', director: 'Alberto Cortés', miembros: [
    { nombre: 'Miembro F1', email: 'f1@example.com' },
    { nombre: 'Miembro F2', email: 'f2@example.com' },
    { nombre: 'Miembro F3', email: 'f3@example.com' },
    { nombre: 'Miembro F4', email: 'f4@example.com' }
  ]},
  { id: 7, nombre: 'Ausencia en Terapias', director: 'Elena Jiménez', miembros: [
    { nombre: 'Miembro G1', email: 'g1@example.com' },
    { nombre: 'Miembro G2', email: 'g2@example.com' },
    { nombre: 'Miembro G3', email: 'g3@example.com' },
    { nombre: 'Miembro G4', email: 'g4@example.com' }
  ]},
  { id: 8, nombre: 'Conductas Adictivas', director: 'Marta Bosque', miembros: [
    { nombre: 'Miembro H1', email: 'h1@example.com' },
    { nombre: 'Miembro H2', email: 'h2@example.com' },
    { nombre: 'Miembro H3', email: 'h3@example.com' },
    { nombre: 'Miembro H4', email: 'h4@example.com' }
  ]},
  // Agrega más grupos según sea necesario
];

const BuscarGrupo = () => {
  const [selectedGroupId, setSelectedGroupId] = useState(null);
  const [selectedGroupDetails, setSelectedGroupDetails] = useState(null);

  // Efecto para actualizar los detalles del grupo seleccionado
  useEffect(() => {
    if (selectedGroupId) {
      const selectedGroup = grupos.find(grupo => grupo.id === parseInt(selectedGroupId));
      setSelectedGroupDetails(selectedGroup);
    }
  }, [selectedGroupId]);

  return (
    <div>
      <h1>Buscar Grupo</h1>
      <label htmlFor="grupo-select">Selecciona un grupo</label>
      <select
        id="grupo-select"
        value={selectedGroupId || ''}
        onChange={(e) => setSelectedGroupId(e.target.value)}
      >
        <option value="" disabled>Selecciona un grupo</option>
        {grupos.map(grupo => (
          <option key={grupo.id} value={grupo.id}>
            {grupo.nombre}
          </option>
        ))}
      </select>

      {selectedGroupDetails && (
        <div>
          <p><strong>Director:</strong> {selectedGroupDetails.director}</p>
          <h3>Miembros:</h3>
          <ul>
            {selectedGroupDetails.miembros.map((miembro, index) => (
              <li key={index}>
                {miembro.nombre} - {miembro.email}
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default BuscarGrupo;
import { useState } from 'react';

const UpdateReport = () => {
  // Estado para manejar la visibilidad de los campos de edición
  const [isEditing, setIsEditing] = useState(false);

  // Estado para manejar los datos del informe
  const [report, setReport] = useState({
    name: 'Fiona',
    surnames: 'Fahey',
    group: 'Fugas',
    gravityOfIncidence: '6',
    complete:'',
    dateOfIncidence: '29-05-2024 21:51:45',
    dateCompleted: 'Yes',
    inform: '509'
  });

  // Estado para manejar una copia de los datos durante la edición
  const [editableReport, setEditableReport] = useState({ ...report });

  // Función para manejar el cambio de los campos de texto
  const handleChange = (e) => {
    const { name, value } = e.target;
    setEditableReport((prevReport) => ({
      ...prevReport,
      [name]: value,
    }));
  };

  // Función para manejar el clic del botón de editar
  const handleEditClick = () => {
    setIsEditing(true);
    setEditableReport({ ...report }); // Inicializar los campos de edición con los valores actuales del informe
  };

  // Función para manejar el clic del botón de guardar
  const handleSaveClick = () => {
    setIsEditing(false);
    setReport({ ...editableReport });
    // Aquí puedes agregar la lógica para guardar los cambios, por ejemplo, enviar los datos a un servidor.
  };

  // Función para manejar el clic del botón de cancelar
  const handleCancelClick = () => {
    setIsEditing(false);
    setEditableReport({ ...report }); // Restablecer los valores editables a los originales
  };

  return (
    <div>
      {isEditing ? (
        <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', height: '72vh', borderRadius: '10px', overflow: 'scroll' }}>
          <input
            value={editableReport.inform}
            style={{ color: 'white', backgroundColor: 'blue'}}
          />
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>
          <label htmlFor="name">Nombre</label>
          <textarea 
            name="name"
            value={editableReport.name}
            onChange={handleChange}
            />
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>
          <label htmlFor="surnames">Apellidos</label>
          <textarea
            name="surnames"
            value={editableReport.surnames}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>            
          <label htmlFor="group">Grupo</label>
          <br></br>
          <br></br>
            <select name="group" value={editableReport.group} onChange={handleChange} required >
              <option value=""></option>
              <option value="Fugas">Fugas</option>
              <option value="Caídas">Caídas</option>
              <option value="Agresiones">Agresiones</option>
              <option value="Errores de mediación">Errores de mediación</option>
              <option value="Infecciones">Infecciones</option>
              <option value="Herdos crónicos">Heridos crónicos</option>
              <option value="Ausencia en terapias">Ausencia en terapias</option>
              <option value="Conductas adictivas">Conductas adictivas</option>
              <option value="Otro incidente">Otro incidente</option>
            </select>
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>            
          <label htmlFor="gravityOfIncidence">Nivel de Gravedad</label>
          <br></br>
          <br></br>
          <select name="gravityOfIncidence" value={editableReport.gravityOfIncidence} onChange={handleChange} required>
              <option value=""></option>
              <option value="1">1 - Gravedad baja</option>
              <option value="2">2 - Gravedad leve</option>
              <option value="3">3 - Gravedad moderada</option>
              <option value="4">4 - Gravedad alta</option>
              <option value="5">5 - Gravedad extrema</option>
            </select>
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>            
          <label htmlFor="complete">Completado</label>
          <textarea
            name="complete"
            value={editableReport.complete}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>            
          <label htmlFor="dateOfIncidence">Fecha del Incidente</label>
          <textarea
            name="dateOfIncidence"
            value={editableReport.dateOfIncidence}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>            
          <label htmlFor="dateCompleted">Fecha de Actualización del Informe</label>
          <textarea
            name="dateCompleted"
            value={editableReport.dateCompleted}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <button onClick={handleSaveClick}>Guardar</button>
          <button onClick={handleCancelClick}>Cancelar</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Editar</button>
      )}
    </div>
  );
}

export default UpdateReport;
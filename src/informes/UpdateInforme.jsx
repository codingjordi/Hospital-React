import { useState } from 'react';

const UpdateReport = () => {
  // Estado para manejar la visibilidad de los campos de edición
  const [isEditing, setIsEditing] = useState(false);

  // Estado para manejar los datos del informe
  const [report, setReport] = useState({
    name: 'Fiona',
    surnames: 'Fahey',
    group: '',
    gravityOfIncidence: '',
    complete:'Yes',
    dateOfIncidence: '29-05-2024 21:51:45',
    dateCompleted: '3-06-2024 16:43:17',
    inform: '509',
    detalles: '',
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
        <div style={{ display: 'flex', borderRadius: '8px', backgroundColor: 'pink'}}>
          <br></br>
          <br></br>
          <div style={{ margin: '20px', color: 'black' }}>
          <label htmlFor="name">Nombre</label>
          <br></br>
          <br></br>
          <input
            name="name"
            value={editableReport.name}
            onChange={handleChange}
            />
          </div>
          <br></br>
          <br></br>
          <div style={{ margin: '20px', color: 'black' }}>
          <label htmlFor="surnames">Apellidos</label>
          <br></br>
          <br></br>
          <input
            name="surnames"
            value={editableReport.surnames}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <br></br>
          <div style={{ margin: '20px', color: 'black' }}>            
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
          <div style={{ margin: '20px', color: 'black' }}>            
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
          <br></br>
          <div style={{ margin: '20px', color: 'black' }}>            
          <label htmlFor="complete">Completado</label>
          <br></br>
          <br></br>
          <input
            name="complete"
            value={editableReport.complete}
            onChange={handleChange}
          />
          </div>
          <br></br>
          <div style={{ margin: '20px', color: 'black' }}>        
          <label htmlFor="dateOfIncidence">Fecha del Incidente</label>
          <br></br>
          <br></br>
          <input
            name="dateOfIncidence"
            value={editableReport.dateOfIncidence}
            onChange={handleChange}
          />
          </div>
          <div style={{ margin: '20px', color: 'black' }}>            
          <label htmlFor="detalles">Detalles</label>
          <textarea
            name="detalles"
            value={editableReport.detalles}
            onChange={handleChange}
          />
          </div>
          <button onClick={handleSaveClick}  style={{ fontSize: '1.2rem', width: '180px', height: '50px', color: 'white', backgroundColor: 'blue', borderRadius: '10px', margin: '40px' }}>Guardar</button>
          <button onClick={handleCancelClick}  style={{ fontSize: '1.2rem', width: '180px', height: '50px', color: 'white', backgroundColor: 'blue', borderRadius: '10px', margin: '40px' }}>Cancelar</button>
        </div>
      ) : (
        <button onClick={handleEditClick}>Editar</button>
      )}
    </div>
  );
}

export default UpdateReport;
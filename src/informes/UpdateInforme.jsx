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
    complete: false,
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
        <div>
          <input
            value={editableReport.inform}
            style={{ color: 'white', backgroundColor: 'red'}}
          />
          <textarea
            name="name"
            value={editableReport.name}
            onChange={handleChange}
          />
          <textarea
            name="surnames"
            value={editableReport.surnames}
            onChange={handleChange}
          />
          <textarea
            name="group"
            value={editableReport.group}
            onChange={handleChange}
          />
          <textarea
            name="gravityOfIncidence"
            value={editableReport.gravityOfIncidence}
            onChange={handleChange}
          />
          <textarea
            name="complete"
            value={editableReport.complete}
            onChange={handleChange}
          />
          <textarea
            name="dateOfIncidence"
            value={editableReport.dateOfIncidence}
            onChange={handleChange}
          />
          <textarea
            name="dateCompleted"
            value={editableReport.dateCompleted}
            onChange={handleChange}
          />
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

/*import { useState } from 'react';
import axios from 'axios';

const UpdateInforme = () => {
  const [data, setData] = useState({
    name: '',
    surname: '',
    group: '',
    gravityOfIncidence: '',
    complete: 'false',
    dateOfIncidence: '',
    dateCompleted: 'false',
    inform: '',
    id: '',
    surnames: '' });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setData({ ...data, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.put(`https://663b7395fee6744a6ea1b083.mockapi.io/api/v1/hospital/informes/${id}`, data);
      setData('Datos actualizados correctamente');
      console.log(response.data);
    } catch (error) {
      setData('Error al actualizar los datos');
      console.error(error);
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit}>
      <div>
          <label>Nombre:</label>
          <input type="text" name="name" value={data.name} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name='surname' value={data.surname} onChange={handleInputChange} required />
        </div>        
        <div>
          <label>Grupo:</label>
          <input type="text" name="group" value={data.group} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Nivel de Gravedad:</label>
          <input type="number" name="gravityOfIncidence" value={data.gravityOfIncidence} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Completado:</label>
          <input type="boolean" name="complete" value={data.complete} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Fecha de Incidencia:</label>
          <input type="date" name="dateOfIncidence" value={data.dateOfIncidence} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Fecha Completada:</label>
          <input type="boolean" name="date completed" value={data.dateCompleted} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Informe:</label>
          <input type="text" name="inform" value={data.inform} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Id:</label>
          <input type="number" name="id" value={data.id} onChange={handleInputChange} required />
        </div>
        <div>
          <label>Apellidos:</label>
          <input type="text" name="surnames" value={data.surnames} onChange={handleInputChange} required />
        </div>
        <button type="submit">Actualizar Datos</button>
      </form>
      {data && <p>{data}</p>}
    </div>
  );
};

export default UpdateInforme;*/

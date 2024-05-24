import { useState } from 'react';

const TipoIncidencia = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <>
      <label htmlFor="numberDropdown">Tipo de Incidencia</label>
      <br></br>
      <select
        id="numberDropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled>Selecciona una opción</option>
        <option value="Fugas">Fugas</option>
        <option value="Caídas">Caídas</option>
        <option value="Agresiones">Agresiones</option>
        <option value="Errores de Medicación">Errores de Medicación</option>
        <option value="Infecciones">Infecciones</option>
        <option value="Heridos Crónicos">Heridos Crónicos</option>
        <option value="Ausencia en Terapias">Ausencia en Terapias</option>
        <option value="Conductas Adictivas">Conductas Adictivas</option>
      </select>
      {selectedOption && <p>Has seleccionado: {selectedOption}</p>}
    </>
  );
};

export default TipoIncidencia;
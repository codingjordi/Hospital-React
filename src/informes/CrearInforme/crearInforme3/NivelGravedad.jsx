import { useState } from 'react';

const NivelGravedad = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleChange = (event) => {
    setSelectedOption(event.target.value);
  };

  return (
    <div>
      <label htmlFor="numberDropdown">Nivel de Gravedad</label>
      <br></br>
      <select
        id="numberDropdown"
        value={selectedOption}
        onChange={handleChange}
      >
        <option value="" disabled>Selecciona una opción</option>
        <option value="1">1</option>
        <option value="2">2</option>
        <option value="3">3</option>
        <option value="4">4</option>
        <option value="5">5</option>
      </select>
      {selectedOption && <p>Has seleccionado: {selectedOption}</p>}
    </div>
  );
};

export default NivelGravedad;





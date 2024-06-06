import { useState } from 'react';

const BuscarGrupo = () => {
  const [selectedOption, setSelectedOption] = useState('');

  const handleSelectChange = (e) => {
    setSelectedOption(e.target.value);
  };

  return (

    <div className="BuscarGrupo" style={{margin: '60px'}}>
    <h1>Buscar grupo</h1>
    <label style={{margin: '30px', fontSize: '2rem'}} htmlFor="selectField">Grupos</label>
      <select value={selectedOption} onChange={handleSelectChange}>
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
    </div>

  );
};

export default BuscarGrupo;

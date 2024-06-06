import { useState } from 'react';

const CrearGrupo = () => {
  const [inputValue, setInputValue] = useState('');
  const [selectedOptions, setSelectedOptions] = useState('');
  const [textAreaValue, setTextAreaValue] = useState('');

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleSelectChange = (e) => {
    const options = Array.from(e.target.options);
    const selectedValues = options.filter(option => option.selected).map(option => option.value);
    setSelectedOptions(selectedValues);
  };

  const handleTextAreaChange = (e) => {
    setTextAreaValue(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes manejar la lógica de envío del formulario
    console.log('Input:', inputValue);
    console.log('Select:', selectedOptions);
    console.log('TextArea:', textAreaValue);
  };

  return (
    <div className="FormComponent">
      <h1 style={{margin: '60px'}}>Crear Grupo</h1>
      <form onSubmit={handleSubmit}>
        <div style={{margin: '30px'}}>
          <label style={{margin: '30px', fontSize: '2rem'}} htmlFor="inputField">Nombre del grupo</label>
          <input
            type="text"
            id="inputField"
            value={inputValue}
            onChange={handleInputChange}
          />
        </div>
        <div style={{margin: '30px'}} className="MultiSelectComponent">
        <label style={{margin: '30px', fontSize: '2rem'}} htmlFor="selectField">Médicos</label>
      <select multiple value={selectedOptions} onChange={handleSelectChange}>
        <option value="opcion1">Óscar García</option>
        <option value="opcion2">Juan Olmo</option>
        <option value="opcion3">Sara García</option>
        <option value="opcion4">Julia Gómez</option>
        <option value="opcion5">Laura Martínez</option>
        <option value="opcion6">Cándido Bosque</option>
        <option value="opcion7">Benito Almagro</option>
        <option value="opcion8">Carmen López</option>
      </select>
      {selectedOptions.length > 0 && (
        <div>
          <h2>Has seleccionado:</h2>
          <ul>
            {selectedOptions.map((option, index) => (
              <li key={index}>{option}</li>
            ))}
          </ul>
        </div>
      )}
    </div>
        <div>
          <label style={{margin: '30px', fontSize: '2rem'}} htmlFor="textAreaField">Comentarios</label>
          <textarea
            id="textAreaField"
            value={textAreaValue}
            onChange={handleTextAreaChange}
          />
        </div>
        <button style={{margin: '30px', fontSize: '4rem', width: '100px'}} type="submit">+</button>
      </form>
    </div>
  );
};

export default CrearGrupo;
    
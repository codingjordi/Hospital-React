import { useState } from "react";

const Comentarios = () => {
  const [comment, setComment] = useState('');
  const [error, setError] = useState('');

  const handleChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() === '') {
      setError('El campo no puede estar vacío');
      return;
    }
    setComment('');
    setError('');
  };

  return (
    <>
    <form onSubmit={handleSubmit}>
      <div>
        <textarea
          value={comment}
          onChange={handleChange}
          placeholder="Introduce tu comentario"
          rows="4"
          cols="50"
        />
      </div>
      {error && <p style={{ color: 'red' }}>{error}</p>}
      <div>
        <button type="submit">Enviar</button>
      </div>
    </form>
    </>
  );
};

export default Comentarios;
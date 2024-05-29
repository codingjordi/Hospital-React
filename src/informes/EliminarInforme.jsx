import { useContext } from 'react';
import { InformesContext } from '../middleware/APIConnection';

// eslint-disable-next-line react/prop-types
export default function EliminarInforme({ informeId }) {
  const { informes, setInformes, deleteInforme } = useContext(InformesContext);

  const handleDelete = () => {

    const updatedInformes = informes.filter(informe => informe.id !== informeId);
    deleteInforme(informeId); // método DELETE axios
    setInformes(updatedInformes);
  };

  return (
    <button onClick={handleDelete} style={{ color: 'red', beorder: 'none', background: 'none', cursor: 'pointer' }}>
      Eliminar
    </button>
  );
}

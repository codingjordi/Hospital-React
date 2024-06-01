import { useContext } from 'react';
import { InformesContext } from '../middleware/APIConnection';

export default function EliminarInforme({ informeId }) {
  const { informes, setInformes, deleteInforme } = useContext(InformesContext);

  const handleDelete = () => {
    // Filtrar los informes para eliminar el informe con el ID dado

    const updatedInformes = informes.filter(informe => informe.id !== informeId);
    deleteInforme(informeId); // método DELETE axios
    setInformes(updatedInformes);
  };

  return (

    <button onClick={handleDelete} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
      Eliminar
    </button>
  );
}


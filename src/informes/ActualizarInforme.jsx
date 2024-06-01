import { useContext } from 'react';
import { InformesContext } from '../middleware/APIConnection';
import UpdateInforme from './UpdateInforme';

export default function ActualizarInforme({ informeId }) {
  const { informes, setInformes, updateInforme } = useContext(InformesContext);

  const handleUpdate = () => {
    // Filtrar los informes para actualizar el informe con el ID dado

    const updatedInformes = informes.map((i) => (i.id === informeId ? response.data : i));
    updateInforme(informeId); // método PUT axios
    setInformes(updatedInformes);
  };

  return (
    <button onClick={handleUpdate} style={{ color: 'red', border: 'none', background: 'none', cursor: 'pointer' }}>
      <UpdateInforme />
    </button>
  );
}
import { useContext, useState } from 'react';
import { InformesContext } from '../middleware/APIConnection';
import EliminarInforme from './EliminarInforme.jsx';
import UpdateInforme from './ActualizarInforme.jsx';
import TimestampToDate from '../utils/TimestampToDate.jsx';

export default function ListarInformes() {
  const { informes, isLoading } = useContext(InformesContext);
  const [selectedInforme, setSelectedInforme] = useState(null);

  const handleAbrirInforme = (informe) => {
    setSelectedInforme(informe);
  };

  const handleCerrarInforme = () => {
    setSelectedInforme(null);
  };

  return (
    <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', height: '72vh', borderRadius: '10px', overflow: 'scroll' }}>
      <div style={{ display: 'flex' }}>
        <i className="fas fa-search" id="search-icon" style={{ color: 'black' }}></i>
        <p style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>Últimos informes creados</p>
      </div>
      <hr />
      {isLoading ? (
        <p>Loading...⏳🕰️⏰🕒🤷😴🧘📆</p>
      ) : (

        <div style={{ display: 'flex', width: '100%' }}>
          <table border="1" style={{ width: selectedInforme ? '60%' : '100%', textAlign: 'left', marginTop: '1rem', transition: 'width 0.3s' }}>
            <thead>
              <tr>
                <th>Fecha del incidente</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Tipo de lesión</th>
                <th>Nivel de gravedad</th>
                <th>Completado</th>
                <th></th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {informes.map((informe) => (
                <tr key={informe.createdAt}>
                  <td><TimestampToDate timestamp={informe.dateOfIncidence} /></td>
                  <td>{informe.name}</td>
                  <td>{informe.surnames}</td>
                  <td>{informe.group}</td>
                  <td>{informe.gravityOfIncidence}</td>
                  <td>{informe.complete ? 'SI' : 'NO'}</td>
                  <td><UpdateInforme informeId={informe.id} /></td>
                  <td><EliminarInforme informeId={informe.id} /></td>
                  <td><button onClick={() => handleAbrirInforme(informe)} style={{ padding: '0.5rem', borderRadius: '5px', backgroundColor: '#2148C0', color: 'white', border: 'none' }}>Abrir</button></td>
                </tr>
              ))}
            </tbody>
          </table>
          {selectedInforme && (
            <div style={{ display: 'block', position: 'sticky', marginLeft: '1.2rem', width: '40%', marginTop: '1rem', transition: 'width 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2148C0', borderRadius: '8px' }}>
                <p style={{ color: 'white', padding: '10px' }}>Informe del paciente</p>
                <button onClick={handleCerrarInforme} className='cerrar-informe'>X</button>
              </div>
              <div style={{ color: 'black', marginTop: '1rem' }}>
                <p><strong>Fecha del incidente:</strong> <TimestampToDate timestamp={selectedInforme.dateOfIncidence} /></p>
                <p><strong>Nombre:</strong> {selectedInforme.name}</p>
                <p><strong>Apellidos:</strong> {selectedInforme.surnames}</p>
                <p><strong>Tipo de lesión:</strong> {selectedInforme.group}</p>
                <p><strong>Nivel de gravedad:</strong> {selectedInforme.gravityOfIncidence}</p>
                <p><strong>Completado:</strong> {selectedInforme.complete ? 'SI' : 'NO'}</p>
                <p><strong>Detalles:</strong> {selectedInforme.inform}</p>
              </div>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

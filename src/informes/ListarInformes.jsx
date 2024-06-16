import { useContext, useState } from 'react';
import { InformesContext } from '../middleware/APIConnection';
import EliminarInforme from './EliminarInforme.jsx';
import TimestampToDate from '../utils/TimestampToDate.jsx';
import InformeDetails from './InformeDetails.jsx';

export default function ListarInformes( { searchResults }) {

  const { isLoading } = useContext(InformesContext);
  const [selectedInforme, setSelectedInforme] = useState(null);

  let results = searchResults;

  const handleAbrirInforme = (informe) => {
    setSelectedInforme(informe);  
  };

  const handleCerrarInforme = () => {
    setSelectedInforme(null);
  };

  return (
    <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', borderRadius: '10px', overflow: 'scroll' }}>
        <div style={{ display: 'flex' }}>
            <i className="fas fa-search" id="search-icon" style={{ color: 'black' }}></i>
            <p style={{ marginLeft: '10px', color: 'black', marginBottom: '0.5rem' }}>Últimos informes creados</p>
        </div>
        <hr />
        <div style={{ display: 'flex', position: 'sticky', top: '20px', height: 'calc(100vh - 300px)', overflow: 'auto', marginLeft: '20px' }}>
            {isLoading ? (
                <p>Loading...⏳🕰️⏰🕒🤷😴🧘📆</p>
            ) : (
                <div style={{ flex: '1' }}>
                    <table border="1" style={{ width: '100%', textAlign: 'left', marginTop: '1rem', transition: 'width 0.3s' }}>
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
                            {results.map((result) => (
                                <tr key={result.createdAt}>
                                    <td><TimestampToDate timestamp={result.dateOfIncidence} /></td>
                                    <td>{result.name}</td>
                                    <td>{result.surnames}</td>
                                    <td>{result.group}</td>
                                    <td>{result.gravityOfIncidence}</td>
                                    <td>{result.complete ? 'SI' : 'NO'}</td>
                                    <td><EliminarInforme informeId={result.id} /></td>
                                    <td><button onClick={() => handleAbrirInforme(result)} style={{ padding: '0.5rem', borderRadius: '5px', backgroundColor: '#2148C0', color: 'white', border: 'none' }}>Abrir</button></td>
                                </tr>
                            ))}
                        </tbody>
                    </table>
                </div>
            )}
            {selectedInforme && (
                <div style={{ position: 'sticky', width: '38%', top: '0px', overflowY: 'clip', marginLeft: '20px' }}>
                    <InformeDetails
                        selectedInforme={selectedInforme}
                        handleCerrarInforme={handleCerrarInforme}
                    />
                </div>
            )}
        </div>
    </div>
);

}

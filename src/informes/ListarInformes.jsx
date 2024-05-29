import { useContext } from 'react';
import { InformesContext } from '../middleware/APIConnection';
import EliminarInforme from './EliminarInforme.jsx' ;
import AbrirInforme from './AbrirInforme.jsx';
import TimestampToDate from '../utils/TimestampToDate.jsx';

export default function ListarInformes() {
  const { informes, isLoading } = useContext(InformesContext);

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
        <>
        <div style={{display: 'flex'}}>
          <table border="1" style={{width: '100%', textAlign: 'left', marginTop: '1rem' }}>
            <thead>
              <tr>
                <th>Fecha del incidente</th>
                <th>Nombre</th>
                <th>Apellidos</th>
                <th>Tipo de lesión</th>
                <th>Nivel de gravedad</th>
                <th>Completado</th>
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
                    <td><EliminarInforme informeId={informe.id} /></td>
                    <td><AbrirInforme /></td>
                  </tr>
                ))}
              </tbody>
          </table>
          <div style={{marginLeft: '1.2rem', width: '40%'}} >
              <p style={{color: 'black'}}>Informe del paciente</p>
              </div>
        </div>
        </>
        
      )}
    </div>
  );
}

import { useContext } from 'react';
import { InformesContext } from '../middleware/APIConnection';

export default function ListarInformes() {

  const { informes, isLoading } = useContext(InformesContext);

  return (
      <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', height: '72vh', borderRadius: '10px', overflow: 'scroll'}}>
        <div style={{ display: 'flex' }}>
          <i className="fas fa-search" id="search-icon" style={{color: 'black'}}></i>
          <p style={{marginLeft: '10px', color: 'black', marginBottom: '0.5rem'}}>Últimos informes creados</p>
        </div>
        <hr />
        <ul style={{ listStyleType: "none", color: 'black', marginTop: '1rem'}}>
          {isLoading ? (
            <p>Loading...⏳🕰️⏰🕒🤷😴🧘📆</p>
          ) : (
            informes.map((informe) => (
              <>
                <li key={informe.createdAt}>
                  <b>Fecha del incidente:</b>  {informe.dateOfIncidence} <br />
                  <b>Nombre:</b> {informe.name}  <br />
                  <b>Apellidos:</b> {informe.surnames} <br />
                  <b>Tipo de lesión:</b> {informe.grupo} <br />
                  <b>Nivel de gravedad:</b> {informe.gravityOfIncidence} <br />
                  <b>Completado:</b> {informe.complete ? 'Completado' : 'No completado'} <br />
                  <b>Detalles:</b> {informe.inform}
                </li>
              </>
            ))
          )}
        </ul>
      </div>
  )
}


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
              <div key={informe.createdAt}>
                <li>
                  <b>Patient:</b> {informe.patient}  <br />
                  <b>id:</b> {informe.id} <br />
                  <b>Created:</b> {informe.createdAt} <br />
                  <b>Grupo:</b> {informe.grupo} <br />
                  <b>Gravedad:</b> {informe.gravedad} <br />
                  <b>Completado:</b> {informe.completado} <br />
                  <b>Detalles:</b> {informe.detalles}
                </li>
              </div>
            ))
          )}
        </ul>
      </div>
  )
}


/* eslint-disable react/prop-types */
import TimestampToDate from '../utils/TimestampToDate.jsx';

const InformeDetails = ({ selectedInforme, handleCerrarInforme}) => {
    return (
        <div style={{ marginLeft: '1.2rem', marginTop: '1rem', transition: 'width 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2148C0', borderRadius: '8px' }}>
                <p style={{ color: 'white', padding: '10px', fontWeight: '500'}}>Informe del paciente</p>
                <button onClick={handleCerrarInforme} className='cerrar-informe'>X</button>
              </div>

              <div style={{ paddingRight: '1.5rem'}}>
                <div style={{ color: 'black', marginTop: '1rem' }}>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Fecha del incidente:</b> <TimestampToDate timestamp={selectedInforme.dateOfIncidence} /></p>
                    <p><b>Completado:</b> {selectedInforme.complete ? 'SI' : 'NO'}</p>
                  </div>
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Nombre:</b> {selectedInforme.name}</p>
                    <p><b>Apellidos:</b> {selectedInforme.surnames}</p>
                  </div>
                
                  <div style={{display: 'flex', justifyContent: 'space-between'}}>
                    <p><b>Tipo de lesión:</b> {selectedInforme.group}</p>
                    <p><b>Nivel de gravedad:</b> {selectedInforme.gravityOfIncidence}</p>
                  </div>
                
                  <p style={{marginTop: '1.2rem'}}><b>Detalles:</b> {selectedInforme.inform}</p>
                </div>
              </div>
            </div>
    );
};

export default InformeDetails
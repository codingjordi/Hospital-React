import TimestampToDate from '../utils/TimestampToDate.jsx';

const VentanaInforme = ({ selectedInforme, handleCerrarInforme}) => {
    return (
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
    );
};

export default VentanaInforme;
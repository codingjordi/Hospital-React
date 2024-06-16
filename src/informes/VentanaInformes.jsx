import TimestampToDate from '../utils/TimestampToDate.jsx';

const VentanaInforme = ({ selectedInforme, handleCerrarInforme}) => {
    return (
        <div style={{ display: 'block', position: 'sticky', marginLeft: '1.2rem', width: '40%', marginTop: '1rem', transition: 'width 0.3s' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', backgroundColor: '#2148C0', borderRadius: '8px' }}>
                <p style={{ color: 'white', padding: '10px' }}>Informe del paciente</p>
                <button onClick={handleCerrarInforme} className='cerrar-informe'>X</button>
              </div>
              <div style={{ color: 'black', marginTop: '1rem' }}>
                <p><b>Fecha del incidente:</b> <TimestampToDate timestamp={selectedInforme.dateOfIncidence} /></p>
                <p><b>Nombre:</b> {selectedInforme.name}</p>
                <p><b>Apellidos:</b> {selectedInforme.surnames}</p>
                <p><b>Tipo de lesión:</b> {selectedInforme.group}</p>
                <p><b>Nivel de gravedad:</b> {selectedInforme.gravityOfIncidence}</p>
                <p><b>Completado:</b> {selectedInforme.complete ? 'SI' : 'NO'}</p>
                <p><b>Detalles:</b> {selectedInforme.inform}</p>
              </div>
            </div>
    );
};

export default VentanaInforme;
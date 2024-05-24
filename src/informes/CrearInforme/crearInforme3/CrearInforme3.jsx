import NivelGravedad from "./NivelGravedad";
import TipoIncidencia from "./TipoIncidencia";


export default function CrearInforme3() {
      
        return (
          <>
            <h2 style={{ color: 'blueviolet' }}>Crear informe Paso 3 de 4</h2>
            <h3>Incidencia</h3>
            <TipoIncidencia />
            <br></br>
            <br></br>
            <NivelGravedad />       
          </>
        );
      }
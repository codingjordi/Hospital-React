import BuscarGrupo from "./BuscarGrupo";
import CrearGrupo from "./CrearGrupo";

export default function Grupos() {
    return (
        <div style= {{display: 'flex'}}>
          <div style= {{display: 'flex', flex: '1', padding: '10px'}}>
            <BuscarGrupo />
          </div>
          <div style= {{display: 'flex', flex: '1', padding: '10px'}}>
            <CrearGrupo />
          </div>
        </div>
      );
    }
  
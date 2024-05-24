export default function CrearInforme1() {
  return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between'}}>
          <div style={{display: 'flex',  gap: '10px'}}>
            <div className=" ">
              <label htmlFor="nombre">Nombre</label>
              <input type="text" />
            </div>
            <div className=" ">
              <label htmlFor="apellidos">Apellidos</label>
              <input type="text" />
            </div>
            <div className=" ">
              <label htmlFor="fecha-incidente">Fecha del incidente</label>
              <input type="date" />
            </div>
          </div>
          <div style={{display: 'flex',  gap: '10px'}}>
            <div className=" ">
              <label htmlFor="tipo incidencia">Tipo de incidencia</label>
              <select id="tipo-incidencia">
                    <option value=""></option>
                    <option value="1">1 - Gravedad baja</option>
                    <option value="2">2 - Gravedad leve</option>
                    <option value="3">3 - Gravedad moderada</option>
                    <option value="4">4 - Gravedad alta</option>
                    <option value="5">5 - Gravedad extrema</option>
                </select>
            </div>
            <div className=" ">
              <label htmlFor="buscar">Tipo de incidente</label>
                <select name="tipo-incidente" id="">
                <option value=""></option>
                <option value="Fugas">Fugas</option>
                <option value="Caídas">Caídas</option>
                <option value="Agresiones">Agresiones</option>
                <option value="Errores de mediación">Errores de mediación</option>
                <option value="Infecciones">Infecciones</option>
                <option value="Herdos crónicos">Herdos crónicos</option>
                <option value="Ausencia en terapias">Ausencia en terapias</option>
                <option value="Conductas adictivas">Conductas adictivas</option>
                <option value="Otro incidente">Otro incidente</option>

              </select>
            </div>
          </div>
          <div style={{display: 'flex', alignItems: 'center',  gap: '10px'}}>
            <div className=" " style={{display:'flex', flexDirection: 'column'}}>
              <label htmlFor="">Completado</label>
              <input type="checkbox"/>
            </div>
            <div className=" ">
              <label htmlFor="">Fecha de completado</label>
              <input type="date" />
            </div>
          </div>
        </div>
        
        <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', height: '55vh', borderRadius: '10px'}}>
          <label htmlFor="" style={{color: 'black'}}>Comentarios y observaciones</label>
          <textarea name="" id="comentarios-observaciones" placeholder="Escriba aquí los detalles del informe..."></textarea>
        </div>
        <button style={{}}>Guardar informe</button>
    </>
  );
}

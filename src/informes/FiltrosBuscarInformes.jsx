export default function FiltrosBuscarInforme({
    handleChangeName,
    handleChangeSurnames,
    handleChangeDateOfIncidence,
    handleChangeComplete,
    handleChangeGroup,
    handleChangeGravity,
    buscarInformes
}) {
    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <div className="label-input">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={handleChangeName} />
            </div>
            <div className="label-input">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" onChange={handleChangeSurnames} />
            </div>
            <div className="label-input">
                <label htmlFor="fecha">Fecha</label>
                <input type="date" id="fecha" onChange={handleChangeDateOfIncidence} maxLength={10} />
            </div>
            <div className="label-input">
                <label htmlFor="tipoIncidente">Tipo de incidente</label>
                <select name="gravityOfIncidence" id="tipoIncidente" onChange={handleChangeGroup}>
                    <option value=""></option>
                    <option value="Fugas">Fugas</option>
                    <option value="Caídas">Caídas</option>
                    <option value="Agresiones">Agresiones</option>
                    <option value="Errores de mediación">Errores de mediación</option>
                    <option value="Infecciones">Infecciones</option>
                    <option value="Herdos crónicos">Herdos crónicos</option>
                    <option value="Ausencia en terapias">Ausencia en terapias</option>
                    <option value="Conductas adictivas">Conductas adictivas</option>
                </select>
            </div>
            <div className="label-input">
                <label htmlFor="nivelGravedad">Nivel de gravedad</label>
                <select name="group" id="nivelGravedad" onChange={handleChangeGravity}>
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <div className="label-input">
                <label htmlFor="completado">Completado</label>
                <select name="complete" id="completado" onChange={handleChangeComplete}>
                    <option value=""></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                </select>
            </div>
            <button className="boton-buscar-informe" id="boton-buscar-informe" onClick={buscarInformes}>Buscar</button>
        </div>
    );
    }
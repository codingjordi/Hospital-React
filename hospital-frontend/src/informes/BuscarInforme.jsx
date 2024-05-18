export default function BuscarInformes() {

    return (
        <div style={{display: 'flex', gap: '10px'}}>
            <div className="label-input">
                <label htmlFor="buscar">ID del informe</label>
                <input type="text" id="buscar"/>
            </div>
            <div className="label-input">
                <label htmlFor="buscar">Nombre</label>
                <input type="text" id="buscar"/>
            </div>
            <div className="label-input">
                <label htmlFor="buscar">Apellidos</label>
                <input type="text" id="buscar"/>
            </div>
            <div className="label-input">
                <label htmlFor="buscar">Fecha</label>
                <input type="date" id="buscar"/>
            </div>
            <div className="label-input">
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
                </select>
            </div>
            <div className="label-input">
                <label htmlFor="nivel-gravedad">Nivel de gravedad</label>
                <select name="nivel-gravedad" id="">
                    <option value=""></option>
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                </select>
            </div>
            <button className="boton-buscar-informe" id="boton-buscar-informe">Buscar</button>
        </div>
);
    /* */
}
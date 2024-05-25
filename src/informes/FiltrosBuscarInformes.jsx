import { useState } from 'react';

export default function FiltrosBuscarInformes() {
    const [informe, setInforme] = useState({
        id: '',
        name: '',
        surnames: '',
        group: '',
        gravityOfIncidence: '',
        complete: null,
        dateOfIncidence: '',
        inform: ''
    });

    function handleIdChange(e) {
        setInforme({
            ...informe,
            id: e.target.value
        });
    }

    function handleNameChange(e) {
        setInforme({
            ...informe,
            name: e.target.value
        });
    }

    function handleSurnamesChange(e) {
        setInforme({
            ...informe,
            surnames: e.target.value
        });
    }

    function handleGroupChange(e) {
        setInforme({
            ...informe,
            group: e.target.value
        });
    }

    function handleGravityChange(e) {
        setInforme({
            ...informe,
            gravityOfIncidence: e.target.value
        });
    }

    function handleCompleteChange(e) {
        setInforme({
            ...informe,
            complete: e.target.value === 'SI' ? true : false
        });
    }

    function handleDateOfIncidenceChange(e) {
        setInforme({
            ...informe,
            dateOfIncidence: e.target.value
        });
    }

    return (
        <div style={{ display: 'flex', gap: '10px' }}>
            <div className="label-input">
                <label htmlFor="idInforme">ID del informe</label>
                <input type="text" id="idInforme" onChange={handleIdChange} />
            </div>
            <div className="label-input">
                <label htmlFor="nombre">Nombre</label>
                <input type="text" id="nombre" onChange={handleNameChange} />
            </div>
            <div className="label-input">
                <label htmlFor="apellidos">Apellidos</label>
                <input type="text" id="apellidos" onChange={handleSurnamesChange} />
            </div>
            <div className="label-input">
                <label htmlFor="fecha">Fecha</label>
                <input type="date" id="fecha" onChange={handleDateOfIncidenceChange} maxLength={10} />
            </div>
            <div className="label-input">
                <label htmlFor="tipoIncidente">Tipo de incidente</label>
                <select name="gravityOfIncidence" id="tipoIncidente" onChange={handleGravityChange}>
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
                <select name="group" id="nivelGravedad" onChange={handleGroupChange}>
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
                <select name="complete" id="completado" onChange={handleCompleteChange}>
                    <option value=""></option>
                    <option value="SI">SI</option>
                    <option value="NO">NO</option>
                </select>
            </div>
            <button className="boton-buscar-informe" id="boton-buscar-informe">Buscar</button>
        </div>
    );
}

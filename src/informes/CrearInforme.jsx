  import { useState, useContext} from "react";
  import { InformesContext } from "../middleware/APIConnection";


  export default function CrearInforme() {

    const { addInforme } = useContext(InformesContext);

    const [informe, setInforme] = useState({
      name: '',
      surnames: '',
      group: '',
      gravityOfIncidence: '',
      complete: false,
      dateOfIncidence: '',
      dateCompleted: '',
      inform: ''
    });

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

    function handleGravityOfIncidenceChange(e) {
      setInforme({
        ...informe,
        gravityOfIncidence: e.target.value
      });
    }

    // no borrarrr function handleCompleteChange(e) {
    //   if (e.target.checked) {
    //     const confirmed = window.confirm('Vas a marcar este informe como completado. ¿Quieres continuar?');
    //     if (!confirmed) {
    //       return;
    //     }
    //   }
    //   setInforme({
    //     ...informe,
    //     complete: e.target.checked,
    //     dateCompleted: e.target.checked ? formatDateTime(new Date()) : ''
    //   });
    // }

    function handleGuardarInforme(e) {
      e.preventDefault(); 
      // Valida si todos los campos requeridos están llenos
      if (!informe.name || !informe.surnames || !informe.group || !informe.gravityOfIncidence || !informe.dateOfIncidence) {
        alert('Por favor, complete todos los campos requeridos.');
        return;
      }
      addInforme(informe);
      setInforme({
        name: '',
        surnames: '',
        group: '',
        gravityOfIncidence: '',
        complete: false,
        dateOfIncidence: '',
        dateCompleted: '',
        inform: ''
      });
    }

    function handleDateOfIncidenceChange(e) {
      setInforme({
        ...informe,
        dateOfIncidence: e.target.value
      });
    }

    function handleInformChange(e) {
      setInforme({
        ...informe,
        inform: e.target.value
      });
    }

    // no borrar! lo necesitaremos
    // function formatDateTime(date) {
    //   const day = String(date.getDate()).padStart(2, '0');
    //   const month = String(date.getMonth() + 1).padStart(2, '0');
    //   const year = date.getFullYear();
    //   const hours = String(date.getHours()).padStart(2, '0');
    //   const minutes = String(date.getMinutes()).padStart(2, '0');
    //   const seconds = String(date.getSeconds()).padStart(2, '0');
    //   return `${day}-${month}-${year} ${hours}:${minutes}:${seconds}`;
    // }

    return (
      <>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className=" ">
              <label htmlFor="name">Nombre</label>
              <input type="text" name="name" value={informe.name} onChange={handleNameChange} required/>
            </div>
            <div className=" ">
              <label htmlFor="surnames">Apellidos</label>
              <input type="text" name="surnames" value={informe.surnames} onChange={handleSurnamesChange} required/>
            </div>
            <div className=" ">
              <label htmlFor="dateOfIncidence">Fecha del incidente</label>
              <input type="date" name="dateOfIncidence" value={informe.dateOfIncidence} onChange={handleDateOfIncidenceChange} required/>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '10px' }}>
            <div className=" ">
              <label htmlFor="gravityOfIncidence">Tipo de incidencia</label>
              <select id="gravityOfIncidence" name="gravityOfIncidence" value={informe.gravityOfIncidence} onChange={handleGravityOfIncidenceChange} required>
                <option value=""></option>
                <option value="1">1 - Gravedad baja</option>
                <option value="2">2 - Gravedad leve</option>
                <option value="3">3 - Gravedad moderada</option>
                <option value="4">4 - Gravedad alta</option>
                <option value="5">5 - Gravedad extrema</option>
              </select>
            </div>
            <div className=" ">
              <label htmlFor="group">Tipo de incidente</label>
              <select name="group" id="group" value={informe.group} onChange={handleGroupChange} required >
                <option value=""></option>
                <option value="Fugas">Fugas</option>
                <option value="Caídas">Caídas</option>
                <option value="Agresiones">Agresiones</option>
                <option value="Errores de mediación">Errores de mediación</option>
                <option value="Infecciones">Infecciones</option>
                <option value="Herdos crónicos">Heridos crónicos</option>
                <option value="Ausencia en terapias">Ausencia en terapias</option>
                <option value="Conductas adictivas">Conductas adictivas</option>
                <option value="Otro incidente">Otro incidente</option>
              </select>
            </div>
          </div>
          {/* no borrarsh <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div className=" " style={{ display: 'flex', flexDirection: 'column' }}>
              <label htmlFor="complete">Completado</label>
              <input type="checkbox" name="complete" checked={informe.complete} onChange={handleCompleteChange}/>
            </div>
            <div className=" ">
              <label htmlFor="dateCompleted">Fecha de completado</label>
              <input type="text" name="dateCompleted" value={informe.dateCompleted} readOnly/>
            </div>
          </div> */}
        </div>

        <div style={{ backgroundColor: 'white', marginTop: '2rem', padding: '1rem', height: '55vh', borderRadius: '10px' }}>
          <label htmlFor="inform" style={{ color: 'black' }}>Comentarios y observaciones</label>
          <textarea name="inform" id="comentarios-observaciones" value={informe.inform} onChange={handleInformChange} placeholder="Escriba aquí los detalles del informe..."></textarea>
        </div>
        <button onClick={handleGuardarInforme}>Guardar informe</button>
      </>
    );
  }

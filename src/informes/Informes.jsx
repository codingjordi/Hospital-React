import { useState } from "react";
import BuscarInformes from "./BuscarInformes";
import CrearInforme from "./CrearInforme";



export default function Informes() {

    const [isCreating, setIsCreating] = useState(false);

    return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem'}}>
            <h1>{isCreating ? 'Crear informe' : 'Buscar informe'}</h1>
            <button className="boton-crear-informe" onClick={() => setIsCreating(s => !s)}><i className="fas fa-plus" style={{paddingRight: '7px'}}></i>{isCreating ? 'Buscar informe' : 'Crear informe'}</button>
        </div>
        {(isCreating) ?
            <div>
                <CrearInforme />
            </div>
            :
            <div>
                <BuscarInformes />
            </div>
        }
        
        
        
    </>
); 
    

}
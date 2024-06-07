import { useState } from "react";
import BuscarInformes from "./BuscarInformes";
import CrearInforme from "./CrearInforme";



export default function Informes() {

    const [isCreating, setIsCreating] = useState(false);

    return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem'}}>
            <h1>{isCreating ? 'Crear informe' : 'Buscar informe'}</h1>
            <button className="boton-crear-informe" onClick={() => setIsCreating(s => !s)}>
                {isCreating ?
                 <div style={{display: 'flex'}}>
                    <i className="fa-solid fa-magnifying-glass" style={{paddingRight: '7px', marginTop: '-1px'}}></i>
                    <p style={{marginLeft: '5px'}}>Buscar informe</p>
                </div> 
                    : 
                <div style={{display: 'flex'}}>
                    <i className="fas fa-plus" style={{paddingRight: '7px'}}></i>
                    <p style={{marginLeft: '5px', marginTop: '-1px'}}>Crear Informe</p>
                </div> }
                </button>
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
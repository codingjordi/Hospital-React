// import CrearInforme from 'BotonCrearInforme';
// import HistoricoInformes from 'HistoricoInformes';
// import BuscarInformes from 'Buscar';
// import CrearInforme1 from "./CrearInforme/CrearInforme1";

import BuscarInformes from "./BuscarInforme";


export default function Informes() {
    return (
    <>
        <div style={{display: 'flex', justifyContent: 'space-between', marginBottom: '2.5rem'}}>
            <h1>Informes</h1>
            <button className="boton-crear-informe"><i className="fas fa-plus" style={{paddingRight: '7px'}}></i>Crear Informe</button>
        </div>
        {/* <CrearInforme1/> */}
        <BuscarInformes />
        <div style={{backgroundColor: 'white', marginTop: '2rem', height: '72vh'}}>
            <div style={{display: 'flex'}}>
            <i className="fas fa-search" id="search-icon"></i>
            <p>Últimos informes creados</p>

            </div>
        </div>
    </>
); 
    

}
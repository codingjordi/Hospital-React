import { NavLink } from "react-router-dom";
import Tema from '../utils/Tema';
import Configuracion from '../utils/Configuracion';

export default function Header(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'space-between', padding: '2rem 3rem',backgroundColor: '#A10859'}}>
            <nav className='nav-bar' style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
                <NavLink to="/informes" className="nav-link" activeClassName="active">Informes</NavLink>
                <NavLink to="/grupos" className="nav-link" activeClassName="active">Grupos</NavLink>
                <NavLink to="/mensajes" className="nav-link" activeClassName="active">Mensajes</NavLink>
            </nav>
            <div style={{display: 'flex', justifyContent: 'space-between', fontSize: '1.3rem'}}>
                <Tema />
                <Configuracion />
            </div>

        </div>
    );
}
import { NavLink } from "react-router-dom";

export default function Header(){
    return(
        <div style={{display: 'flex', flexDirection: 'column', height: '100vh', justifyContent: 'center', padding: '0 3rem',backgroundColor: '#A10859'}}>
            <nav className='nav-bar' style={{display: 'flex', flexDirection: 'column', gap: '3rem'}}>
                <NavLink to="/informes" className="nav-link" activeClassName="active">Informes</NavLink>
                <NavLink to="/grupos" className="nav-link" activeClassName="active">Grupos</NavLink>
                <NavLink to="/mensajes" className="nav-link" activeClassName="active">Mensajes</NavLink>
            </nav>
            <br />
        </div>
    );
}
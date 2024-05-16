import { Outlet, Link } from "react-router-dom";
import Header from "./Header.jsx";

export default function Layout () {

  return (
    <>
      <nav>
        <div>
          <Header />
        </div>
        <div>
          <Link to="/informes">Informes</Link>
          <br/>
          <Link to="/grupos">Grupos</Link>
          <br />
          <Link to="/mensajes">Mensajes</Link>
          <br />
        </div>
      </nav>

      <div style={{ width: "80%" }}>
        <Outlet />
      </div>
    </>
  );
}


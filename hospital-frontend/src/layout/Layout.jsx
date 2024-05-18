import { Outlet } from "react-router-dom";

import Header from "./Header.jsx";

export default function Layout () {

  return (
    <div style={{display: 'flex', margin: '0 auto'}}>
      
      <Header />
      <div style={{backgroundColor: '#2148C0', width: '100vw'}}>
        <div style={{margin: '1.2rem 3rem'}}>
          <Outlet/>
        </div>
      </div>

    </div>
  );
}


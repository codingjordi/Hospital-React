import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./layout/Layout";
import './App.css'
import Informes from "./informes/Informes";
import Grupos from "./grupos/Grupos";
import Mensajes from "./mensajes/Mensajes";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Informes />} />
          <Route path="informes" element={<Informes />} />
          <Route path="grupos" element={<Grupos />} />
          <Route path="mensajes" element={<Mensajes />} />
          <Route path="*" element={<Informes />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
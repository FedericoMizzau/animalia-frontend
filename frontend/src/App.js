import "./App.css";
import Header from "./components/Header/Header";
import Pacientes from "./components/Pacientes/Pacientes";
import Inicio from "./components/Login/Inicio";
import Controles from "./components/Controles/Controles";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import ModalDialog from "./components/ModalDialog";
import RequireAuth from "./components/RequiereAuth";

function App() {
  return (
    <>
      <BrowserRouter>
        <ModalDialog />
        <Routes>
          <Route path="/login" element={<Inicio />} />
          <Route path="*" element={<Navigate to="/login" replace />} />

          <Route
            path="/pacientes"
            element={
              <RequireAuth>
                <Header />
                <Pacientes />
              </RequireAuth>
            }
          />

          <Route path="/controles" element={<Controles />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;

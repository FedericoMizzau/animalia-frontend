import './App.css'
import Pacientes from './components/Pacientes/Pacientes';
import Inicio from './components/Login/Inicio';
import Controles from './components/Controles/Controles';
import { BrowserRouter, Route, Routes, Navigate } from 'react-router-dom';
import ModalDialog from './components/ModalDialog';

function App() {
  return (
    <>
      <BrowserRouter>
      <ModalDialog/>
          <div className="divBody">
            <Routes>
              <Route path="/login:componentFrom" element={<Inicio/>} />
              <Route path="*" element={<Navigate to="/login:componentFrom" replace />} /> 
              <Route path="/pacientes" element={<Pacientes/>} /> 
              <Route path="/controles" element={<Controles/>} /> 
            </Routes>
          </div>
      
      </BrowserRouter>
    </>

  );
}

export default App;

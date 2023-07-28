import React  from "react";
import './Inicio.css'
import 'bootstrap/dist/js/bootstrap.min.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import { useState, useEffect } from "react";
import {  useNavigate } from "react-router-dom";

import AuthService from "../../services/auth.service";




export default function Inicio() {

  const [usuario, setUsuario] = useState("");
  const [clave, setClave] = useState("");
  const navigate = useNavigate();


 const navigateToComponent = () => {
   navigate(`/pacientes`);
 };

  const handleIngresar = async () => {
    AuthService.login(usuario, clave, navigateToComponent);
  };


useEffect(() => {
    // lo primero que hacemos al ingresar al login es desloguearnos
    // borrando los datos de sessionStorage y el state usuarioLogueado
    AuthService.logout();
 });


    return(

        <div className= "container w-100  mt-5 rounded shadow">
            <div className= "row align-items-stretch">
              <div className="col bg d-none d-lg-block col-md-5 col-lg-5 col-xl-6 rounded-start">
              </div>
              <div className="col bg-white p-5 rounded-end" id="login">
                <h2 className="fw-bold text-center py-5">Bienvenido!</h2>
                <form action="#">
                  <div className="mb-4">
                    <label for="email" className="form-label">Usuario</label>
                    <input type="email" className="form-control" name="email" 
                    onChange={(e) => setUsuario(e.target.value)} value={usuario} autoFocus/>
                  </div>
                  <div className="mb-4">
                    <label for="password" className="form-label">Contraseña</label>
                    <input type="password" className="form-control" name="password"
                    onChange={(e) => setClave(e.target.value)} value={clave}/>
                  </div>
                  <div className="d-grid mb-4">
                    <button type="button" className="btn btn-dark" onClick={(e) => handleIngresar()}>Iniciar Sesion</button>
                  </div>
                </form>
              </div>
            </div>
        </div>
      
    )
  }
import { React, useState, useEffect } from "react";
import PacientesBuscar from "./PacientesBuscar";
import PacientesListado from "./PacientesListado";
import PacientesRegistro from "./PacientesRegistro";
import HorizontalBar from "../HorizontalBar";
import Header from "../Header/Header";
import {pacientesService} from '../../services/pacientes.service'
import modalDialogService from "../../services/modalDialog.service";
import moment from "moment";

const pacienteInicial = {
  id: 0,
  Nombre: "",
  Descripcion: "",
  Peso: null,
  FechaNacimiento: "",
  Esterilizado: false,
  Sexo: "",
  Propietarios_id: null,
  idEspecie: 0,
};

const Pacientes = () => {
  // Definicion de variables de estado.
  //   La accion es Consulta (C), Listado (L), Modificacion (M) o Registro (R) segun la funcionalidad
  const [accion, setAccion] = useState("L");
  const [pacientes, setPacientes] = useState([]);
  const [pacienteActual, setPacienteActual] = useState(pacienteInicial);
  const [busqueda, setBusqueda] = useState(false);
  const [Pagina, setPagina] = useState(1);
  const [Paginas, setPaginas] = useState([]);
  const [RegistrosTotal, setRegistrosTotal] = useState(0);
  const [Activo, setActivo] = useState("");
  const [Items, setItems] = useState(null);
  const [Item, setItem] = useState([]); // usado en BuscarporId (Modificar, Consultar)


  // Variables de estado para los input de busqueda
  const [Nombre, setNombre] = useState("");

  // cargar los pacientes por primera vez

  useEffect(() => {
    async function BuscarPacientes(_pagina) {
      if (_pagina && _pagina !== Pagina) {
        setPagina(_pagina);
      }
      // OJO Pagina (y cualquier estado...) se actualiza para el proximo render, para buscar usamos el parametro _pagina
      else {
        _pagina = Pagina;
      }
      modalDialogService.BloquearPantalla(true);
      const data = await pacientesService.Buscar(Nombre, _pagina);
      modalDialogService.BloquearPantalla(false)
      setItems(data.Items);
      setRegistrosTotal(data.RegistrosTotal);
  
      //generar array de las paginas para mostrar en select del paginador
      const arrPaginas = [];
      for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
        arrPaginas.push(i);
      }
      setPaginas(arrPaginas);
    }
    BuscarPacientes();
    return () => {
      //console.log("unmounting Articulos");
    };
  }, []);

  // useEffect para clogear los pacientes en cada update, solo para testing, sacar para implementacion

  //useEffect(() => {
    //console.log(pacientes);
  //}, [pacientes]);

  // funciones de busqueda


  async function buscarPacientePorId(item, accion) {
    const data = await pacientesService.BuscarPorId(item);
    setItem(data);
    setAccion(accion)
  }

  async function buscarPacientes(_pagina) {
    if (_pagina && _pagina !== Pagina) {
      setPagina(_pagina);
    }
    // OJO Pagina (y cualquier estado...) se actualiza para el proximo render, para buscar usamos el parametro _pagina
    else {
      _pagina = Pagina;
    }
    modalDialogService.BloquearPantalla(true);
    const data = await pacientesService.Buscar(Nombre, _pagina);
    modalDialogService.BloquearPantalla(false);
    setItems(data.Items);
    setRegistrosTotal(data.RegistrosTotal);

    //generar array de las paginas para mostrar en select del paginador
    const arrPaginas = [];
    for (let i = 1; i <= Math.ceil(data.RegistrosTotal / 10); i++) {
      arrPaginas.push(i);
    }
    setPaginas(arrPaginas);
  }
  function Modificar(item) {
    if (!item.Activo) {
      alert("No puede modificarse un registro Inactivo.");
      return;
    }
    buscarPacientePorId(item, "M"); // paso la accionABMC pq es asincrono la busqueda y luego de ejecutarse quiero cambiar el estado accionABMC
  }

  function agregarPaciente() {
    setAccion("A");
    setItem({
      id: 0,
      Nombre: null,
      Peso: 0,
      Especie: null,
      Esterilizado: false,
      FechaNacimiento: moment(new Date()).format("DD-MM-YYYY"),
      Foto: null, // formatear bien la fecha
      Activo: true,
      Sexo: null,
      Propietarios_id: null
    });
  }

  function consultarPaciente(item) {
    buscarPacientePorId(item, "C")
  }

 // function eliminarPaciente(id) {
  //  let newPacientes = pacientes.filter((pac) => pac.id !== id);
  //  setPacientes(newPacientes);
 // }

  function regresarListado() {
    setAccion("L");
    
 // SOLO PARA PRUEBA, REMOVER FUNCION
  }

async function grabarPaciente(item) {
    await pacientesService.Grabar(item);
    await buscarPacientes()
    setPacienteActual(pacienteInicial);
    regresarListado();
}

/*function grabarPaciente(nuevoPaciente) {
    let esNuevo = pacientes.find((pac) => pac.id === nuevoPaciente.id);
    console.log(esNuevo);

    if (esNuevo === undefined) {
      nuevoPaciente.id = pacientes.length + 1; // autoincremental simulado
      setPacientes([...pacientes, nuevoPaciente]);
    } else {
      let indicePacienteActualizado = pacientes.indexOf(esNuevo);
      console.log(indicePacienteActualizado);
      pacientes[indicePacienteActualizado] = nuevoPaciente;
    }
  }
*/
  return (
  
    <div className="container-fluid">
      <div>
        <Header></Header>
        {accion === "L" && (
          <PacientesBuscar
            Nombre={Nombre}
            setNombre={setNombre}
            buscarPacientes={buscarPacientes}
            agregarPaciente={agregarPaciente}
          />
        )}
      </div>
      <HorizontalBar />
      <div>
      {accion === "L" && Items?.length > 0 && <PacientesListado
        {...{
          Items,
          consultarPaciente,
          accion,
          Pagina,
          RegistrosTotal,
          Paginas,
          setAccion,
          buscarPacientes,
          Modificar
        }}
      />}
      {accion === "L" && Items?.length === 0 && 
      <div className="row">
      <div className="col-auto col-md-12 mx-auto">
        <h3>No se encontraron pacientes...</h3>
      </div>
      <div className="col-auto mx-auto">
      <button
          onClick={() => regresarListado()}
          className="btn btn-volver shadow-small my-2"
        >
          VOLVER
          <i className="bi bi-arrow-counterclockwise ms-1"></i>
        </button>
      </div>
    </div>
      }
        {accion !== "L" && (
          <PacientesRegistro
            accion={accion}
            setAccion={setAccion}
            Item={Item}
            regresarListado={regresarListado}
            grabarPaciente={grabarPaciente}
            pacienteActual={pacienteActual}
          />
        )}
      </div>
    </div>
  );
};

export default Pacientes;

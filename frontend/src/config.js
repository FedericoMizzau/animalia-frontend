//const urlServidor = "http://localhost:3000"
//const urlServidor = "https://dds-backend.azurewebsites.net"

//const urlServidor = "https://webapi.pymes.net.ar"
const urlServidor = "http://localhost:4000"

const urlResourcePacientes = urlServidor + "/api/animales";
const urlResourcePropietarios = urlServidor + "/api/propietarios"
const urlResourceControles = urlServidor + "/api/controles";

export const config = {
    urlServidor,
    urlResourcePacientes,
    urlResourcePropietarios,
    urlResourceControles
}
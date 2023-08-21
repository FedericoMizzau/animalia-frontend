import { config } from "../config";
import httpService from "./http.service";

const urlResource = config.urlResourcePropietarios;

async function BuscarPropietarios(Nombre, Pagina) {
  const resp = await httpService.get(urlResource, {
    params: { Nombre, Pagina },
  });
  console.log(resp.data);
  return resp.data;
}

async function BuscarPorId(item) {
  const resp = await httpService.get(urlResource + "/" + item.id, {
    params: item.id
  });
  return resp.data;
}

async function ActivarDesactivar(item) {
  await httpService.delete(urlResource + "/" + item.id);
}

async function Grabar(item) {
  if (item.id === 0) {
    await httpService.post(urlResource, item);
  } else {
    await httpService.put(urlResource + "/" + item.id, item);
  }
}

export const propietariosService = {
  BuscarPropietarios,
  BuscarPorId,
  ActivarDesactivar,
  Grabar,
};

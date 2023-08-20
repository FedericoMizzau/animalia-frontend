import {config} from "../config";
import httpService from "./http.service";

const urlResource = config.urlResourcePropietarios;

async function BuscarPorId(item) {
  const resp = await httpService.get(urlResource + "/" + item.id);
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
  BuscarPorId,ActivarDesactivar,Grabar
};
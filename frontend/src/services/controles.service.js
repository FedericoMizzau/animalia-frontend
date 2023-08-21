import {config} from "../config.js";
import httpService from "./http.service.js";

const urlResource = config.urlResourceControles;

async function BuscarControles(Animales_id){
    let res = await httpService.get(urlResource, {
        params: {Animales_id}
    });
    console.log(res.data);
    return (res.data);
}

async function BuscarPorId(item){
    let res = await httpService.get(urlResource + "/" + item.id);
    return res.data;
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

export const controlesService = {
    BuscarControles, BuscarPorId, ActivarDesactivar, Grabar
}
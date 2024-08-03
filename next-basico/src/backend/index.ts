import { salvarUsuario } from "./usuario/salvarUsuario";
import { obterTodos } from "./usuario/obterTodos";
import { deletarUsuario } from "./usuario/deletarUsuario";

//Padrão Facade
export default class Backend {
  static readonly usuarios = {
    salvarUsuario,
    obterTodos,
    deletarUsuario,
  };
}

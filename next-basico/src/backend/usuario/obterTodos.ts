"use server";

import RepositorioUsuario from "./RepositorioUsuario";

export const obterTodos = async () => {
  return RepositorioUsuario.obterTodos();
};

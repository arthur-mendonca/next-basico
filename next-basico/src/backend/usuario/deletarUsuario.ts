"use server";

import RepositorioUsuario from "./RepositorioUsuario";

export const deletarUsuario = async (id: string) => {
  return RepositorioUsuario.deletar(id);
};

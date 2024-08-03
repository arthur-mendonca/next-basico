"use server";

import { Usuario } from "@/shared/models/Usuario";
import Id from "@/shared/utils/id";
import RepositorioUsuario from "./RepositorioUsuario";

export const salvarUsuario = async (usuario: Partial<Usuario>) => {
  const novoUsuario = { ...usuario, id: usuario.id ?? Id.novo };

  return RepositorioUsuario.salvar(novoUsuario as Usuario);
};

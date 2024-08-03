import Backend from "@/backend";
import { Usuario } from "@prisma/client";
import { useState, useEffect } from "react";

export default function useUsuarios() {
  const [usuario, setUsuario] = useState<Partial<Usuario> | null>(null);
  const [listaUsuarios, setListaUsuarios] = useState<Usuario[]>([]);

  useEffect(() => {
    Backend.usuarios.obterTodos().then(setListaUsuarios);
  }, []);

  const salvar = async () => {
    // Salvar um usuário no banco de dados;
    if (!usuario) {
      console.log("Falha ao criar usário");
      return;
    }
    await Backend.usuarios.salvarUsuario(usuario);
    const usuarios = await Backend.usuarios.obterTodos();
    setListaUsuarios(usuarios);
    setUsuario(null);
    console.log("Usuário salvo com sucesso");
  };

  const deletar = async () => {
    // Deletar um usuário no banco de dados;
    if (!usuario || !usuario.id) {
      console.log("Falha ao deletar usuário");
      return;
    }

    await Backend.usuarios.deletarUsuario(usuario.id);
    const usuarios = await Backend.usuarios.obterTodos();
    setListaUsuarios(usuarios);
    setUsuario(null);
    console.log("Usuário deletado com sucesso");
  };

  return {
    listaUsuarios,
    usuario,
    setUsuario,
    salvar,
    deletar,
    cancelar: () => setUsuario(null),
    atualizarUsuario: (usuario: Partial<Usuario> | null) => setUsuario(usuario),
  };
}

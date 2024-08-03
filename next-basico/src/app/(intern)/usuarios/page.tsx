"use client";
import { Pagina } from "@/app/components/templates/Pagina";
import { Titulo } from "@/app/components/templates/Titulo";
import { FormularioUsuario } from "@/app/components/usuario/FormularioUsuario";
import { ListaUsuario } from "@/app/components/usuario/ListaUsuario";
import useUsuarios from "@/app/data/hooks/useUsuarios";
import { IconPlus, IconUser } from "@tabler/icons-react";

const Page = () => {
  const {
    atualizarUsuario,
    deletar,
    listaUsuarios,
    cancelar,
    usuario,
    salvar,
  } = useUsuarios();

  return (
    <Pagina className={``}>
      <div className="flex flex-col gap-4">
        <Titulo icone={IconUser} principal="Usuários" sub="Lista de usuários" />

        {usuario ? (
          <FormularioUsuario
            usuario={usuario}
            onChange={atualizarUsuario}
            salvar={salvar}
            cancelar={() => cancelar()}
            deletar={deletar}
          />
        ) : (
          <>
            <div className="flex justify-end">
              <button
                className="flex items-center gap-1 bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-md"
                onClick={() => atualizarUsuario({})}>
                <IconPlus />
                <span>Novo Usuário</span>
              </button>
            </div>
            <ListaUsuario usuarios={listaUsuarios} onClick={atualizarUsuario} />
          </>
        )}
      </div>
    </Pagina>
  );
};

export default Page;

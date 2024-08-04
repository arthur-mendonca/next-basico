import { Usuario } from "@/shared/models/Usuario";
import { IconUserCircle } from "@tabler/icons-react";

export interface LinhaUsuarioProps {
  usuario: Usuario;
  onClick?: (usuario: Usuario) => void;
}

export const LinhaUsuario = (props: LinhaUsuarioProps) => {
  return (
    <>
      <div
        className="flex p-4 bg-zinc-800 rounded-md hover:bg-zinc-700 cursor-pointer"
        onClick={() => props.onClick?.(props.usuario)}>
        <div className="flex gap-3 items-center">
          <div>
            <IconUserCircle size={60} />
          </div>
          <div className="flex flex-col gap-1">
            <span className="text-xl font-semibold">{props.usuario.nome}</span>
            <span className="text-sm text-zinc-400">{props.usuario.email}</span>
          </div>
        </div>
      </div>
    </>
  );
};

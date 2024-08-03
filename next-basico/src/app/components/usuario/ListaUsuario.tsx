import { LinhaUsuario } from "./LinhaUsuario";
import { Usuario } from "@/shared/models/Usuario";

export interface ListaUsuarioProps {
  usuarios: Usuario[];
  onClick?: (usuario: Usuario) => void;
}

export const ListaUsuario = (props: ListaUsuarioProps) => {
  return (
    <>
      <div className="flex flex-col gap-4">
        {props.usuarios.map((usuario: Usuario, index) => {
          return (
            <LinhaUsuario
              key={usuario.id}
              usuario={usuario}
              onClick={props.onClick}></LinhaUsuario>
          );
        })}
      </div>
    </>
  );
};

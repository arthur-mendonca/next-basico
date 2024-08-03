import { InputTexto } from "@/shared/InputTexto";
import { Usuario } from "@/shared/models/Usuario";

export interface FormularioUsuarioProps {
  usuario: Partial<Usuario>;
  onChange: (usuario: Partial<Usuario>) => void;
  salvar: () => void;
  cancelar: () => void;
  deletar: () => void;
}

export const FormularioUsuario = (props: FormularioUsuarioProps) => {
  return (
    <>
      <form className="flex flex-col gap-2 border border-purple-300 rounded-md p-4 ">
        <InputTexto
          label="Nome"
          value={props.usuario.nome}
          onChange={(e) => {
            props.onChange?.({ ...props.usuario, nome: e.target.value });
          }}
        />
        <InputTexto
          label="E-mail"
          type="email"
          value={props.usuario.email}
          onChange={(e) => {
            props.onChange?.({ ...props.usuario, email: e.target.value });
          }}
        />
        <InputTexto
          label="Senha"
          type="password"
          value={props.usuario.senha}
          onChange={(e) => {
            props.onChange?.({ ...props.usuario, senha: e.target.value });
          }}
        />
        <div className="flex gap-5 pt-2 justify-between">
          <div className="flex gap-4">
            <button
              className="bg-purple-500 hover:bg-purple-400 px-4 py-2 rounded-md"
              onClick={props.salvar}>
              Salvar
            </button>
            <button
              className="bg-zinc-500 px-4 py-2 rounded-md"
              onClick={props.cancelar}>
              Cancelar
            </button>
          </div>
          <button
            className="bg-red-500 hover:bg-red-900 px-4 py-2 rounded-md"
            onClick={props.deletar}>
            Excluir
          </button>
        </div>
      </form>
    </>
  );
};

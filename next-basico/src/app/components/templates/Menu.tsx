import { IconHome, IconUser } from "@tabler/icons-react";
import { MenuItem } from "./MenuItem";

export const Menu = () => {
  return (
    <aside className="w-72 bg-zinc-900 h-screen">
      <nav className="flex flex-col gap-2 py-7">
        <MenuItem icone={IconHome} texto="Início" url="/" />
        <MenuItem icone={IconUser} texto="Cadastrar usuários" url="/usuarios" />
      </nav>
    </aside>
  );
};

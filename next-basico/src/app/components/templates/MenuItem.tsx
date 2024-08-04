import Link from "next/link";
import { ElementType } from "react";

export interface MenuItemProps {
  icone: ElementType;
  texto: string;
  url: string;
}

export const MenuItem = (props: MenuItemProps) => {
  return (
    <Link href={props.url} className="flex gap-2 px-4 py-2 hover:bg-zinc-600">
      <props.icone className="text-purple-400" size={24} />
      <span className="text-purple-200">{props.texto}</span>
    </Link>
  );
};

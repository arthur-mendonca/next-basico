import { ElementType } from "react";

export interface TituloProps {
  principal: string;
  sub: string;
  icone: ElementType;
}

export const Titulo = (props: TituloProps) => {
  return (
    <>
      <div className="flex gap-2">
        <props.icone size={80} stroke={0.8} />
        <div className="flex flex-col justify-center">
          <h1 className="text-2xl font-black">{props.principal}</h1>
          <h2 className="text-zinc-400">{props.sub}</h2>
        </div>
      </div>
    </>
  );
};

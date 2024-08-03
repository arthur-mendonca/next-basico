import { Menu } from "./Menu";

export interface PaginaProps {
  children: React.ReactNode;
  className?: string;
}

export const Pagina = (props: PaginaProps) => {
  return (
    <div className={`flex ${props.className}`}>
      <Menu />
      <div className="w-full max-w-[1024px] mx-auto">
        <main className={`flex-1 p-6`}>{props.children}</main>
      </div>
    </div>
  );
};

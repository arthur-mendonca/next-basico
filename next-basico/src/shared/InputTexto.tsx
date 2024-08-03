"use client";
import { InputHTMLAttributes } from "react";

export interface InputTextoProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
}

export const InputTexto = (props: InputTextoProps) => {
  return (
    <>
      <div className="flex flex-col gap-2">
        <label>{props.label}</label>
        <input
          {...props}
          className="bg-zinc-800 py-2 px-4 rounded-md outline-none"
        />
      </div>
    </>
  );
};

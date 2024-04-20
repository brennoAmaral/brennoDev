import { HTMLAttributes, HtmlHTMLAttributes } from "react";

type IClass<T> = HtmlHTMLAttributes<T>["className"];
type IClassDiv = IClass<HTMLDivElement>;

export interface IStyleLangButton {
  wrapper: IClassDiv;
  label: IClass<HTMLLabelElement>;
  labelWhenMenuIsUp: IClass<HTMLLabelElement>;
  divMenu: IClassDiv;
  styleOptions: IClassDiv;
  menuOpen: IClassDiv;
  menuClose: IClassDiv;
  divCloseButton: IClassDiv;
}

export interface IStyleLangMenu extends Omit<IStyleLangButton, "wrapper" | "label" | "labelWhenMenuIsUp"> {}

const styleLangButton: IStyleLangButton = {
  wrapper: "relative",
  label: `
    w-10
    h-10
    rounded-full
    bg-tertiary
    bg-opacity-30
    flex justify-center
    items-center
    absolute
    right-0
    top-[-17px]
    z-20
  `,
  labelWhenMenuIsUp: `
    z-0
  `,
  divCloseButton: `
    w-100
    flex
    justify-end
  `,
  divMenu: `
    transition-all
    duration-150
    ease-in
    opacity-0
    overflow-hidden
    flex flex-col
    justify-around
    bg-background-dark
    border-tertiary
    rounded-lg
    gap-2
    absolute 
    right-0
    top-[-17px]
  `,
  menuOpen: `
    w-auto
    h-auto
    border-2
    p-2
    opacity-100
    z-20
  `,
  menuClose: `
    w-0
    h-0
    z-0
  `,
  styleOptions: `
    text-tertiary
    flex flex-row
    gap-3
    items-center
    rounded-md
    ps-1
    py-2
    pe-3
    hover:bg-tertiary
    hover:bg-opacity-15
  `,
};

export default styleLangButton;

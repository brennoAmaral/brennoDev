import { HTMLAttributes, HtmlHTMLAttributes } from "react";

type IClass<T> = HtmlHTMLAttributes<T>["className"];
type IClassDiv = IClass<HTMLDivElement>;

interface IStyleLangButton {
  wrapper: IClassDiv;
  label: IClass<HTMLLabelElement>;
  divMenu: IClassDiv;
  options: IClassDiv;
}

const styleLangButton: IStyleLangButton = {
  wrapper: 'relative',
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
    absolute right-0
    top-[-17px]
  `,
  options: `
    text-tertiary
    bg-opacity-10
    flex flex-row
    gap-3
    items-center
    rounded-md
    ps-1
    py-2
    pe-3
    hover:bg-tertiary
    hover:bg-opacity-25
  `,
};

export default styleLangButton;

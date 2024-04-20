import { IClass, IClassDiv } from "../type-style";

export type ILangsAcronymAvailable = "pt" | "en";

export interface ILangOptions {
  fullLang: string;
  acronymLang: ILangsAcronymAvailable;
  svg: () => JSX.Element;
}

export type IChangeLang = (cronymLang: ILangsAcronymAvailable) => void;

export interface IUseLangButton {
  langMenu: boolean;
  pathName: string;
  setLangMenu: (value: boolean) => void;
  langMenuHooks: {
    langListOptions: ILangOptions[];
    changeLang: IChangeLang;
    langMenu: boolean;
    pathName: string;
    setLangMenu: (value: boolean) => void;
    changeSizeMenu: () => string;
  }
}

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
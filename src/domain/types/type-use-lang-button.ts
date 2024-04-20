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

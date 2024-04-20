import { IStyleLangButton } from "@/presentation/lang-button/style-lang-button";
import { ILangOptions, ILangsAcronymAvailable } from "./type-use-lang-button";

export interface ILangMenu {
  styleLangButton: IStyleLangButton
  langMenu: boolean
  pathName: string
  listOptions: ILangOptions[]
  bgColorCurrentLang:(acronymLang: ILangsAcronymAvailable)=>'bg-tertiary'|void
  changeLang:(acronymLang: ILangsAcronymAvailable)=>void
  setLangMenu: (value: boolean)=> void
}
import { IStyleLangMenu } from "@/presentation/lang-button/style-lang-button";
import { ILangOptions, ILangsAcronymAvailable } from "./type-use-lang-button";

export interface ILangMenu {
  styleLangButton: IStyleLangMenu
  langMenu: boolean
  pathName: string
  langListOptions: ILangOptions[]
  changeLang:(acronymLang: ILangsAcronymAvailable)=>void
  setLangMenu: (value: boolean)=> void
}
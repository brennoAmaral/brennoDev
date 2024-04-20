export type ILangsAcronymAvailable = 'pt' | 'en'

export interface ILangOptions{
  fullLang: string,
  acronymLang: ILangsAcronymAvailable,
  svg: ()=>JSX.Element
}
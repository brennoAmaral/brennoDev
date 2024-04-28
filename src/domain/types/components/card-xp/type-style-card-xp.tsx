import { IClass } from "../../type-style";

export interface IStyleCardXp{
  title: IClass<HTMLElement>
  wrapper: IClass<HTMLElement>
  card: IClass<HTMLElement>
  cardOverlay: {
    wrapper: IClass<HTMLElement>
    svgsAlign: IClass<HTMLElement>
    description: IClass<HTMLElement>
  }
}
import { ICardXp } from "../card-xp/type-card-xp";

export interface IExperience extends ICardXp{
  experiencTittle: string
}
export interface ISectionTimeLine{
  sectionTittle: string
  experiences: IExperience[]
}

export interface IContentCard {
  exp: IExperience;
  index: number;
}

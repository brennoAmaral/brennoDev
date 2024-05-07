import { ICardXp } from "../card-xp/type-card-xp";

export type IExperiences = ICardXp[]
export interface ISectionTimeLine{
  title: string
  experiences: IExperiences
}
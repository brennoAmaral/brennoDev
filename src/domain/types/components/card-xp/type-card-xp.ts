import { StaticImageData } from "next/image"

export interface ICardXp{
  img: StaticImageData
  pillLink: React.ReactNode
  arrSvg: React.ReactNode[]
  title: string
  description: string
}
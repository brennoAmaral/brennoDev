import { IStyleSectionTimeLine } from "@/domain/types/components/section-timel-line.tsx/type-style-section-time-line";

export const styleSectionTimeLine: IStyleSectionTimeLine = {
  card: `
    flex
    flex-col
    justify-center
    items-center
    gap-5
    snap-center
    shrink-0
  `,
  scrollDiv:`
    
  
  `,
  containerAllCards: `
    relative
    w-full
    snap-x
    snap-mandatory
    overflow-x-auto
    flex
    justify-center
    items-center
  `,
  wrapper: `
    w-full
    flex
    flex-col
    justify-center
    items-center
  `
}
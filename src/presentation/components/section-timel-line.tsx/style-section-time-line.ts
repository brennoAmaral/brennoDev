import { IStyleSectionTimeLine } from "@/domain/types/components/section-timel-line.tsx/type-style-section-time-line";

export const styleSectionTimeLine: IStyleSectionTimeLine = {
  cardMobile:`
    justify-center
    items-center
    gap-5
    snap-center
    shrink-0
    flex
    md:hidden
  `,
  card: `
    w-[35vw]
    max-w-[550px]
    justify-center
    items-center
    gap-5
    snap-center
    shrink-0
    hidden
    sm:hidden
    md:flex
    md:flex-wrap
    
  `,

  h3: 'text-primary font-bold text-lg',

  scrollDiv:`
    
  
  `,
  containerAllCards: `
    w-full
    snap-x
    overflow-x-auto
    flex
    flex-col
    items-center
    justify-center
    sm:flex-col
    sm:items-center
    sm:justify-center
    md:flex-row  
    md:items-normal  
    md:justify-normal  
    `,
  wrapper: `
    w-full
    flex
    flex-col
    justify-center
    items-center
  `
}
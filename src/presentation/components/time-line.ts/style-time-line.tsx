import { IStyleTimeLine } from "@/domain/types/components/time-line/type-style-time-line";

export const styleTimeLine: IStyleTimeLine ={
  dot:`
    grow-0
    w-6
    h-6
    rounded-full
    bg-tertiary
    border-4
    border-[#604229]
  `,
  startLine: `
    grow
    
    bg-gradient-to-r
    from-primary/50
    from-1%
    via-dark 
    via-100%
    w-5/12
    h-4      
  `,
  endLine:`  
    grow
    rounded-l-lg
    bg-gradient-to-r
    from-primary
    from-1%
    via-primary/50 
    via-100% 
    w-5/12
    h-4
  `,
  wrapper:`
    flex
    justify-center
    items-center
    gap-1
    w-full
    `
}
import { IStyleCardXp } from "@/domain/types/components/card-xp/type-style-card-xp";

const styleCardXp: IStyleCardXp = {
  h3: 'text-primary font-bold text-lg',
  wrapper: `
    flex
    flex-col
    gap-4
    align-center
    justify-center
    max-w-[550px]
    `,
  card:`
    border-2
    border-primary
    shadow-[0_0_15px_0_rgba(115,65,255,0.6)] 
    
    rounded-xl
    max-h-[550px]
    max-w-[550px]
    overflow-hidden
  `,
  styleImg:`
    w-[100%]
  `,
  cardOverlay:{
    description: '',
    svgsAlign: '',
    wrapper: '',
  }
}

export default styleCardXp
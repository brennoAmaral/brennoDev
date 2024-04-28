import { IStyleCardXp } from "@/domain/types/components/card-xp/type-style-card-xp";

const styleCardXp: IStyleCardXp = {
  title: 'text-primary font-bold text-lg',
  wrapper: `
    flex
    flex-col
    gap-2
    align-center
    justify-center  
  `,
  card:`
    border-2
    border-primary
    shadow-[0_0px_6px_-0px_rgba(0,0,0,0.6)] 
    shadow-primary
    rounded-xl
  `,
  cardOverlay:{
    description: '',
    svgsAlign: '',
    wrapper: '',
  }
}

export default styleCardXp
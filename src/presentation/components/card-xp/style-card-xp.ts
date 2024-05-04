import { IStyleCardXp } from '@/domain/types/components/card-xp/type-style-card-xp';

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
  card: `
    border-[3px]
    border-primary
    transition-all
    duration-200
    ease-in
    hover:shadow-[0_0_30px_0_rgba(115,65,255,0.6)] 
    
    rounded-xl
    max-h-[550px]
    max-w-[550px]
    relative
    overflow-hidden
  `,

  styleImg: `
    w-[100%]
  `,
  cardOverlay: {
    wrapper: `
    w-[100%]
    h-[100%]
    absolute
    transition-all
    duration-200
    rounded-[9px]
    backdrop-blur-md
    flex
    justify-center
    items-center
    `,
    description: `
      absolute
      bottom-0
      bold
    `,
  },
};

export default styleCardXp;

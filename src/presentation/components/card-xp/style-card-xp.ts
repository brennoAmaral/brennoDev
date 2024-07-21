import { IStyleCardXp } from '@/domain/types/components/card-xp/type-style-card-xp';

const styleCardXp: IStyleCardXp = {
  wrapper: `
    w-full
    h-full
    flex
    flex-col
    gap-4
    px-[2vw]
    align-center
    justify-center
    max-w-[550px]
    max-h-[550px]
    `,
  card: `
    border-[3px]
    border-primary
    transition-all
    duration-200
    ease-in
    hover:shadow-[0_0_30px_0_rgba(115,65,255,0.6)]   
    rounded-xl
    h-full
    w-full
    max-h-[550px]
    max-w-[550px]
    relative
    overflow-hidden
  `,

  styleImg: `
    w-full
  `,
  cardOverlay: {
    wrapper: `
    w-full
    h-full
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

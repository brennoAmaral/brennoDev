import { IStylePillLink } from "@/domain/types/components/pill-link/type-style-pill-link";

const stylePillLink: IStylePillLink = {
  fill: 'bg-secondary shadow-[0_0px_6px_-0px_rgba(0,0,0,0.6)] shadow-secondary',
  leaked: 'bg-dark border-2 border-secondary',
  defaultLink: `
    w-[100%]
    rounded-full
    py-1

    flex
    flex-grow
    gap-5
    justify-center
    items-center
  `,
  label:{
    fill: 'text-dark',
    leaked: 'text-secondary',
    defaultLabel: 'font-bold'
  },
  svgColor:{
    fill: 'dark',
    leaked: 'secondary'
  } 
}

export default stylePillLink
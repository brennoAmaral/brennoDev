import { IStylePageHome } from "@/domain/types/pages/home/type-page-home"

const stylePageHome: IStylePageHome = {
  wrapper: `
    bg-transparent 
    h-[calc(100vh-60px)]
  `,
  avatar:{
    header:`
      w-[100vw]
      p-5
      bg-gradient-to-b 
      from-primary/60
      from-1%
      via-dark 
      via-100%   
    `,
    alignImageAndTexts: `
      flex
      flex-wrap
      justify-center
      items-center
      gap-10
    `,
    image: `
      w-48
      h-48
      rounded-full
    `,
    alignTexts:`
      w-100%
      sm:max-w-[100%]
      md:max-w-[62vw]
      flex 
      flex-col
      items-center
    `,
    
  }
}

export default stylePageHome

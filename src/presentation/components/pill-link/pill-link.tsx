import { IPillLink } from "@/domain/types/components/pill-link/type-pill-link";
import Link from "next/link";
import stylePillLink from "./style-pill-link";

// const svgs: IVectors = {
//   view: lazy(()=> import('@/presentation/svg/svg-eye')),
//   test: lazy(()=> import('@/presentation/svg/svg-eye'))
// }

const Svg = (name:string)=> import(`@/presentation/svg/svg-${name}`)

export default async function PillLink({href, type, svg, text}:IPillLink){
  const {defaultLink, label, svgColor} = stylePillLink

  
  return(
    <Link href={href} className={`${defaultLink} ${stylePillLink[type]} `}>
        {svg}
        <label className={`${label[type]} ${label.defaultLabel}`} >
          {text}
        </label>
    </Link>
  )
}
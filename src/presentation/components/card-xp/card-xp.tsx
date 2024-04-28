import { ICardXp } from "@/domain/types/components/card-xp/type-card-xp"
import Image from "next/image"
import styleCardXp from "./style-card-xp"

export default function CardXp({arrSvg, description, img, pillLink, title}:ICardXp) {
  const {card, cardOverlay, h3, wrapper, styleImg} = styleCardXp

  return (
    <div className={wrapper}>
      <h3 className={h3}>
        {title}
      </h3>
      <div className={card}>
        <Image src={img} alt="" className={styleImg}/>
      </div>
      {pillLink}
    </div>
  )
}
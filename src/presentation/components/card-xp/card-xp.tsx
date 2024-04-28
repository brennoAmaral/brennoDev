import timesheet from "@/presentation/assets/timesheet.png"
import Image from "next/image"
import styleCardXp from "./style-card-xp"

export default function CardXp() {
  const {card, cardOverlay, title, wrapper} = styleCardXp

  return (
    <div className={wrapper}>
      <h3 className={title}>
        TimeSheet
      </h3>
      <div className={card}>
        <Image src={timesheet} alt=""/>
      </div>
    </div>
  )
}
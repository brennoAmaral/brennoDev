import useTimeLine from "@/data/components/time-line/time-line"
import { ITimeLine } from "@/domain/types/components/time-line/type-time-line"
import { styleTimeLine } from "./style-time-line"

export default function TimeLine({index, lenght}:ITimeLine){
  const {flex} = useTimeLine()
  const {dot, startLine, endLine, wrapper} = styleTimeLine
  return(
    <div className={`${wrapper}`}>
      <label className={`${startLine} ${index == 0 ? 'opacity-0' : ''}`}/>
      <label className={dot}/>
      <label className={`${endLine} ${index+1 == lenght ? 'via-primary/0 via-100% ' : ''}`}/>
    </div>
  )
}
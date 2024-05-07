import { ISectionTimeLine } from "@/domain/types/components/section-timel-line.tsx/type-section-time-line";
import CardXp from "../card-xp/card-xp";
import TimeLine from "../time-line.ts/time-line";

export default function SectionTimeLine({experiences, title}: ISectionTimeLine){
  return(
    <section className="w-[100%] flex flex-col justify-center items-center ">
      <h2>{title}</h2>
      <div  className="w-[100%] max-w-[1260px] h-[500px] flex justify-center items-center">
        {
          experiences.map((exp, index)=>{
            return(
              <div className="w-[100%] max-w-[1260px] h-[500px] flex flex-col justify-center items-center gap-5" key={index}>
                <CardXp {...exp}/>
                <TimeLine index={index} lenght={experiences.length}/>
              </div>
            );
          })
        }
      </div>
    </section>
  );
}
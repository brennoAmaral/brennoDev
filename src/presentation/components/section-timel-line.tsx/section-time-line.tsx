import { ISectionTimeLine } from '@/domain/types/components/section-timel-line.tsx/type-section-time-line';
import CardXp from '../card-xp/card-xp';
import TimeLine from '../time-line.ts/time-line';
import { styleSectionTimeLine } from './style-section-time-line';

export default function SectionTimeLine({
  experiences,
  title,
}: ISectionTimeLine) {
  const { card, containerAllCards, wrapper, scrollDiv } =
    styleSectionTimeLine;
  return (
    <section className={wrapper}>
      <h2>{title}</h2>
        <div className={containerAllCards}>
          <div className='snap-center shrink-0 w-8/12 sm:'></div>
          {experiences.map((exp, index) => {
            return (
              <div className={card} key={index}>
                <CardXp {...exp} />
                <TimeLine
                  index={index}
                  lenght={experiences.length}
                />
              </div>
            );
          })}
        </div>
    </section>
  );
}

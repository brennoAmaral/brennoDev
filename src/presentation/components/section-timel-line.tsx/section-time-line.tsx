import {
  IContentCard,
  ISectionTimeLine
} from '@/domain/types/components/section-timel-line.tsx/type-section-time-line';
import { ReactNode } from 'react';
import CardXp from '../card-xp/card-xp';
import TimeLine from '../time-line.ts/time-line';
import { styleSectionTimeLine } from './style-section-time-line';


export default function SectionTimeLine({
  experiences,
  sectionTittle,
}: ISectionTimeLine) {
  const {
    card,
    cardMobile,
    containerAllCards,
    wrapper,
    h3,
  } = styleSectionTimeLine;

  function CardContentMobile({
    exp,
    index,
  }: IContentCard): ReactNode {
    return (
      <div className={cardMobile}>
        <TimeLine
          index={index}
          lenght={experiences.length}
        />
        <div className="">
          <h3 className={h3}>{exp.experiencTittle}</h3>
          <CardXp {...exp} />
        </div>
      </div>
    );
  }

  function CardContentDesktop({
    exp,
    index,
  }: IContentCard): ReactNode {
    return (
      <div className={card}>
        <h3 className={h3}>{exp.experiencTittle}</h3>
        <CardXp {...exp} />
        <TimeLine
          index={index}
          lenght={experiences.length}
        />
      </div>
    );
  }

  return (
    <section className={wrapper}>
      <h2>{sectionTittle}</h2>
      <div className={containerAllCards}>
        {experiences.map((exp, index) => {
          return (
            <div key={index}>
              <CardContentMobile exp={exp} index={index} />
              <CardContentDesktop exp={exp} index={index} />
            </div>
          );
        })}
      </div>
    </section>
  );
}

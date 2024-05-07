'use client';
import useCardXp from '@/data/components/card-xp/use-card-xp';
import { ICardXp } from '@/domain/types/components/card-xp/type-card-xp';
import Image from 'next/image';
import React from 'react';
import styleCardXp from './style-card-xp';

export default function CardXp({
  arrSvg,
  description,
  img,
  pillLink,
  title,
}: ICardXp) {
  const { setOverlay, showOvelay, opacityOverlay } =
    useCardXp();
  const { card, cardOverlay, h3, wrapper, styleImg } =
    styleCardXp;

  return (
    <div className={wrapper}>
      <h3 className={h3}>{title}</h3>
      <div
        className={card}
        onMouseEnter={() => setOverlay(true)}
        onTouchStart={() => setOverlay(true)}
        onMouseLeave={() => setOverlay(false)}
      >
        <div
          className={`${cardOverlay.wrapper} ${opacityOverlay()}`}
        >
          {arrSvg.map(
            (Componente, index) =>  React.cloneElement(Componente, {key: index})
          )}
          <p className={cardOverlay.description}>
            {description}
          </p>
        </div>
        <Image src={img} alt="" className={styleImg} />
      </div>
      {pillLink}
    </div>
  );
}

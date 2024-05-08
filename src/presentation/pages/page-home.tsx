import { IExperiences } from '@/domain/types/components/section-timel-line.tsx/type-section-time-line';
import timesheet from '@/presentation/assets/img/timesheet.png';
import { useTranslations } from 'next-intl';
import styleBaseLayout from '../components/base-layout/style-base-layout';
import PillLink from '../components/pill-link/pill-link';
import SectionTimeLine from '../components/section-timel-line.tsx/section-time-line';
import SvgEye from '../svg/svg-eye';
import SvgMySql from '../svg/svg-mysql';
import SvgNext from '../svg/svg-next';
import SvgPhp from '../svg/svg-php';
import SvgTailwind from '../svg/svg-tailwind';
import SvgTypescript from '../svg/svg-typescript';
import Avatar from './avatar';
import stylePageHome from './style-page-home';

export default function PageHome() {
  const t = useTranslations('links');
  const skills = [
    <SvgTypescript />,
    <SvgTailwind />,
    <SvgNext />,
    <SvgMySql />,
    <SvgPhp />,
  ];
  const ocupations: IExperiences = [
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
    {
      arrSvg: skills,
      description: 'teste',
      img: timesheet,
      pillLink: (
        <PillLink
          Svg={SvgEye}
          href="teste"
          text={t('view')}
          type="leaked"
        />
      ),
      title: 'TESTE',
    },
  ];
  return (
    <div
      className={`${stylePageHome.wrapper} ${styleBaseLayout.div}`}
    >
      <Avatar />
      <SectionTimeLine title='TITULO INTERESSANTE!!!' experiences={ocupations}/>
      <div className="w-full max-w-[1260px] h-[500px] flex justify-center items-center ">
      </div>
    </div>
  );
}

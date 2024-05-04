import timesheet from '@/presentation/assets/img/timesheet.png';
import { useTranslations } from 'next-intl';
import styleBaseLayout from '../components/base-layout/style-base-layout';
import CardXp from '../components/card-xp/card-xp';
import PillLink from '../components/pill-link/pill-link';
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
  return (
    <div
      className={`${stylePageHome.wrapper} ${styleBaseLayout.div}`}
    >
      <Avatar />
      <CardXp
        img={timesheet}
        arrSvg={[
          <SvgTypescript/>,
          <SvgTailwind/>, 
          <SvgNext/>,
          <SvgMySql/>,
          <SvgPhp/>,

          
        ]}
        description="teste  teste"
        pillLink={
          <PillLink
            Svg={SvgEye}
            href="teste"
            text={t('view')}
            type="leaked"
          />
        }
        title="TESTE"
      />
      


      <label className="h-[250px]">
      </label>
    </div>
  );
}

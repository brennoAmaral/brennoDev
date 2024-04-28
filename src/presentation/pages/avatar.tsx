import pngAvatar from '@/presentation/assets/img/avatar.png';
import { useTranslations } from 'next-intl';
import Image from "next/image";
import stylePageHome from './style-page-home';

  export default function Avatar() {
    const t = useTranslations('home')
    const {avatar:{alignImageAndTexts, alignTexts, header, image}} = stylePageHome
    return (
      <header className={header}>
        <div className={alignImageAndTexts}>          
          <Image src={pngAvatar} alt='' className={image} />
          <div className={alignTexts}>
            <h1>
              {t('ocupation')}
            </h1>
            <p >
              {t('experience-text')}
            </p>
          </div>
        </div>
      </header>
    )
  }

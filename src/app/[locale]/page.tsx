'use client'
import { useTranslations } from "next-intl";
import styleRootPage from "./style-page";


export default function Home() {
  const texts = useTranslations('index')
  return (
    <div className={styleRootPage.div}>

        {texts('title')}
    
    </div>
  );
}

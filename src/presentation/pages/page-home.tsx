import { useTranslations } from "next-intl";
import styleBaseLayout from "../components/base-layout/style-base-layout";
import Avatar from "./avatar";
import stylePageHome from "./style-page-home";

export default function PageHome() {
  const t = useTranslations('links')
  return (
    <div className={`${stylePageHome.wrapper} ${styleBaseLayout.div}`}>
      <Avatar />
      <div className="flex gap-1 justify-center">

        {/* <PillLink Svg={SvgEye} href="teste" text={t('view')} type="leaked" />
        <PillLink Svg={SvgEye} href="teste" text={t('view')} type="fill" /> */}
      </div>
    </div>
  )
}
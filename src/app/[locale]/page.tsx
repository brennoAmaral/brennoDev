import HeaderApp from "@/presentation/header/header";
import SvgBrennoDev from "@/presentation/svg/svg-brenno-dev";
import { useTranslations } from "next-intl";


export default function Home() {
  const texts = useTranslations('index')
  return (
    <main className=" ">
        <HeaderApp/>
        {texts('title')}
      </main>
  );
}

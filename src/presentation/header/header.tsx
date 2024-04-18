import LangButton from "../lang-button/lang-button";
import SvgBrennoDev from "../svg/svg-brenno-dev";
import SvgTranslate from "../svg/svg-lang";

export default function HeaderApp() {
  return (
    <header className="p-5 flex flex-row justify-between items-center">

        <SvgBrennoDev />
        <LangButton />
    </header>
  )
}
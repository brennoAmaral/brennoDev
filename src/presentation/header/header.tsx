import LangButton from "../lang-button/lang-button";
import SvgBrennoDev from "../svg/svg-brenno-dev";
import styleHeader from "./style-header";

export default function HeaderApp() {
  return (
    <header id="header" className={styleHeader.header}>

        <SvgBrennoDev />
        <LangButton />
    </header>
  )
}
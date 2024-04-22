import SvgBrennoDev from "../../svg/svg-brenno-dev";
import LangButton from "../lang-button/lang-button";
import styleHeader from "./style-header";

export default function HeaderApp() {
  const {header, toolbar} = styleHeader
  return (
    <div className={header}>
      <div className={toolbar}>

        <SvgBrennoDev />
        <LangButton />
      </div>
    </div>
  )
}